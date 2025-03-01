import React from 'react';
import { Layout, Badge, Avatar, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Header } = Layout;

const LinkedInNavbar = () => {
  // SVG icons from the LinkedIn navbar
  const HomeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"/>
    </svg>
  );
  
  const NetworkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
     <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"/>
    </svg>
  );
  
  const JobsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z" />
    </svg>
  );
  
  const MessageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z" />
    </svg>
  );
  
  const NotificationsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z" />
    </svg>
  );
  
  const MeIcon = () => (
    <Avatar size={24} 
      style={{ 
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <div style={{ fontSize: '16px', color: '#666' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#666">
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-5.34 0-8 2.68-8 6v2h16v-2c0-3.32-2.66-6-8-6z"/>
        </svg>
      </div>
    </Avatar>
  );
  
  const BusinessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M4 2h16a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2zm2 4v14h12V6H6z"/>
    </svg>
  );

  const navItems = [
    { icon: <HomeIcon />, label: 'Home', active: true },
    { icon: <NetworkIcon />, label: 'My Network' },
    { icon: <JobsIcon />, label: 'Jobs' },
    { icon: <MessageIcon />, label: 'Messaging' },
    { icon: <NotificationsIcon />, label: 'Notifications', badge: 1 },
    { icon: <MeIcon />, label: 'Me', dropdown: true },
    { icon: <BusinessIcon />, label: 'For Business', dropdown: true, separator: true },
  ];

  return (
    <Layout>
      <Header style={{ backgroundColor: 'white', padding: 0, height: '52px', lineHeight: '52px', borderBottom: '1px solid #e8e8e8', boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1128px', margin: '0 auto', display: 'flex', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: 'auto' }}>
            <div style={{ marginRight: '8px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" fill="#0077B5">
                <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"/>
              </svg>
            </div>
            <div style={{ width: '280px' }}>
              <Input
                prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
                placeholder="Search"
                bordered={false}
                style={{ backgroundColor: '#eef3f8', borderRadius: '4px' }}
              />
            </div>
          </div>
          
          <div style={{ display: 'flex', height: '52px' }}>
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className={item.active ? 'active' : ''}
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  padding: '0 12px', 
                  cursor: 'pointer', 
                  height: '100%', 
                  position: 'relative',
                  borderLeft: item.separator ? '3px solid #eee' : 'none'
                }}
              >
                <div style={{ marginBottom: '0px', display: 'flex', justifyContent: 'center' }}>
                  {item.badge ? (
                    <Badge count={item.badge} size="small" offset={[0, 0]}>
                      {item.icon}
                    </Badge>
                  ) : (
                    item.icon
                  )}
                </div>
                <div style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
                  {item.label}
                  {item.dropdown && <span style={{ fontSize: '10px', marginLeft: '2px' }}>▼</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Header>
    </Layout>
  );
};

export default LinkedInNavbar;