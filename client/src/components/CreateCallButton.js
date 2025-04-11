import React from 'react';
import { Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import { useCallContext } from './CallContext';

// This component can be used on any page to open the call modal
const CreateCallButton = ({ type = 'primary', size = 'middle', icon = true, text = 'Create Room' }) => {
  const { openCallModal } = useCallContext();

  return (
    <Button
      type={type}
      size={size}
      onClick={openCallModal}
      icon={icon ? <VideoCameraOutlined /> : null}
    >
      {text}
    </Button>
  );
};

export default CreateCallButton;
