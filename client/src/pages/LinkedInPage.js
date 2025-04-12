import React, { useState } from 'react';
import amex from '../imgs/1743443363075.jpg';
import anthr from '../imgs/1741280993493.jpg';
import corn from '../imgs/1741881633007.jpg';
import bow from '../imgs/1740498249061.jpg';
import goog from '../imgs/1741888140264.jpg';
import oai from '../imgs/1735665592947.jpg';
import { useNavigate, Link } from 'react-router-dom';
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
  Affix,
  Tabs,
  Badge,
  Dropdown,
  List,
  Empty, 
  Spin, 
  Tag,
} from 'antd';
import Icon, {
  PlusOutlined,
  SearchOutlined,
  CaretDownOutlined,
  MoreOutlined, 
  EditOutlined, 
  CaretUpOutlined, 
  UserOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons';
import { useCallContext, setModalTopPosition } from '../components/CallContext';


const { Header, Sider, Content } = Layout
const { Meta } = Card
const { Title, Text } = Typography;
const { TabPane } = Tabs;

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
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14' width='24' height='24' fill='green'>
<path fill-rule="evenodd" d="M2.218 0C1.545 0 1 .545 1 1.218v4.57c0 .674.545 1.22 1.218 1.22h9.564c.673 0 1.218-.546 1.218-1.22v-4.57C13 .545 12.455 0 11.782 0zm2.703 9.441a1.441 1.441 0 1 1-2.883 0a1.441 1.441 0 0 1 2.883 0m5.604 1.442a1.441 1.441 0 1 0 0-2.883a1.441 1.441 0 0 0 0 2.883m-7.046.778a2.336 2.336 0 0 0-2.303 1.947c-.035.212.143.388.358.388h3.891c.215 0 .393-.176.358-.388a2.336 2.336 0 0 0-2.304-1.947m4.743 1.947a2.336 2.336 0 0 1 4.607 0c.035.212-.143.388-.358.388H8.58c-.214 0-.392-.176-.357-.388ZM8.123 2.121a1.123 1.123 0 1 1-2.246 0a1.123 1.123 0 0 1 2.246 0M5.025 5.657a2.003 2.003 0 0 1 3.95 0c.03.182-.122.332-.306.332H5.33c-.184 0-.336-.15-.306-.332Z" clip-rule="evenodd"/>
</svg>
)
const SmallRoomsSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='current'>
  <path fill-rule="evenodd" d="M2.218 0C1.545 0 1 .545 1 1.218v4.57c0 .674.545 1.22 1.218 1.22h9.564c.673 0 1.218-.546 1.218-1.22v-4.57C13 .545 12.455 0 11.782 0zm2.703 9.441a1.441 1.441 0 1 1-2.883 0a1.441 1.441 0 0 1 2.883 0m5.604 1.442a1.441 1.441 0 1 0 0-2.883a1.441 1.441 0 0 0 0 2.883m-7.046.778a2.336 2.336 0 0 0-2.303 1.947c-.035.212.143.388.358.388h3.891c.215 0 .393-.176.358-.388a2.336 2.336 0 0 0-2.304-1.947m4.743 1.947a2.336 2.336 0 0 1 4.607 0c.035.212-.143.388-.358.388H8.58c-.214 0-.392-.176-.357-.388ZM8.123 2.121a1.123 1.123 0 1 1-2.246 0a1.123 1.123 0 0 1 2.246 0M5.025 5.657a2.003 2.003 0 0 1 3.95 0c.03.182-.122.332-.306.332H5.33c-.184 0-.336-.15-.306-.332Z" clip-rule="evenodd"/>
  </svg>
)
const LikeSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='black'>
  <path d="M12.91 7l-2.25-2.57a8.21 8.21 0 01-1.5-2.55L9 1.37A2.08 2.08 0 007 0a2.08 2.08 0 00-2.06 2.08v1.17a5.81 5.81 0 00.31 1.89l.28.86H2.38A1.47 1.47 0 001 7.47a1.45 1.45 0 00.64 1.21 1.48 1.48 0 00-.37 2.06 1.54 1.54 0 00.62.51h.05a1.6 1.6 0 00-.19.71A1.47 1.47 0 003 13.42v.1A1.46 1.46 0 004.4 15h4.83a5.61 5.61 0 002.48-.58l1-.42H14V7zM12 12.11l-1.19.52a3.59 3.59 0 01-1.58.37H5.1a.55.55 0 01-.53-.4l-.14-.48-.49-.21a.56.56 0 01-.34-.6l.09-.56-.42-.42a.56.56 0 01-.09-.68L3.55 9l-.4-.61A.28.28 0 013.3 8h5L7.14 4.51a4.15 4.15 0 01-.2-1.26V2.08A.09.09 0 017 2a.11.11 0 01.08 0l.18.51a10 10 0 001.9 3.24l2.84 3z"></path>
