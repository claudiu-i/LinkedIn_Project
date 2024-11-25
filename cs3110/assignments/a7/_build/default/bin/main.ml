open Lwt.Infix

(** [print_usage ()] prints the correct usage instructions for the application. *)
let print_usage () =
  let usage =
    "Usage:\n" ^ "  dune exec bin/main.exe server IP_ADDRESS PORT\n"
    ^ "  dune exec bin/main.exe client IP_ADDRESS PORT USERNAME"
  in
  Lwt_io.printl usage

(** [get_ip addr] converts an IP address string to [Unix.inet_addr]. *)
let get_ip addr =
  try Some (Unix.inet_addr_of_string addr) with Failure _ -> None

(** [handle_client client_socket client_addr] handles communication with a
    connected client. It reads a single message from the client and prints it
    along with the client's address. *)
let handle_client (client_socket : Lwt_unix.file_descr)
    (client_addr : Unix.sockaddr) =
  let ip, port =
    match client_addr with
    | Unix.ADDR_INET (inet_addr, port) ->
        (Unix.string_of_inet_addr inet_addr, port)
    | _ -> ("Unknown", 0)
  in
  Lwt_io.printlf "Received connection from client %s:%d." ip port >>= fun () ->
  let ic = Lwt_io.of_fd ~mode:Lwt_io.input client_socket in
  Lwt_io.read_line_opt ic >>= function
  | Some message ->
      Lwt_io.printlf "Message received from client %s:%d. %s" ip port message
  | None ->
      Lwt_io.printlf "Client %s:%d disconnected without sending a message." ip
        port

(** [start_server ip port] starts the server listening on the given [ip] and
    [port]. *)
let start_server ip port =
  match get_ip ip with
  | None -> Lwt_io.printlf "Invalid IP address: %s" ip
  | Some inet_addr ->
      let sockaddr = Unix.ADDR_INET (inet_addr, port) in
      Lwt_io.printlf "Starting server on %s:%d..." ip port >>= fun () ->
      let server_socket = Lwt_unix.socket Unix.PF_INET Unix.SOCK_STREAM 0 in
      Lwt_unix.setsockopt server_socket Unix.SO_REUSEADDR true;
      Lwt_unix.bind server_socket sockaddr >>= fun () ->
      Lwt_unix.listen server_socket 10;
      let rec accept_loop () =
        Lwt_unix.accept server_socket >>= fun (client_socket, client_addr) ->
        Lwt.async (fun () -> handle_client client_socket client_addr);
        accept_loop ()
      in
      accept_loop ()

(** [start_client ip port username] starts the client, connects to the server,
    sends a message, and exits. *)
let start_client ip port username =
  match get_ip ip with
  | None -> Lwt_io.printlf "Invalid IP address: %s" ip
  | Some inet_addr ->
      let sockaddr = Unix.ADDR_INET (inet_addr, port) in
      Lwt_io.printlf "Connecting to server %s:%d as user '%s'..." ip port
        username
      >>= fun () ->
      let client_socket = Lwt_unix.socket Unix.PF_INET Unix.SOCK_STREAM 0 in
      Lwt.catch
        (fun () ->
          Lwt_unix.connect client_socket sockaddr >>= fun () ->
          let oc = Lwt_io.of_fd ~mode:Lwt_io.output client_socket in
          Lwt_io.printl "Enter your message:" >>= fun () ->
          Lwt_io.read_line Lwt_io.stdin >>= fun message ->
          Lwt_io.write_line oc message >>= fun () ->
          Lwt_io.close oc >>= fun () ->
          Lwt_io.printl "Message sent successfully.")
        (fun exn ->
          Lwt_io.printlf "Failed to connect or send message: %s"
            (Printexc.to_string exn))

(** [main ()] parses command-line arguments and starts the server or client
    accordingly. *)
let main () =
  match Array.to_list Sys.argv with
  | [ _; "server"; ip; port_str ] -> (
      try
        let port = int_of_string port_str in
        Lwt_main.run (start_server ip port)
      with Failure _ ->
        Lwt_main.run
          ( Lwt_io.printlf "Port must be an integer.\n" >>= fun () ->
            print_usage () ))
  | [ _; "client"; ip; port_str; username ] -> (
      try
        let port = int_of_string port_str in
        if String.trim username = "" then
          Lwt_main.run
            ( Lwt_io.printl "Username cannot be empty.\n" >>= fun () ->
              print_usage () )
        else Lwt_main.run (start_client ip port username)
      with Failure _ ->
        Lwt_main.run
          ( Lwt_io.printlf "Port must be an integer.\n" >>= fun () ->
            print_usage () ))
  | _ ->
      Lwt_main.run
        ( Lwt_io.printl "Incorrect number of arguments.\n" >>= fun () ->
          print_usage () )

let () = main ()
