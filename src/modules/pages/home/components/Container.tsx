import { Space, Tabs, TabsProps } from 'antd';
import ProfileTab from './ProfileTab';
import VideoTab from './VideoTab';

const TabLabel = (props: any) => {
  return (
    <span className="text-[14px] text-center font-medium">{props.label}</span>
  );
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <TabLabel label="Profile" />,
    children: <ProfileTab />
  },
  {
    key: '2',
    label: <TabLabel label="Video" />,
    children: <VideoTab label="Video Questions" />
  },
  {
    key: '3',
    label: <TabLabel label="Evaluation" />,
    children: <VideoTab label="Evaluation Result" />
  },
  {
    key: '4',
    label: <TabLabel label="Placement" />,
    children: <VideoTab label="Placements" />
  },
  {
    key: '5',
    label: <TabLabel label="Compliance" />,
    children: <VideoTab label="Compliance List" />
  },
  {
    key: '6',
    label: <TabLabel label="Notes" />,
    children: <VideoTab label="Notes" />
  }
];
const Container = () => {
  const onChange = (key: string) => {};

  return (
    // <Space className="mt-6 w-[100%] bg-red-400">
    <Tabs
      defaultActiveKey="1"
      items={items}
      onChange={onChange}
      style={{ width: '100%' }}
    />
    // </Space>
  );
};

export default Container;
