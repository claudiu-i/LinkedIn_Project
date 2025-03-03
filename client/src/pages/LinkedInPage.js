import React from 'react'
import {
  Layout,
  Avatar,
  Card,
  Button,
  Typography,
  Space,
  Flex,
  Menu,
  Input,
} from 'antd';
import Icon, {
  PlusOutlined,
  SearchOutlined,
  CaretDownOutlined,
} from '@ant-design/icons';
const { Header, Footer, Sider, Content } = Layout
const { Meta } = Card
const { Text } = Typography

const BookmarkSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2' />
  </svg>
)
const GroupsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M8.5 7h-1A1.5 1.5 0 006 8.5V14h4V8.5A1.5 1.5 0 008.5 7zM12.75 8h-.5A1.25 1.25 0 0011 9.25V14h3V9.25A1.25 1.25 0 0012.75 8z' />
    <circle cx='8' cy='4' r='2'></circle>
    <circle cx='12.5' cy='5.5' r='1.5'></circle>
    <path d='M3.75 8h-.5A1.25 1.25 0 002 9.25V14h3V9.25A1.25 1.25 0 003.75 8z'></path>
    <circle cx='3.5' cy='5.5' r='1.5'></circle>
  </svg>
)
const NewsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M13 4v8H3V4h10m2-2H1v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2zm-3 3H4v2h8V5zM7 8H4v3h3V8zm5 0H8v1h4V8zm0 2H8v1h4v-1z'></path>
  </svg>
)
const EventsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='16'
    fill='currentColor'
    viewBox='0 0 16 16'
  >
    <path d='M2 2v9a3 3 0 003 3h6a3 3 0 003-3V2zm8.5 1.5a1 1 0 11-1 1 1 1 0 011-1zm-5 0a1 1 0 11-1 1 1 1 0 011-1zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V7h8z'></path>
  </svg>
)
const LinkedInLogoSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='40'
    height='40'
    fill='currentColor'
  >
    <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
  </svg>
)
const HomeSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z' />
  </svg>
)
const NetworkSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z' />
  </svg>
)
const JobsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z' />
  </svg>
)
const MessageSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z' />
  </svg>
)
const NotificationsSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z' />
  </svg>
)
const BusinessSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z' />
  </svg>
)
const UserSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
  >
    <path d='M8 10.5A1.5 1.5 0 119.5 12 1.5 1.5 0 018 10.5zm6.5 1.5a1.5 1.5 0 10-1.5-1.5 1.5 1.5 0 001.5 1.5zm7.5 0A10 10 0 1112 2a10 10 0 0110 10zm-2 0a8 8 0 10-8 8 8 8 0 008-8zm-8 4a6 6 0 01-4.24-1.76l-.71.76a7 7 0 009.89 0l-.71-.71A6 6 0 0112 16z'></path>
  </svg>
)
const InfoSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'>
      <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
   </svg>
)
const DownArrowSvg = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='24'
        height='24'
        fill='currentColor'>
        <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
    </svg>
)
const TangoSvg = () => (   
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_29135_360925)">
<g clip-path="url(#clip1_29135_360925)">
<path d="M1 1H16V16H1V1Z" fill="#7FADED"/>
<path d="M16 1H31V16H16V1Z" fill="#F5F5F5"/>
<path d="M1 16H16V31H1V16Z" fill="#F5F5F5"/>
<path d="M16 16H31V31H16V16Z" fill="#FFBA33"/>
</g>
<path d="M27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223C0.830955 1.63351 0.658359 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.658359 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.658359 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5Z" stroke="black" stroke-opacity="0.9"/>
</g>
<defs>
<clipPath id="clip0_29135_360925">
<path d="M0 4C0 2.11438 0 1.17157 0.585786 0.585786C1.17157 0 2.11438 0 4 0H28C29.8856 0 30.8284 0 31.4142 0.585786C32 1.17157 32 2.11438 32 4V28C32 29.8856 32 30.8284 31.4142 31.4142C30.8284 32 29.8856 32 28 32H4C2.11438 32 1.17157 32 0.585786 31.4142C0 30.8284 0 29.8856 0 28V4Z" fill="white"/>
</clipPath>
<clipPath id="clip1_29135_360925">
<path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="white"/>
</clipPath>
</defs>
</svg>

)
const QueenSvg = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_12111_176736)">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="black" fill-opacity="0.9"/>
  <rect width="9.66667" height="9.66667" transform="translate(1 1)" fill="#C9B5E8"/>
  <rect width="9.66667" height="9.66667" transform="translate(11.168 1)" fill="#C9B5E8"/>
  <rect width="9.66667" height="9.66667" transform="translate(21.332 1)" fill="#FFD4A8"/>
  <rect width="9.66667" height="9.66667" transform="translate(1 11.1665)" fill="#ABCBFF"/>
  <rect width="9.66667" height="9.66667" transform="translate(11.168 11.1665)" fill="#C2E6B3"/>
  <rect width="9.66667" height="9.66667" transform="translate(21.332 11.1665)" fill="#FFD4A8"/>
  <rect width="9.66667" height="9.66667" transform="translate(1 21.3335)" fill="#ABCBFF"/>
  <rect width="9.66667" height="9.66667" transform="translate(11.168 21.3335)" fill="#E5E5E5"/>
  <rect width="9.66667" height="9.66667" transform="translate(21.332 21.3335)" fill="#E5E5E5"/>
  </g>
  <path d="M1.23223 1.23223C0.830955 1.63351 0.65836 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.65836 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.65836 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223Z" stroke="black" stroke-opacity="0.9" stroke-linejoin="round"/>
  <defs>
  <clipPath id="clip0_12111_176736">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="white"/>
  </clipPath>
  </defs>
  </svg>
)
const CrossSvg = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_12111_176787)">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="#76C3CF"/>
  <mask id="path-3-inside-1_12111_176787" fill="white">
  <path d="M7.5 6.5C7.5 6.22386 7.72386 6 8 6C8.27614 6 8.5 6.22386 8.5 6.5V25.5C8.5 25.7761 8.27614 26 8 26C7.72386 26 7.5 25.7761 7.5 25.5V6.5Z"/>
  </mask>
  <path d="M7.5 6.5C7.5 6.22386 7.72386 6 8 6C8.27614 6 8.5 6.22386 8.5 6.5V25.5C8.5 25.7761 8.27614 26 8 26C7.72386 26 7.5 25.7761 7.5 25.5V6.5Z" fill="url(#paint0_linear_12111_176787)"/>
  <path d="M7.5 6H8.5H7.5ZM8.5 26C8.5 26.2761 8.27614 26.5 8 26.5C7.72386 26.5 7.5 26.2761 7.5 26V25.5C7.5 25.5 7.72386 25.5 8 25.5C8.27614 25.5 8.5 25.5 8.5 25.5V26ZM7.5 26V6V26ZM8.5 6V26V6Z" fill="black" fill-opacity="0.08" mask="url(#path-3-inside-1_12111_176787)"/>
  <mask id="path-5-inside-2_12111_176787" fill="white">
  <path d="M13 6C13 5.5286 13 5.29289 13.1464 5.14645C13.2929 5 13.5286 5 14 5H31V11H14C13.5286 11 13.2929 11 13.1464 10.8536C13 10.7071 13 10.4714 13 10V6Z"/>
  </mask>
  <path d="M13 6C13 5.5286 13 5.29289 13.1464 5.14645C13.2929 5 13.5286 5 14 5H31V11H14C13.5286 11 13.2929 11 13.1464 10.8536C13 10.7071 13 10.4714 13 10V6Z" fill="url(#paint1_linear_12111_176787)"/>
  <path d="M13 5H31H13ZM31 11.5H14C13.4477 11.5 13 11.0523 13 10.5C13 10.5 13.2239 10.5 13.5 10.5H31V11.5ZM13 11V5V11ZM31 5V11V5Z" fill="black" fill-opacity="0.08" mask="url(#path-5-inside-2_12111_176787)"/>
  <mask id="path-7-inside-3_12111_176787" fill="white">
  <path d="M4 14C4 13.5286 4 13.2929 4.14645 13.1464C4.29289 13 4.5286 13 5 13H39C39.4714 13 39.7071 13 39.8536 13.1464C40 13.2929 40 13.5286 40 14V18C40 18.4714 40 18.7071 39.8536 18.8536C39.7071 19 39.4714 19 39 19H5C4.5286 19 4.29289 19 4.14645 18.8536C4 18.7071 4 18.4714 4 18V14Z"/>
  </mask>
  <path d="M4 14C4 13.5286 4 13.2929 4.14645 13.1464C4.29289 13 4.5286 13 5 13H39C39.4714 13 39.7071 13 39.8536 13.1464C40 13.2929 40 13.5286 40 14V18C40 18.4714 40 18.7071 39.8536 18.8536C39.7071 19 39.4714 19 39 19H5C4.5286 19 4.29289 19 4.14645 18.8536C4 18.7071 4 18.4714 4 18V14Z" fill="url(#paint2_linear_12111_176787)"/>
  <path d="M4 13H40H4ZM40 18.5C40 19.0523 39.5523 19.5 39 19.5H5C4.44772 19.5 4 19.0523 4 18.5C4 18.5 4.22386 18.5 4.5 18.5H39.5C39.7761 18.5 40 18.5 40 18.5ZM4 19V13V19ZM40 13V19V13Z" fill="black" fill-opacity="0.08" mask="url(#path-7-inside-3_12111_176787)"/>
  <mask id="path-9-inside-4_12111_176787" fill="white">
  <path d="M13 22C13 21.5286 13 21.2929 13.1464 21.1464C13.2929 21 13.5286 21 14 21H31V27H14C13.5286 27 13.2929 27 13.1464 26.8536C13 26.7071 13 26.4714 13 26V22Z"/>
  </mask>
  <path d="M13 22C13 21.5286 13 21.2929 13.1464 21.1464C13.2929 21 13.5286 21 14 21H31V27H14C13.5286 27 13.2929 27 13.1464 26.8536C13 26.7071 13 26.4714 13 26V22Z" fill="url(#paint3_linear_12111_176787)"/>
  <path d="M13 21H31H13ZM31 27.5H14C13.4477 27.5 13 27.0523 13 26.5C13 26.5 13.2239 26.5 13.5 26.5H31V27.5ZM13 27V21V27ZM31 21V27V21Z" fill="black" fill-opacity="0.08" mask="url(#path-9-inside-4_12111_176787)"/>
  <path d="M5.66927 17C5.57483 17 5.49566 16.9681 5.43177 16.9042C5.36788 16.8403 5.33594 16.7611 5.33594 16.6667C5.33594 16.5722 5.36788 16.4931 5.43177 16.4292C5.49566 16.3653 5.57483 16.3333 5.66927 16.3333H10.3359C10.4304 16.3333 10.5095 16.3653 10.5734 16.4292C10.6373 16.4931 10.6693 16.5722 10.6693 16.6667C10.6693 16.7611 10.6373 16.8403 10.5734 16.9042C10.5095 16.9681 10.4304 17 10.3359 17H5.66927ZM5.66927 15.6667C5.57483 15.6667 5.49566 15.6347 5.43177 15.5708C5.36788 15.5069 5.33594 15.4278 5.33594 15.3333C5.33594 15.2389 5.36788 15.1597 5.43177 15.0958C5.49566 15.0319 5.57483 15 5.66927 15H10.3359C10.4304 15 10.5095 15.0319 10.5734 15.0958C10.6373 15.1597 10.6693 15.2389 10.6693 15.3333C10.6693 15.4278 10.6373 15.5069 10.5734 15.5708C10.5095 15.6347 10.4304 15.6667 10.3359 15.6667H5.66927Z" fill="#76C3CF"/>
  </g>
  <path d="M1.23223 1.23223C0.830955 1.63351 0.65836 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.65836 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.65836 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223Z" stroke="black" stroke-opacity="0.9" stroke-linejoin="round"/>
  <defs>
  <linearGradient id="paint0_linear_12111_176787" x1="8" y1="6" x2="8.00001" y2="26" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="#FAFAFA"/>
  </linearGradient>
  <linearGradient id="paint1_linear_12111_176787" x1="22" y1="5" x2="22" y2="11" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD8C2"/>
  <stop offset="1" stop-color="#FFDFCC"/>
  </linearGradient>
  <linearGradient id="paint2_linear_12111_176787" x1="22" y1="13" x2="22" y2="19" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="#FAFAFA"/>
  </linearGradient>
  <linearGradient id="paint3_linear_12111_176787" x1="22" y1="21" x2="22" y2="27" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD8C2"/>
  <stop offset="1" stop-color="#FFDFCC"/>
  </linearGradient>
  <clipPath id="clip0_12111_176787">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="white"/>
  </clipPath>
  </defs>
  </svg>
)
const PinPointSvg = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_12111_176713)">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="black" fill-opacity="0.9"/>
  <g clip-path="url(#clip1_12111_176713)">
  <rect width="30" height="30" transform="translate(1 1)" fill="#0466C8"/>
  <rect width="30" height="10" transform="translate(1 1)" fill="#A8CFFF"/>
  <rect width="30" height="10" transform="translate(1 11)" fill="#4997F5"/>
  <rect width="30" height="10" transform="translate(1 21)" fill="#2A7ADB"/>
  </g>
  </g>
  <path d="M1.23223 1.23223C0.830955 1.63351 0.65836 2.13876 0.577682 2.73883C0.499975 3.31681 0.499986 4.05169 0.5 4.96342L0.5 5V27L0.5 27.0366C0.499986 27.9483 0.499975 28.6832 0.577682 29.2612C0.65836 29.8612 0.830955 30.3665 1.23223 30.7678C1.63351 31.169 2.13876 31.3416 2.73883 31.4223C3.31681 31.5 4.05168 31.5 4.9634 31.5H5H27H27.0366C27.9483 31.5 28.6832 31.5 29.2612 31.4223C29.8612 31.3416 30.3665 31.169 30.7678 30.7678C31.169 30.3665 31.3416 29.8612 31.4223 29.2612C31.5 28.6832 31.5 27.9483 31.5 27.0366V27V5V4.9634C31.5 4.05168 31.5 3.31681 31.4223 2.73883C31.3416 2.13876 31.169 1.63351 30.7678 1.23223C30.3665 0.830955 29.8612 0.65836 29.2612 0.577682C28.6832 0.499975 27.9483 0.499986 27.0366 0.5L27 0.5H5L4.96342 0.5C4.05169 0.499986 3.31681 0.499975 2.73883 0.577682C2.13876 0.658359 1.63351 0.830955 1.23223 1.23223Z" stroke="black" stroke-opacity="0.9" stroke-linejoin="round"/>
  <defs>
  <clipPath id="clip0_12111_176713">
  <path d="M1 5C1 3.11438 1 2.17157 1.58579 1.58579C2.17157 1 3.11438 1 5 1H27C28.8856 1 29.8284 1 30.4142 1.58579C31 2.17157 31 3.11438 31 5V27C31 28.8856 31 29.8284 30.4142 30.4142C29.8284 31 28.8856 31 27 31H5C3.11438 31 2.17157 31 1.58579 30.4142C1 29.8284 1 28.8856 1 27V5Z" fill="white"/>
  </clipPath>
  <clipPath id="clip1_12111_176713">
  <rect width="30" height="30" fill="white" transform="translate(1 1)"/>
  </clipPath>
  </defs>
  </svg>
)
const RightArrowSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'>
  <path d="M5 15l4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
  </svg>
)
const MediaSvg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='#378fe9'
  >
    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
  </svg>
)
const EventSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='#c37d16'>
    <path d="M3 3v15c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V3H3zm13 1.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM19 18c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V9h14v9zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2zm4-4h2v2h-2v-2zm0 4h2v2h-2v-2z"></path>
  </svg>
)
const ArticleSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='#e06847'>
<path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
</svg>
)
const RoomsSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24' fill='green'>
{/* TODO */}
</svg>
)
const RoomsIcon = props => <Icon component={RoomsSvg} {...props} />
const ArticleIcon = props => <Icon component={ArticleSvg} {...props} />
const EventIcon = props => <Icon component={EventSvg} {...props} />
const MediaIcon = props => <Icon component={MediaSvg} {...props} />
const RightArrowIcon = props => <Icon component={RightArrowSvg} {...props} />
const PinPointIcon = props => <Icon component={PinPointSvg} {...props} />
const QueenIcon = props => <Icon component={QueenSvg} {...props} />
const CrossIcon = props => <Icon component={CrossSvg} {...props} />
const TangoIcon = props => <Icon component={TangoSvg} {...props} />
const BookmarkIcon = props => <Icon component={BookmarkSvg} {...props} />
const GroupIcon = props => <Icon component={GroupsSvg} {...props} />
const NewsIcon = props => <Icon component={NewsSvg} {...props} />
const EventsIcon = props => <Icon component={EventsSvg} {...props} />
const HomeIcon = props => <Icon component={HomeSvg} {...props} />
const NetworkIcon = props => <Icon component={NetworkSvg} {...props} />
const JobsIcon = props => <Icon component={JobsSvg} {...props} />
const MessageIcon = props => <Icon component={MessageSvg} {...props} />
const NotificationsIcon = props => <Icon component={NotificationsSvg} {...props} />
const LinkedInLogoIcon = props => <Icon component={LinkedInLogoSvg} {...props} />
const BusinessIcon = props => <Icon component={BusinessSvg} {...props} />
const UserIcon = props => <Icon component={UserSvg} {...props} />
const InfoIcon = props => <Icon component={InfoSvg} {...props} />
const DownArrowIcon = props => <Icon component={DownArrowSvg} {...props} />

