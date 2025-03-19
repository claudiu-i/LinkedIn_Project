import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const VideoChat = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const peerRef = useRef(null);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localVideoRef.current.srcObject = stream;
        socket.emit("join-room");
      });

    socket.on("offer", async (offer) => {
      peerRef.current = new RTCPeerConnection();
      stream.getTracks().forEach(track => peerRef.current.addTrack(track, stream));

      await peerRef.current.setRemoteDescription(new RTCSessionDescription(offer));
      const answer = await peerRef.current.createAnswer();
      await peerRef.current.setLocalDescription(answer);
      socket.emit("answer", answer);
    });

    socket.on("answer", async (answer) => {
      await peerRef.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    socket.on("candidate", async (candidate) => {
      await peerRef.current.addIceCandidate(new RTCIceCandidate(candidate));
    });

    return () => socket.disconnect();
  }, []);

  const startCall = async () => {
    peerRef.current = new RTCPeerConnection();
    const stream = localVideoRef.current.srcObject;
    stream.getTracks().forEach(track => peerRef.current.addTrack(track, stream));

    peerRef.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit("candidate", event.candidate);
      }
    };

    peerRef.current.ontrack = (event) => {
      remoteVideoRef.current.srcObject = event.streams[0];
    };

    const offer = await peerRef.current.createOffer();
    await peerRef.current.setLocalDescription(offer);
    socket.emit("offer", offer);
    setConnected(true);
  };

  return (
    <div>
      <video ref={localVideoRef} autoPlay playsInline style={{ width: "300px" }} />
      <video ref={remoteVideoRef} autoPlay playsInline style={{ width: "300px" }} />
      {!connected && <button onClick={startCall}>Start Call</button>}
    </div>
  );
};

export default VideoChat;