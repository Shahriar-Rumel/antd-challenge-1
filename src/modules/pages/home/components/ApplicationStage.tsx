import { Button, List, Popover, Space, Typography } from 'antd';
import React from 'react';
import Divider from '../../../shared/Divider';
import { Icon } from '@iconify/react';
import { stages } from '../../../shared/data/stages';

const { Text } = Typography;
const Dropdown = ({ list, setList }: any) => {
  return (
    <List
      size="large"
      header={false}
      footer={false}
      bordered={false}
      dataSource={stages}
      className="w-[100%] items-start"
      renderItem={(item) => (
        <List.Item className="cursor-pointer hover:bg-blue-50 w-[100%]">
          <Text>{item.label}</Text>
          <Text className="bg-blue-100 h-[25px] text-blue-500 font-medium w-[25px] flex items-center justify-center rounded-full">
            {item.count}
          </Text>
        </List.Item>
      )}
    />
  );
};

const ApplicationStage = () => {
  return (
    <Popover
      overlayStyle={{ width: '31%' }}
      content={<Dropdown />}
      trigger="click"
      placement="bottomLeft"
    >
      <Space
        split={<Divider />}
        className="shadow-primary cursor-pointer bg-white border-0 w-[100%] justify-between items-center p-3 rounded-md"
      >
        <Space className="bg-slate-200 text-slate-800 font-medium w-[20px] h-[20px] p-4 flex items-center justify-center rounded-full">
          SIP
        </Space>
        <Text className="font-medium text-[16px]">Oppurtunity Browsing</Text>
        <Text className="font-medium text-[16px]">2325</Text>
        <Icon
          icon="ri:arrow-up-s-line"
          className="text-[20px] rotate-[180deg]"
        />
      </Space>
    </Popover>
  );
};

export default ApplicationStage;