const headerStyle = {
  color: '#fff',
  height: 50,
  paddingInline: 48,
  lineHeight: '50px',
  backgroundColor: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
}
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  maxWidth: '555px',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9'
}
const siderStyle = {
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#f4f2ee'
}
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff'
}
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100%)',
  maxWidth: 'calc(100%)',
  backgroundColor: '#f4f2ee'
}
const layoutCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '25px',
  backgroundColor: '#f4f2ee'
}
const divCenterStyle = {
  margin: '1% 15%'
}
const navItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 8px'
}

const iconStyle = {
  fontSize: 24,
  color: '#666',
  transition: 'color 0.3s'
}

const homeStyle = {
  fontSize: 24,
  color: 'black',
  transition: 'color 0.3s'
}

const labelStyle = {
  fontSize: 12,
  lineHeight: '1.3',
  marginTop: 0
}

const activeLabelStyle = {
  fontSize: 12,
  lineHeight: '1.3',
  marginTop: 0,
  borderBottom: '2px solid black'
}

const LinkedInCard = ({
  name = 'First Last',
  role = 'I go to _ university',
  location = 'Location',
  university = 'University Name',
  college = 'College Name',
  avatarUrl = 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
  universityLogoUrl = 'https://www.cornell.edu/favicon.ico',
  coverImageUrl = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
}) => {
  return (
    <Card
      style={{
        width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
      }}
      bodyStyle={{ padding: '12px 16px' }}
      cover={
        <div
          style={{
            position: 'relative',
            height: 80,
            backgroundImage: `url(${coverImageUrl})`,
            backgroundSize: 'cover'
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: -36,
              left: 5,
              zIndex: 1,
              border: '1px solid white',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0'
            }}
          >
            <Avatar
              size={72}
              src={avatarUrl}
              style={{ backgroundColor: '#e7e2dc',border: 'dashed',borderColor: '#9eb5ca', borderWidth: '2px', borderBottom: '0px' }}
            />
            <Button
              type='primary'
              shape='circle'
              size='small'
              icon={<PlusOutlined />}
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#0a66c2',
                border: '2px solid white'
              }}
            />
          </div>
        </div>
      }
    >
      <div style={{ marginTop: 20 }}>
        <Meta
          title={
            <Typography.Title
              level={5}
              style={{ marginBottom: 0, fontSize: 18 }}
            >
              {name}
            </Typography.Title>
          }
          description={
            <Space direction='vertical' size={1} style={{ width: '100%' }}>
              <Text style={{ color: '#000', fontSize: 11, fontWeight: 600 }}>
                {role}
              </Text>
              <Text style={{ color: '#666', fontSize: 11 }}>{location}</Text>

              <Space style={{ lineHeight: '1.2' }}>
                <Avatar
                  size={18}
                  src={universityLogoUrl}
                  style={{ backgroundColor: 'white' }}
                />
                <Text style={{ fontSize: 10, fontWeight: 600 }}>
                  {university} - {college}
                </Text>
              </Space>
            </Space>
          }
        />
      </div>
    </Card>
  )
}

