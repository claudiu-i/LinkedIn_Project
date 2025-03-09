import React, { useState,  useEffect  } from 'react';
import { 
  Modal, 
  Button, 
  Input, 
  Radio, 
  DatePicker, 
  TimePicker, 
  Select, 
  Form, 
  Checkbox,
  Divider,
  Typography,
  InputNumber
} from 'antd';
import { 
  CloseOutlined, 
  ClockCircleOutlined, 
  VideoCameraOutlined,
  CheckCircleFilled
} from '@ant-design/icons';
import { useCallContext } from './CallContext';

const { Title } = Typography;
const { Option } = Select;

const CallModal = () => {
  const { modalVisible, closeCallModal, createCall } = useCallContext();
  const [form] = Form.useForm();
  const [callType, setCallType] = useState('video');
  const [showDuration, setShowDuration] = useState(false);

  useEffect(() => {
    if (modalVisible) {
      setShowDuration(false);
      
      // Optionally reset the form field value too
      form.setFieldsValue({ addDuration: false });
    }
  }, [modalVisible, form]);

  const handleCallTypeChange = e => {
    setCallType(e.target.value);
  };
  const handleDurationChange = e => {
    setShowDuration(e.target.checked);
  };
  const handleFinish = (values) => {
    if (!values.addDuration) {
      delete values.durationHours;
      delete values.durationMinutes;
    }
    
    createCall(values);
    form.resetFields();
  };

  return (
    <Modal
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title level={5} style={{ margin: 0 }}>Create a call</Title>
          <Button 
            type="text" 
            icon={<CloseOutlined />} 
            onClick={closeCallModal}
            style={{ marginRight: -12 }}
          />
        </div>
      }
      open={modalVisible}
      onCancel={closeCallModal}
      footer={null}
      width={520}
      bodyStyle={{ padding: '20px', maxHeight: '80vh', overflowY: 'auto' }}
      style={{ top: getComputedStyle(document.documentElement).getPropertyValue('--modal-top') }}
      closeIcon={null}
      destroyOnClose={true}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        initialValues={{
          callType: 'video',
          enableVideo: true,
          enableAudio: true,
          enableChat: true,
          enableScreenSharing: true,
          autoAdmit: true,
          durationHours: 1,
          durationMinutes: 0
        }}
      >
        {/* Call type */}
        <Form.Item 
          label="Call type" 
          name="callType"
        >
          <Radio.Group onChange={handleCallTypeChange}>
            <Radio value="video" style={{ marginRight: '50px' }}>
              <CheckCircleFilled 
                style={{ 
                  color: callType === 'video' ? '#0a66c2' : 'transparent',
                  marginRight: '8px',
                  fontSize: '16px'
                }} 
              />
              Video
            </Radio>
            <Radio value="audio">
              <CheckCircleFilled 
                style={{ 
                  color: callType === 'audio' ? '#0a66c2' : 'transparent',
                  marginRight: '8px', 
                  fontSize: '16px'
                }} 
              />
              Audio only
            </Radio>
          </Radio.Group>
        </Form.Item>

        {/* Call name */}
        <Form.Item 
          label={<>Call name<span style={{ color: 'red' }}>*</span></>} 
          name="callName"
          rules={[{ required: true, message: 'Please enter a call name' }]}
        >
          <Input placeholder="Enter call name" maxLength={75} showCount />
        </Form.Item>

        {/* Timezone */}
        <Form.Item 
          label={<>Timezone<span style={{ color: 'red' }}>*</span></>} 
          name="timezone"
          rules={[{ required: true, message: 'Please select timezone' }]}
          initialValue="(UTC-04:00) Eastern Daylight Time (US and Canada)"
        >
          <Select style={{ width: '100%' }}>
            <Option value="(UTC-04:00) Eastern Daylight Time (US and Canada)">
              (UTC-04:00) Eastern Time (US and Canada)
            </Option>
            <Option value="(UTC-05:00) Central Daylight Time (US and Canada)">
              (UTC-05:00) Central Time (US and Canada)
            </Option>
            <Option value="(UTC-07:00) Pacific Daylight Time (US and Canada)">
              (UTC-07:00) Pacific Time (US and Canada)
            </Option>
          </Select>
        </Form.Item>

        {/* Date and time */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <Form.Item 
            label={<>Start date<span style={{ color: 'red' }}>*</span></>} 
            name="startDate"
            rules={[{ required: true, message: 'Required' }]}
            style={{ flex: 1 }}
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          
          <Form.Item 
            label={<>Start time<span style={{ color: 'red' }}>*</span></>} 
            name="startTime"
            rules={[{ required: true, message: 'Required' }]}
            style={{ flex: 1 }}
          >
            <TimePicker 
              style={{ width: '100%' }} 
              format="h:mm A"
              suffixIcon={<ClockCircleOutlined />}
            />
          </Form.Item>
        </div>

        {/* Add duration */}
        <Form.Item name="addDuration" valuePropName="checked">
          <Checkbox onChange={handleDurationChange}>
            <span style={{ color: '#0a66c2' }}>Add duration</span>
          </Checkbox>
        </Form.Item>

        {showDuration && (
          <div style={{ 
            display: 'flex', 
            gap: '15px', 
            marginBottom: '24px',
            padding: '16px',
            background: '#f9f9f9',
            borderRadius: '4px'
          }}>
            <Form.Item 
              label="Hours" 
              name="durationHours"
              style={{ flex: 1, marginBottom: 0 }}
            >
              <InputNumber 
                min={0} 
                max={24} 
                style={{ width: '100%' }} 
              />
            </Form.Item>
            
            <Form.Item 
              label="Minutes" 
              name="durationMinutes"
              style={{ flex: 1, marginBottom: 0 }}
            >
              <Select style={{ width: '100%' }}>
                <Option value={0}>0</Option>
                <Option value={15}>15</Option>
                <Option value={30}>30</Option>
                <Option value={45}>45</Option>
              </Select>
            </Form.Item>
          </div>
        )}
        <Divider />

        {/* Max participants */}
        <Form.Item label="Max Participants" name="maxParticipants" initialValue={10}>
          <Input type="number" style={{ width: '100%' }} min={1} max={100} />
        </Form.Item>

        {/* Private call */}
        <Form.Item name="privateCall" valuePropName="checked">
          <Checkbox>Private Call</Checkbox>
        </Form.Item>

        <Divider />

        <Title level={5}>Call Settings</Title>

        {/* Call settings */}
        <Form.Item name="enableVideo" valuePropName="checked">
          <Checkbox>Enable Video</Checkbox>
        </Form.Item>
        <Form.Item name="enableAudio" valuePropName="checked">
          <Checkbox>Enable Audio</Checkbox>
        </Form.Item>
        <Form.Item name="enableChat" valuePropName="checked">
          <Checkbox>Enable Chat</Checkbox>
        </Form.Item>
        <Form.Item name="enableScreenSharing" valuePropName="checked">
          <Checkbox>Enable Screen Sharing</Checkbox>
        </Form.Item>
        <Form.Item name="autoAdmit" valuePropName="checked">
          <Checkbox>Auto-Admit Participants</Checkbox>
        </Form.Item>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
          <Button onClick={closeCallModal}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            Create Call
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default CallModal;