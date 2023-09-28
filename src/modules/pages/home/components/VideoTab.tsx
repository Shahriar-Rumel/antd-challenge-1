import { Card, Empty, Space, Typography } from 'antd';
import Divider from '../../../shared/Divider';

const { Text } = Typography;

const colors = [
  'bg-red-500',
  'bg-pink-500',
  'bg-rose-500',
  'bg-orange-500',
  'bg-yellow-500',
  'bg-sky-500',
  'bg-blue-500',
  'bg-lime-500',
  'bg-green-500'
];

const VideoTab = ({ label, video }: any) => {
  return (
    <Card className="bg-white w-[740px] border-0 rounded-md px-4 py-2 mt-3">
      <Space direction="vertical" className="w-[100%] block">
        <Space split={<Divider />}>
          <Text className="text-blue-500 font-semibold">{label}</Text>
          <Text className="text-slate-500">Below Expectations</Text>
          <Space>
            {colors.map((color) => (
              <div
                key={color}
                className={`${color} h-[10px] w-[10px] rounded-full`}
              ></div>
            ))}
          </Space>
          <Text className="text-slate-500">Above Expectations</Text>
        </Space>
        <Space className="px-4 py-8 items-center  justify-center w-[100%]">
          {video ? (
            <video src={video} />
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <Typography.Paragraph className="w-[100%] mx-auto text-slate-400 text-center">
                  No Submitter or Requested video yet
                </Typography.Paragraph>
              }
            />
          )}
        </Space>
      </Space>
    </Card>
  );
};

export default VideoTab;