const LinkedInNewsCard = () => {
return (
    <Card
        style={{
            width: 'auto',
            borderRadius: 8,
            overflow: 'hidden',
            boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
            fontSize: 13,
        }}
        bodyStyle={{
            paddingLeft: '15px',
            paddingTop: '8px ',
            paddingRight: 0,
            marginRight: -3
        }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontWeight: 600 }}>LinkedIn News</h2>
            {/* eslint-disable-next-line */}
            <a style={{color: "black"}} href='#'><InfoIcon/></a>
        </div>
        <h3 style={{ color: '#666666', fontWeight: 600 }}>Top Stories</h3>
        <Menu
            selectable={false}
            mode='vertical'
            style={{
                border: 'none',
                backgroundColor: 'white',
                marginLeft: -20,
                marginTop: 10,
                itemHeight: 'calc(auto + 2px)',
                mode: "inline",
            }}
            items={[
                {
                    key: '1',
                    label: 
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1}}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                                Amazon beefing up its Temu
                            </h3>
                            <p style={{color: '#655555'}}>
                                3h ago • 4,566 readers
                            </p>
                        </div>
                },
                {
                    key: '2',
                    label: <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                            Firefly spacecraft to land on moon
                            </h3>
                            <p style={{color: '#655555'}}>
                                5h ago • 448 readers
                            </p>
                            </div>
                },
                {
                    key: '3',
                    label: <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                                Inflation slowed in January
                            </h3>
                            <p style={{color: '#655555'}}>
                                4h ago • 89,794 readers
                            </p>
                            </div>
                },
                {
                    key: '4',
                    label: <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                            Outage takes down Microsoft Outlook
                            </h3>
                            <p style={{color: '#655555'}}>
                                1h ago • 1,756 readers
                            </p>
                            </div>
                },
                {
                    key: '5',
                    label: <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                            Meta cracks down on leakers
                            </h3>
                            <p style={{color: '#655555'}}>
                                5h ago • 34,273 readers
                            </p>
                            </div>
                },
                {
                    key: '6',
                    label: <div style={{ display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1 }}>
                            <h3 style={{ width: '500px', fontSize: 14, fontWeight: 600 }}>
                            Microsoft to shut down Skype
                            </h3>
                            <p style={{color: '#655555'}}>
                            2h ago • 237,097 readers
                            </p>
                            </div>
                },
            ]}
        />
        <Button style={{marginLeft: -10, marginTop: -5, fontWeight: 600, padding: '10px 10px', height: '20px'}} type="text">Show more<span style={{marginTop: 6, marginLeft: -3}}><DownArrowIcon/></span></Button>
        <h3 style={{ color: '#666666', fontWeight: 600, margin: '10px auto', fontSize: 16 }}>Today's puzzles</h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <Button style={{marginLeft: -17, marginTop: -10, fontWeight: 600, paddingLeft: "18px", height: '52px'}} type="text">
        <TangoIcon/> <div style={{ marginLeft: -10, display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1, textAlign: 'left' }}>
                            <h3 style={{fontSize: 14, fontWeight: 600 }}>
                            Tango
                            </h3>
                            <p style={{color: '#655555', fontSize: 12, fontWeight: 400}}>
                            Harmonize the grid
                            </p>
                            </div>
                            <span style={{marginTop: 6, marginLeft: 100}}><RightArrowIcon/></span>
        </Button>
        <Button style={{marginLeft: -17, marginTop: -10, fontWeight: 600, paddingLeft: "18px", height: '52px'}} type="text">
        <QueenIcon/> <div style={{ marginLeft: -8, display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1, textAlign: 'left' }}>
                            <h3 style={{fontSize: 14, fontWeight: 600 }}>
                            Queens
                            </h3>
                            <p style={{color: '#655555', fontSize: 12, fontWeight: 400}}>
                            Crown each region
                            </p>
                            </div>
                            <span style={{marginTop: 6, marginLeft: 100}}><RightArrowIcon/></span>
        </Button>
        <Button style={{marginLeft: -17, marginTop: -10, fontWeight: 600, paddingLeft: "18px", height: '52px'}} type="text">
        <PinPointIcon/> <div style={{ marginLeft: -10, display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1, textAlign: 'left' }}>
                            <h3 style={{fontSize: 14, fontWeight: 600 }}>
                            Pinpoint
                            </h3>
                            <p style={{color: '#655555', fontSize: 12, fontWeight: 400}}>
                            Guess the category
                            </p>
                            </div>
                            <span style={{marginTop: 6, marginLeft: 100}}><RightArrowIcon/></span>
        </Button>
        <Button style={{marginLeft: -17, marginTop: -10, fontWeight: 600, paddingLeft: "18px", height: '52px'}} type="text">
        <CrossIcon/> <div style={{ marginLeft: -20, display: 'flex', flexDirection: 'column', gap: 3, lineHeight: 1, textAlign: 'left' }}>
                            <h3 style={{fontSize: 14, fontWeight: 600, marginLeft: 10, }}>
                            Crossclimb
                            </h3>
                            <p style={{color: '#655555', fontSize: 12, fontWeight: 400,marginLeft: 10,}}>
                            Unlcok a trivia ladder
                            </p>
                            </div>
                            <span style={{marginTop: 6, marginLeft: 90}}><RightArrowIcon/></span>
        </Button>
        </div>
    </Card>
)};
const LinkedInNavbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 100,
        width: '100%',
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 15px'
      }}
    >
      {/* Left Section */}
      <Space size='medium'>
        <Typography.Link
          href='#'
          style={{ display: 'flex', alignItems: 'center', marginLeft: -35 }}
        >
          <LinkedInLogoIcon style={{ fontSize: 38, color: '#0a66c2' }} />
          <Input
          placeholder='Search'
          prefix={<SearchOutlined style={{ color: '#666' }} />}
          style={{
            width: 300,
            borderRadius: 4,
            backgroundColor: '#edf3f8',
            border: 'none',
            height: 34,
            fontSize: 14,
            marginBottom: '0',
            marginLeft: 5
          }}
        />
        </Typography.Link>
      </Space>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={navItemStyle} onClick={() => {}}>
          <HomeIcon style={homeStyle} />
          <Text type='secondary' style={activeLabelStyle}>
            Home
          </Text>
        </div>
        <div style={navItemStyle} onClick={() => {}}>
          <NetworkIcon style={iconStyle} />
          <Text type='secondary' style={labelStyle}>
            My Network
          </Text>
        </div>
        <div style={navItemStyle} onClick={() => {}}>
          <JobsIcon style={iconStyle} />
          <Text type='secondary' style={labelStyle}>
            Jobs
          </Text>
        </div>
        <div style={navItemStyle} onClick={() => {}}>
          <MessageIcon style={iconStyle} />
          <Text type='secondary' style={labelStyle}>
            Messaging
          </Text>
        </div>
        <div style={navItemStyle} onClick={() => {}}>
          <NotificationsIcon style={iconStyle} />
          <Text type='secondary' style={labelStyle}>
            Notifications
          </Text>
        </div>
        <div style={navItemStyle} onClick={() => {}}>
          <UserIcon style={iconStyle} />
          <Text style={{ fontSize: 12 }}>
            Me <CaretDownOutlined style={{ fontSize: 10 }} />
          </Text>
        </div>
        <div style={{ borderLeft: '1px solid #ddd', height: 50 }} />
        <div style={navItemStyle} onClick={() => {}}>
          <BusinessIcon style={iconStyle} />
          <Text style={{ fontSize: 12 }}>
            For Business <CaretDownOutlined style={{ fontSize: 10 }} />
          </Text>
        </div>
      </div>
    </div>
  )
}

