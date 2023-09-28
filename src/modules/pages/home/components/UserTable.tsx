import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Divider from '../../../shared/Divider';
import { useCandidate } from '../../../hooks/CandidateContext';

const { Text } = Typography;
interface DataType {
  key: React.Key;
  name: any;
}

const TableHeader = ({
  label,
  count,
  active
}: {
  label: string;
  count: number;
  active?: boolean;
}) => {
  return (
    <Text
      className={`${
        active ? 'text-blue-500 font-semibold' : 'font-regular text-slate-800'
      } inline-flex items-center text-[12px]`}
    >
      {label}
      <span
        className={`bg-blue-100 ${
          active ? 'bg-blue-100 text-blue-500' : 'bg-slate-100 text-slate-500'
        } ml-2  text-[10px] px-1 py-1 rounded-full`}
      >
        {count}
      </span>
    </Text>
  );
};

const UserTable = ({ candidates }: any) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User',
      name: record.name
    })
  };

  const { candidate, setCandidate } = useCandidate();

  const columns: ColumnsType<DataType> = [
    {
      title: (
        <Space className="flex items-center gap-2 justify-between">
          <TableHeader
            label="Qualified"
            count={candidates.length}
            active={true}
          />
          <Divider />
          <TableHeader label="Task" count={candidates.length} />
          <Divider />
          <TableHeader label="Disqualified" count={candidates.length} />
        </Space>
      ),
      dataIndex: 'name'
    }
  ];

  const data = candidates.map((candidate: any, index: number) => ({
    key: index,
    name: (
      <Space
        onClick={() => setCandidate(candidate)}
        className="items-center w-[100%] gap-4 hover:bg-blue-50 px-2 py-2 rounded-lg"
      >
        <Space className="w-[60px] h-[60px] flex items-center justify-center bg-slate-50 text-slate-400 font-semibold rounded-full text-[20px]">
          {candidate?.name.split(' ')[0][0] + candidate?.name.split(' ')[1][0]}
        </Space>

        <Space direction="vertical" className="w-[100%]">
          <Text className="text-[14px] font-bold">{candidate?.name}</Text>
          <Text className="text-[10px] font-bold my-1">
            {candidate?.location}
          </Text>
          <Text className="text-[10px] font-regular">{candidate?.program}</Text>
          <Space className="gap-2">
            {candidate?.tags.map((tag: string, index: any) => (
              <Tag
                bordered={false}
                key={index}
                className="text-[8px] bg-transparent text-slate-400"
              >
                #{tag}
              </Tag>
            ))}
          </Space>
          <Space className="flex gap-2 mt-1">
            {candidate?.locations.map((location: string, index: any) => (
              <Tag
                bordered={false}
                key={index}
                className="bg-slate-200 text-[8px]"
              >
                {location}
              </Tag>
            ))}
          </Space>
        </Space>
      </Space>
    )
  }));

  return (
    <Table
      pagination={false}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      className="custom-table"
    />
  );
};

export default UserTable;
