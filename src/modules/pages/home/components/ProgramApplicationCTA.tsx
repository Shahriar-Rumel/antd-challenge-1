import { QuestionCircleOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Button, FloatButton, Space } from 'antd';
import React from 'react';
const ButtonWrapper = ({ icon }: { icon: string }) => {
  return (
    <Button
      icon={<Icon icon={icon} className="text-[20px]" />}
      className="inline-flex items-center border-slate-100 justify-center"
    />
  );
};

const ProgramApplicationCTA = () => {
  return (
    <Space className="fixed right-[44px] bottom-0 rounded-tl-md shadow-primary rounded-tr-md bg-white px-4 py-2">
      <ButtonWrapper icon="ph:tag-light" />
      <ButtonWrapper icon="clarity:note-edit-line" />
      <ButtonWrapper icon="arcticons:contacts" />
      <ButtonWrapper icon="iconoir:remove-user" />
      <ButtonWrapper icon="ri:user-voice-line" />
      <ButtonWrapper icon="circum:mail" />
      <Button className="bg-blue-700 text-white h-[40px] px-6">
        Move to Video Interview
      </Button>
    </Space>
  );
};

export default ProgramApplicationCTA;