</svg>
)
const CommentSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='black'>
<path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
</svg>
)
const RepostSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='black'>
  <path d="M4 10H2V5c0-1.66 1.34-3 3-3h3.85L7.42 0h2.44L12 3 9.86 6H7.42l1.43-2H5c-.55 0-1 .45-1 1v5zm8-4v5c0 .55-.45 1-1 1H7.15l1.43-2H6.14L4 13l2.14 3h2.44l-1.43-2H11c1.66 0 3-1.34 3-3V6h-2z"></path>
</svg>
)
const SendSvg = () => (
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16' fill='black'>
  <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
</svg>
)
const LikeIcon = props => <Icon component={LikeSvg} {...props} />
const CommentIcon = props => <Icon component={CommentSvg} {...props} />
const RepostIcon = props => <Icon component={RepostSvg} {...props} />
const SendIcon = props => <Icon component={SendSvg} {...props} />
const RoomsIcon = props => <Icon component={RoomsSvg} {...props} />
const SmallRoomsIcon = props => <Icon component={SmallRoomsSvg} {...props} />
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
  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
  width: '100%',
  position: 'fixed',
  zIndex: 2
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  maxWidth: '555px',
  minWidth: '555px',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#f4f2ee'
};
const siderStyle = {
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#f4f2ee'
};
const footerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 0,
  marginLeft: 25,
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px',
  color: '#62615f',
  maxWidth: '500px',
  lineHeight: '2.2',
  width: 'calc(100% - 50px)'
};
const footerItemStyle = {
    padding: '0 8px',
    margin: '0px 0',
    position: 'relative',
    cursor: 'pointer',
};
const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(100%)',
  maxWidth: 'calc(100%)',
  backgroundColor: '#f4f2ee'
};
const layoutCenterStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '25px',
  backgroundColor: '#f4f2ee'
};
const divCenterStyle = {
  margin: 'calc(1% + 50px) 15%'
};
const navItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 8px'
};
const iconStyle = {
  fontSize: 24,
  color: '#666',
  transition: 'color 0.3s'
};
const homeStyle = {
  fontSize: 24,
  color: 'black',
  transition: 'color 0.3s'
};
const labelStyle = {
  fontSize: 12,
  lineHeight: '1.3',
  marginTop: 0
};
const activeLabelStyle = {
  fontSize: 12,
  lineHeight: '1.3',
  marginTop: 0,
  borderBottom: '2px solid black'
};
const LinkedInCard = ({
  name = 'John Smith',
  role = 'I go to _ university',
  location = 'Ithaca, New York',
  university = 'University Name',
  college = 'College of Computing',
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
              style={{ marginBottom: -5, fontSize: 18,paddingTop: 10 }}
            >
              {name}
            </Typography.Title>
          }
          description={
            <Space direction='vertical' size={1} style={{ width: '100%'}}>
              <Text style={{ color: '#000', fontSize: 14, fontWeight: 500, }}>
                {role}
              </Text>
              <Text style={{ color: '#666', fontSize: 11 }}>{location}</Text>

              <Space style={{ lineHeight: '1.2' }}>
                <Avatar
                  size={18}
                  src={universityLogoUrl}
                  style={{ backgroundColor: 'white' }}
                />
                <Text style={{ fontSize: 11, fontWeight: 600 }}>
                  {university} - {college}
                </Text>
              </Space>
            </Space>
          }
        />
      </div>
    </Card>
  )
};
const messageData = [
  {
    id: 1,
    avatar: "https://media.licdn.com/dms/image/v2/C560BAQE8SOXGRyv7LA/company-logo_100_100/company-logo_100_100/0/1631339899678?e=1749081600&v=beta&t=wRS0z-PL_Mm4v1bQm9dAxFc7f5ZPIRJ1HTXEXKSc8pM",
    name: 'Cornell...',
    date: 'Mar 6',
    message: 'Hi John, Are you looking to develop...',
    sponsored: true,
    unread: true
  },
  {
    id: 2,
    avatar: 'https://media.licdn.com/dms/image/v2/C560BAQHaVYd13rRz3A/company-logo_200_200/company-logo_200_200/0/1638831590218/linkedin_logo?e=1749686400&v=beta&t=25LnevZ6lI_onaAz6Gh6YEviMfOQNKJCYKrME5I7zko',
    name: 'LinkedIn',
    date: 'Feb 28',
    message: 'LinkedIn Offer. Hi there, John! We\'ve recently seen an increase i...',
    sponsored: true,
    unread: false
  },
  {
    id: 3,
    avatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=4",
    name: 'James Joe',
    date: 'Dec 24, 2024',
    message: 'James Joe sent a post',
    sponsored: false,
    unread: false
  }
];
const PublicRooms = () => {
  return (
    <Card
    className={'linkedin-content'}
    style={{width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        fontWeight: 600,
        }}
    >
      <p style={{fontSize: 20, marginLeft: -25}}>Public Rooms</p>
      <div style={{display: 'flex', gap:40, marginTop: 10}}>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1`} size={50} className='pub-rooms'/></Link>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} size={50} className='pub-rooms'/></Link>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} size={50} className='pub-rooms'/></Link>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} size={50} className='pub-rooms'/></Link>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} size={50} className='pub-rooms'/></Link>
        <Link to= {`/room/${Math.floor(Math.random() * 100000)}`}><Avatar src= {`https://api.dicebear.com/7.x/miniavs/svg?seed=1${Math.floor(Math.random() * 10)}${Math.floor(Math.random() * 10)}`} size={50} className='pub-rooms'/></Link>
      </div>
    </Card>
)}
const LinkedInMessaging = () => {
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle collapsible state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // More options menu
  const moreMenu = (
    <Menu>
      <Menu.Item key="1">Mark all as read</Menu.Item>
      <Menu.Item key="2">Manage conversations</Menu.Item>
      <Menu.Item key="3">Message settings</Menu.Item>
    </Menu>
  );

  // Custom avatar component
  const CustomAvatar = ({ src, name }) => {
    if (src) {
      return <Avatar src={src} size={40} />;
    }
    return (
      <Avatar size={40} style={{ backgroundColor: '#ccc' }}>
        {name ? name.charAt(0) : '?'}
      </Avatar>
    );
  };
    const { calls, loading, loadError, loadCalls, joinCall } = useCallContext();
  return (
    <Card 
      bodyStyle={{ padding: '0px' }}
      className='messaging'
      style={{ borderRadius: '8px', maxWidth: '360px', zIndex: 10,
        height: collapsed ? 'inherit' : '90%', position: 'fixed', right: 5, bottom: 0
       }}
    >
      {/* Header section */}
      <div style={{
        display: 'flex',
        padding: '12px 16px',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: collapsed ? 'none' : '1px solid #f0f0f0',
      }}>
        <Space align="center">
        <Avatar
              size={40}
              src={'https://api.dicebear.com/7.x/miniavs/svg?seed=1'}
            />
          <Title level={5} style={{ margin: 0 }}>Messaging</Title>
        </Space>
        
        <Space>
          <Dropdown overlay={moreMenu} trigger={['click']}>
            <Button 
              type="text" 
              icon={<MoreOutlined />} 
              style={{ border: 'none' }}
            />
          </Dropdown>
          <Button 
            type="text" 
            icon={<EditOutlined />} 
            style={{ border: 'none' }}
          />
          <Button
            type="text"
            icon={collapsed ? <CaretUpOutlined /> : <CaretDownOutlined />}
            onClick={toggleCollapse}
            style={{ border: 'none' }}
          />
        </Space>
      </div>

      {/* Collapsible content */}
      <div style={{
        height: collapsed ? '0' : '90%',
        overflow: 'hidden',
      }}>
          {/* Search bar */}
          <div style={{ padding: '12px 16px' }}>
            <Input
              placeholder="Search messages"
              prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
              style={{ borderRadius: '4px' }}
              suffix={
                <Button 
                  type="text" 
                  style={{ border: 'none', padding: '0' }}
                  icon={<span style={{ fontSize: '16px' }}>≡</span>} 
                />
              }
            />
          </div>

          {/* Tabs */}
          <Tabs defaultActiveKey="1" centered>
            <TabPane 
              tab={<div style={{ paddingBottom: '0px' }}>Focused</div>} 
              key="1"
            >
              <List
                itemLayout="horizontal"
                dataSource={messageData}
                renderItem={item => (
                  <List.Item 
                    style={{ 
                      padding: '12px 16px', 
                      cursor: 'pointer',
                      backgroundColor: item.unread ? '#f3f9ff' : 'transparent',
                      borderLeft: item.unread ? '4px solid #0a66c2' : 'none',
                      paddingLeft: item.unread ? '12px' : '16px'
                    }}
                    onClick={() => console.log(`Clicked on message from ${item.name}`)}
                  >
                    <List.Item.Meta
                      avatar={<CustomAvatar src={item.avatar} name={item.name} />}
                      title={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Space>
                            <Text strong>{item.name}</Text>
                            {item.sponsored && (
                              <Text type="secondary" style={{ fontSize: '12px' }}>Sponsored</Text>
                            )}
                            {item.via && (
                              <Text type="secondary" style={{ fontSize: '12px' }}>via {item.via}</Text>
                            )}
                          </Space>
                          <Text type="secondary" style={{ fontSize: '12px' }}>{item.date}</Text>
                        </div>
                      }
                      description={
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text 
                            style={{ 
                              color: item.unread ? 'rgba(0, 0, 0, 0.85)' : 'rgba(0, 0, 0, 0.45)',
                              fontWeight: item.unread ? '500' : 'normal'
                            }}
                            ellipsis={{ rows: 1 }}
                          >
                            {item.message}
                          </Text>
                          {item.unread && (
                            <Badge dot style={{ backgroundColor: '#0a66c2' }} />
                          )}
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
            </TabPane>
            <TabPane tab="Other" key="2">
              {/* Content for "Other" tab */}
              <div style={{ padding: '16px', textAlign: 'center' }}>
                <Text type="secondary">No messages in Other</Text>
              </div>
            </TabPane>
            <TabPane tab="Rooms" key="3">
            
              <div style={{marginLeft: 15}}>
                {loading ? (
                  <div style={{ padding: '50px 0', textAlign: 'center' }}>
                    <Spin size="large" />
                    <div style={{ marginTop: '20px' }}>Loading active rooms...</div>
                  </div>
                ) : loadError ? (
                  <div style={{ padding: '50px 0', textAlign: 'center', color: '#ff4d4f' }}>
                    Failed to load rooms
                    <div style={{ marginTop: '10px' }}>
                      <Button type="primary" onClick={loadCalls}>Retry</Button>
                    </div>
                  </div>
                ) : calls.length === 0 ? (
                  <Empty 
                    description="No active rooms at the moment" 
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    style={{ padding: '40px 0' }}
                  />
                ) : (
                  <List
                    dataSource={calls}
                    renderItem={item => (
                      <List.Item
                        actions={[
                          <Button 
                            type="primary" 
                            key="join"
                            onClick={() => joinCall(item.id)}
                            style={{marginBottom: 20}}
                          >
                            Join
                          </Button>
                        ]}
                      >
                        <List.Item.Meta
                          title={
                            <div>
                              {item.name} 
                              {item.isPrivate && (
                                <Tag color="default" style={{ marginLeft: '8px' }}>Private</Tag>
                              )}
                            </div>
                          }
                          description={
                            <Space direction="vertical" size={1}>
                              <Text type="secondary">
                                <UserOutlined /> Organized by {item.organizer}
                              </Text>
                              <Text type="secondary">
                                <ClockCircleOutlined /> Starting at {new Date(item.startTime).toLocaleTimeString()}
                              </Text>
                              <Text type="secondary">
                                {item.participants}/{item.maxParticipants} participants
                              </Text>
                            </Space>
                          }
                        />
                      </List.Item>
                    )}
                  />
                )}
              </div>
            </TabPane>
          </Tabs>
        </div>
    </Card>
  );
};
const LinkedInNewsCard = () => {
return (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justify: 'center' }}>
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
            marginRight: -3,
            marginBottom: -10
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
    <Affix offsetTop={80}>
    <ul style={footerStyle}>
        <li className='home-foot' style={footerItemStyle}> About </li>
        <li className='home-foot' style={footerItemStyle}> Accessibility </li>
        <li className='home-foot' style={footerItemStyle}> Help Center </li>
        <li className='home-foot' style={footerItemStyle}> Privacy & Terms <CaretDownOutlined/> </li>
        <li className='home-foot' style={footerItemStyle}> Ad Choices </li>
        <li className='home-foot' style={footerItemStyle}> Advertising </li>
        <li className='home-foot' style={footerItemStyle}> Business Services <CaretDownOutlined/></li>
        <li className='home-foot' style={footerItemStyle}> Get the LinkedIn app </li>
        <li className='home-foot' style={footerItemStyle}> More </li>
    </ul>
      <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', gap: 5, padding: '15px 0px', color: 'black', fontSize: 12, }}>
            <>
              <svg role="img" aria-hidden="false" aria-label="LinkedIn" class="global-footer-compact__linkedin-logo" xmlns="http://www.w3.org/2000/svg" width="56" height="14" viewBox="0 0 56 14" data-supported-dps="56x14" data-test-icon="linkedin-logo-blue-xxsmall">
              <svg display="var(--hue-web-svg-display-light)">
              <image href="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" x="0" y="0" width="56" height="14"></image>
              </svg>
              </svg>
            </>
            <p style={{lineHeight: 1.2}}>LinkedIn Corporation © 2025</p>
      </div>
      </Affix>
    </div>
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
};
const LinkedInContentCard = ({
  name = 'Cornell University',
  followers = '688,885',
  date = '2w',
  comments = Math.floor(Math.random() * 999),
  reposts = Math.floor(Math.random() * 300),
  message = "To participate, tell us how your time at Cornell prepared you for life after the Hill. Include your preferred college or unit annual fund in the answer. We'll pick a random winner by 10:00 p.m. ET, and that college or unit's annual fund will receive an extra $2,000!",
  avatarUrl = "https://media.licdn.com/dms/image/v2/C560BAQE8SOXGRyv7LA/company-logo_100_100/company-logo_100_100/0/1631339899678?e=1749081600&v=beta&t=wRS0z-PL_Mm4v1bQm9dAxFc7f5ZPIRJ1HTXEXKSc8pM",
  contentUrl = {corn}}) => {
  return (
    <Card
    className={'content-card'}
    style={{width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        fontWeight: 600,
        }}
    actions={[
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 5, color: '#404040', }}> <LikeIcon/> <p style={{paddingTop:0}}>Like</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 5, color: '#404040'}}> <CommentIcon/> <p style={{paddingTop:0}}>Comment</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 5, color: '#404040', }}> <RepostIcon/> <p style={{paddingTop:0}}>Repost</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 5, color: '#404040', }}> <SendIcon/> <p style={{paddingTop:0}}>Send</p> </div>,
    ]}
  >
    <Meta
      avatar={<a href="##"><Avatar src={avatarUrl} size={50} style={{ postion: 'relative', top: -5, left:15, backgroundColor: '#e7e2dc', padding: 0, }}/></a>}
      description=
      <div style={{textAlign: 'left', display: 'flex', flexDirection: 'column', color: 'black', position: 'relative', top: -8, left:30, fontSize: 16}}>
        <a href="##" className={'content-name'}>{name}</a>
        <p style={{fontSize: 12, color: '#666666', fontWeight: 500}} className='hoverable'>{followers} followers</p>
        <p style={{fontSize: 12, color: '#666666', fontWeight: 500}}>{date} • <svg style={{position: 'relative', top: 3}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path></svg></p>
      </div>
    />
    <p className={'content-text'} style={{marginLeft: 20, textAlign: 'left', color: 'black', fontWeight: 500}}>{message}</p>

    <a href="##"><img src={contentUrl} alt="" /></a>
    <p style={{position: 'absolute', textAlign: 'left', bottom: 75, right: 15, color: '#666666', fontSize: 13, fontWeight: 500}}><a href='##' className='fake-link' style={{color: '#666666'}}>{comments} comments</a> • <a href='##' className='fake-link' style={{color: '#666666'}}>{reposts} reposts</a></p>
  </Card> 
)};
const LinkedInContent = () => {
  const { openCallModal } = useCallContext();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justify: 'center' }}>
  <Card
    className={'linkedin-content'}
    style={{width: 'auto',
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
        fontWeight: 600,
        }}
    actions={[
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040', marginLeft: 50}}> <MediaIcon/> <p style={{paddingTop:2}}>Media</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040'}}> <EventIcon/> <p style={{paddingTop:2}}>Event</p> </div>,
      <div className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 10, color: '#404040', marginLeft: -30}}> <ArticleIcon/> <p style={{paddingTop:2}}>Write Article</p> </div>,
      <Button type="text" onClick={() => {setModalTopPosition(70); openCallModal()}} className={'linked-action'} style={{display: 'flex', justifyContent: 'center', gap: 6, color: '#404040',  height: '44px', marginLeft: -5}}> <RoomsIcon/> <p style={{paddingTop:2}}>Open Room</p> </Button>,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" size={50} style={{ backgroundColor: '#e7e2dc', padding: 0 }}/>}
      description=<Button type="text" style={{border: 'solid 1px grey', borderRadius:'25px', fontWeight: 600, color: '#404040', width: '95%', height: 46, margin:'15px 0px 0px 0px', justifyContent: 'left'}}>Start a post</Button>
    />
  </Card>

  <PublicRooms />

  <LinkedInContentCard avatarUrl='https://media.licdn.com/dms/image/v2/C4D0BAQGRhsociEn4gQ/company-logo_200_200/company-logo_200_200/0/1631367875582?e=1749686400&v=beta&t=K48GH_goxDtqBIWPOceNWDCWgzL1jLap2X4MO0ebmkM' contentUrl={amex} message = <p>We are delighted to be recognized as a Handshake Early Talent Award winner for the third time. This award reflects Amex's commitment to maintaining a strong workplace culture by continually investing in programs, benefits, and resources to ensure our hashtag <a href='##' className='fake-link'>#TeamAmex</a> colleagues have the support they need to be and deliver their best. Learn more about our internship opportunities: <a href='##' className='fake-link'>https://go.amex/7XZMJV</a></p> followers='2,496,518' date='1mo' name='American Express'/>
  
  <LinkedInContentCard avatarUrl='https://media.licdn.com/dms/image/v2/D4E0BAQFMhKgeR7EYAg/company-logo_100_100/company-logo_100_100/0/1719256989269/anthropicresearch_logo?e=1749686400&v=beta&t=rh_3QgrUGmRTh-lk5Lelat7o9wp1ysTH4asI-L4HXMk' contentUrl={anthr} message = <p>We've overhauled the Anthropic Console to serve as one place to build, test, and iterate on prompts with Claude.
  <br/><br/>
  And now you can share prompts with your teammates, too.
  <br/><br/>
  We've also added support for our latest model, Claude 3.7 Sonnet, and the ability to control the extended thinking budget—right from the Workbench. 
  <br/><br/>
  Read more: <a href="##">https://lnkd.in/ePNCEsXY</a></p> followers='785,329' date='3d' name='Anthropic'/>

  <LinkedInContentCard contentUrl={corn} />

  <LinkedInContentCard avatarUrl='https://media.licdn.com/dms/image/v2/C4E0BAQGkvD12zxajlA/company-logo_100_100/company-logo_100_100/0/1679328143343/cornell_university_college_of_computing_and_information_science_logo?e=1749686400&v=beta&t=U65jSqNR5UEGZb0nlUWd4Hlr3B6VmMlQHDw88IQ0ugw' contentUrl={bow} message = 'Cornell Bowers is seeking a Senior Research Administrator who will manage a designated portfolio of Bowers PI sponsored awards, oversee sponsor reporting, develop complex financial reports, and support central and unit financial management and reporting.' name='Cornell Ann S. Bowers College of Computing and Information Science' followers='2,951' date='1w' />
  
  <LinkedInContentCard avatarUrl='https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1749686400&v=beta&t=Gwp7TJ03ucl_lSWXsdG8lCgHnVoQKbH4_zMgayw38XQ' contentUrl={goog} message = <p>JYour favorite features on the Gemini App are getting upgrades, including Deep Research now on 2.0 Flash Thinking Experimental (available for all to try at no cost), additional apps and more → <a href='##'>https://goo.gle/4233QhY</a></p> followers='36,449,414' date='1w' name='Google'/>
  
  <LinkedInContentCard avatarUrl='https://media.licdn.com/dms/image/v2/D560BAQHpzXbqSyR74A/company-logo_200_200/B56ZT8EYB8HsAI-/0/1739395793272/openai_logo?e=1749686400&v=beta&t=JyxkDoEeYC7T_Toj9cG-YQhVJTNUGoBt_oAjIZXw4Nw' contentUrl={oai} message = <p>New year, new you. What goals are we crushing in 2025?</p> followers='6,628,187' date='3mo' name='OpenAI'/>
</div>
)};
const LinkedInPage = () =>
  { 
    
    const navigate = useNavigate();

    return (
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
                  },
                  {
                    key: '4',
                    icon: <SmallRoomsIcon/>,
                    label: 'Rooms',
                    onClick: () => navigate('/home')
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
    <LinkedInMessaging/>
    
  </Layout>
);};

export default LinkedInPage