const LinkedInContent = () => {
  return (
    <Card
    className={'linkedin-content'}
    style={{width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        fontWeight: 600,
        }}
    actions={[
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040'}}> <MediaIcon/> <p style={{paddingTop:2}}>Media</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040'}}> <EventIcon/> <p style={{paddingTop:2}}>Event</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040'}}> <ArticleIcon/> <p style={{paddingTop:2}}>Write Article</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040'}}> <RoomsIcon/> <p style={{paddingTop:2}}>Open Room</p> </div>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" size={50} style={{ backgroundColor: '#e7e2dc', padding: 0 }}/>}
      description=<Button type="text" style={{border: 'solid 1px grey', borderRadius:'25px', fontWeight: 600, color: '#404040', width: '95%', height: 46, margin:'15px 0px 0px 0px', justifyContent: 'left'}}>Start a post</Button>
    />
  </Card>  
)}

const LinkedInPage = () => (
  <Layout style={layoutStyle}>
    <Header style={headerStyle}>
      <LinkedInNavbar />
    </Header>

    <div style={divCenterStyle}>
      <Layout style={layoutCenterStyle}>
        <Sider width='225px' style={siderStyle}>
          <Flex vertical gap='small'>
            <LinkedInCard
              role='Student at Cornell University'
              university='Cornell University'
              universityLogoUrl='https://www.cornell.edu/favicon.ico'
            />

            <Card
              size='small'
              style={{
                width: 'auto',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
                fontSize: 12,
                lineHeight: 2,
                fontWeight: 550
              }}
            >
              {/* eslint-disable-next-line */}
              <a
                href={null}
                className='dummy-side'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%', 
                }}
              >
                Profile viewers
                <span style={{ color: '#0a66c2' }}>7</span>
              </a>

              <p>
                {/* eslint-disable-next-line */}
                <a href={null} className='dummy-side'>
                  View all analytics
                </a>
              </p>
            </Card>

            <Card
              style={{
                width: 'auto',
                borderRadius: 8,
                overflow: 'hidden',
                boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
              }}
              bodyStyle={{
                padding: 0
              }}
            >
              <Menu
                selectable = {false}
                mode='vertical'
                style={{
                  itemHeight: '10px',
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: 12,
                  fontWeight: 550,
                }}
                items={[
                  {
                    key: '1',
                    icon: <BookmarkIcon />,
                    label: 'Saved items'
                  },
                  {
                    key: '2',
                    icon: <GroupIcon />,
                    label: 'Groups'
                  },
                  {
                    key: '3',
                    icon: <NewsIcon />,
                    label: 'Newsletters'
                  },
                  {
                    key: '4',
                    icon: <EventsIcon />,
                    label: 'Events'
                  }
                ]}
              />
            </Card>
          </Flex>
        </Sider>
        <Content width='523px' style={contentStyle}>
          <LinkedInContent />
        </Content>
        <Sider width='300px' style={siderStyle}>
          <LinkedInNewsCard />
        </Sider>
      </Layout>
    </div>
    <Footer style={footerStyle}>Footer</Footer>
  </Layout>
)

export default LinkedInPage
