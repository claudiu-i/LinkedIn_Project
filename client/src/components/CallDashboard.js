import React from 'react';
import { 
  Layout, 
  Typography, 
  Card, 
  Empty, 
  Spin, 
  List,
  Avatar,
  Tag,
  Space,
  Button
} from 'antd';
import { 
  VideoCameraOutlined, 
  UserOutlined,
  ClockCircleOutlined,
  ReloadOutlined
} from '@ant-design/icons';
import { useCallContext } from './CallContext';
import CreateCallButton from './CreateCallButton';

const { Header, Content } = Layout;
const { Title, Text, Paragraph } = Typography;

const CallDashboard = () => {
  const { calls, loading, loadError, loadCalls, joinCall } = useCallContext();

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header style={{ background: 'white', borderBottom: '1px solid #e8e8e8', padding: '0 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
          <Title level={4} style={{ margin: 0, color: '#0a66c2' }}>LinkedIn Rooms</Title>
          <Space>
            <Button>Profile</Button>
            <CreateCallButton />
          </Space>
        </div>
      </Header>
      
      <Content style={{ padding: '0 50px', marginTop: 40 }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <Title level={2}>Virtual Networking and Events</Title>
          <Paragraph style={{ fontSize: '16px', color: '#595959', marginBottom: '30px' }}>
            Join LinkedIn Rooms to connect with professionals and recruiters in real-time
          </Paragraph>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', gap: '20px' }}>
            <CreateCallButton size="large" text="Create a Room"/>
            <CreateCallButton size="large" text="Return to LinkedIn" where='/' icon = {false} />
          </div>
          
          <div style={{ textAlign: 'left', marginBottom: '100px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <Title level={4} style={{ margin: 0 }}>Active Rooms</Title>
              {!loading && (
                <Button 
                  icon={<ReloadOutlined />} 
                  onClick={loadCalls}
                  size="small"
                >
                  Refresh
                </Button>
              )}
            </div>
            
            <Card>
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
                        >
                          Join
                        </Button>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar 
                            icon={<VideoCameraOutlined />} 
                            style={{ backgroundColor: item.isVideo ? '#1890ff' : '#52c41a' }}
                            size="large"
                          />
                        }
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
            </Card>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default CallDashboard;