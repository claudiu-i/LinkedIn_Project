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
  Input
} from 'antd'
import Icon, {
  PlusOutlined,
  SearchOutlined,
  CaretDownOutlined
} from '@ant-design/icons'
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

const EventSvg = () => (
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
    width='36'
    height='36'
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
const BookmarkIcon = props => <Icon component={BookmarkSvg} {...props} />
const GroupIcon = props => <Icon component={GroupsSvg} {...props} />
const NewsIcon = props => <Icon component={NewsSvg} {...props} />
const EventIcon = props => <Icon component={EventSvg} {...props} />
const HomeIcon = props => <Icon component={HomeSvg} {...props} />
const NetworkIcon = props => <Icon component={NetworkSvg} {...props} />
const JobsIcon = props => <Icon component={JobsSvg} {...props} />
const MessageIcon = props => <Icon component={MessageSvg} {...props} />
const NotificationsIcon = props => (
  <Icon component={NotificationsSvg} {...props} />
)
const LinkedInLogoIcon = props => (
  <Icon component={LinkedInLogoSvg} {...props} />
)
const BusinessIcon = props => <Icon component={BusinessSvg} {...props} />
const UserIcon = props => <Icon component={UserSvg} {...props} />

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
              border: '3px solid white',
              borderRadius: '50%',
              backgroundColor: '#f0f0f0'
            }}
          >
            <Avatar
              size={72}
              src={avatarUrl}
              style={{ backgroundColor: '#b0b0b0' }}
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
    }}
    bodyStyle={{
                paddingLeft: '15px',
                paddingTop: '5px '
              }}
  >
    <h2 style={{fontWeight:600}}>LinkedIn News</h2>
    <h3 style={{color: '#666666', fontWeight:600}}>Top Stories</h3>
    <Menu
        selectable = {false}
        mode='vertical'
        itemMarginInBlock = {0}
        style={{
            border: 'none',
            backgroundColor: 'white',
            marginLeft: -20,
            overflow: ''
        }}
        items={[
            {
            key: '1',
            label: <p style={{width: '500px'}}>Amazon beefing up its Temu rival'</p>
            },
            {
            key: '2',
            label: 'Groups'
            },
            {
            key: '3',
            label: 'Newsletters'
            },
            {
            key: '4',
            label: 'Events'
            }
        ]}
        />
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
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <LinkedInLogoIcon style={{ fontSize: 34, color: '#0a66c2' }} />
        </Typography.Link>

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
            marginBottom: '10px'
          }}
        />
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
                boxShadow: '0 1px 2px rgba(0,0,0,0.15)'
              }}
            >
              {/* eslint-disable-next-line */}
              <a
                href={null}
                className='dummy-side'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%'
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
                  border: 'none',
                  backgroundColor: 'white'
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
                    icon: <EventIcon />,
                    label: 'Events'
                  }
                ]}
              />
            </Card>
          </Flex>
        </Sider>
        <Content width='523px' style={contentStyle}>
          Content
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
