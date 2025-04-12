import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { VideoCameraOutlined } from '@ant-design/icons';
import { useCallContext, setModalTopPosition } from './CallContext';

// This component can be used on any page to open the call modal
const CreateCallButton = ({ type = 'primary', size = 'middle', icon = true, text = 'Create Room', where = ''}) => {
  const { openCallModal } = useCallContext();
  const to = useNavigate();
  setModalTopPosition(100);

  return (
    <Button
      type={type}
      size={size}
      onClick={where === '' ? openCallModal : () => to("/")}
      icon={icon ? <VideoCameraOutlined /> : null}
    >
      {text}
    </Button>
  );
};

export default CreateCallButton;
