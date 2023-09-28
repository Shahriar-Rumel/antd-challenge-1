import React, { useEffect, useRef, useState } from 'react';
import { Card, Space, Tag, Typography, Input, Tooltip, Modal } from 'antd';
import Divider from '../../../shared/Divider';
import type { InputRef } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { useCandidate } from '../../../hooks/CandidateContext';

const CandidateProgramApplicationCard: React.FC = () => {
  const { candidate, setCandidate } = useCandidate();

  const [tags, setTags] = useState(candidate ? [...candidate.tags] : ['empty']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [editInputIndex, setEditInputIndex] = useState(-1);
  const [editInputValue, setEditInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);
  const editInputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [editInputValue]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const tagInputStyle: React.CSSProperties = {
    width: 100,
    height: 22,
    marginInlineEnd: 8,
    verticalAlign: 'top'
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card className="border-0 shadow-primary flex items-center">
      <Space className="gap-6">
        <Space
          style={{
            backgroundImage: `url(${candidate?.thumbnail})`
          }}
          onClick={showModal}
          className="flex bg-center cursor-pointer bg-cover items-center justify-center h-[100px] w-[100px] bg-slate-500 rounded-full"
        >
          <Icon
            icon="ion:play"
            className="text-[60px] ml-[12px] text-white opacity-70"
          />
        </Space>
        <Modal
          title="Candidate Video Questions"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <video
            autoPlay={false}
            controls
            className="my-10"
            src="https://rumelshahriar.com/assets/youthAward/youthAwards.mp4"
          ></video>
        </Modal>
        <Space direction="vertical">
          <Space className="gap-6">
            <Typography.Text className="text-[14px] font-bold">
              {candidate?.name}
            </Typography.Text>
            <Space className="text-[8px]">
              {candidate?.locations.map((location, index) => (
                <Tag
                  key={index}
                  bordered={false}
                  className="bg-slate-200 text-[8px]"
                >
                  {location}
                </Tag>
              ))}
            </Space>
          </Space>

          <Space split={<Divider type="vertical" />} className="mt-4">
            <Typography.Text className="">Saudi Arabia</Typography.Text>
            <Typography.Text>aaliyah@gmail.com</Typography.Text>
            <Typography.Text>+00 000 000 000</Typography.Text>
          </Space>

          <Space size={[0, 8]} wrap className="text-[10px] mt-2">
            {tags.map((tag, index) => {
              if (editInputIndex === index) {
                return (
                  <Input
                    ref={editInputRef}
                    key={tag}
                    size="small"
                    style={tagInputStyle}
                    className="rounded-full"
                    value={editInputValue}
                    onChange={handleEditInputChange}
                    onBlur={handleEditInputConfirm}
                    onPressEnter={handleEditInputConfirm}
                  />
                );
              }
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag
                  key={tag}
                  closable={true}
                  style={{ userSelect: 'none' }}
                  className="text-[10px] border-0 rounded-full bg-slate-100"
                  onClose={() => handleClose(tag)}
                >
                  <span
                    onDoubleClick={(e) => {
                      if (index !== 0) {
                        setEditInputIndex(index);
                        setEditInputValue(tag);
                        e.preventDefault();
                      }
                    }}
                  >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </span>
                </Tag>
              );
              return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
            {inputVisible ? (
              <Input
                ref={inputRef}
                type="text"
                size="small"
                className="rounded-full"
                style={tagInputStyle}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputConfirm}
                onPressEnter={handleInputConfirm}
              />
            ) : (
              <Tag
                icon={<PlusCircleOutlined className="text-[12px]" />}
                className="text-[10px] border-0"
                onClick={showInput}
              >
                Add Tag
              </Tag>
            )}
          </Space>
        </Space>
        <Space
          direction="vertical"
          className="absolute justify-between right-3 top-3 bottom-6 items-end"
        >
          <Space className="shadow-secondary gap-6 px-3 py-1 rounded-full">
            <Typography.Text className="text-[14px] font-medium">
              Overall Score
            </Typography.Text>
            <Space className="bg-slate-200 h-[30px] w-[30px] items-center justify-center text-[14px]  rounded-full">
              7
            </Space>
          </Space>
          <Typography.Text className="text-[10px] font-light">
            Applied on 12 June 2023
          </Typography.Text>
        </Space>
      </Space>
    </Card>
  );
};

export default CandidateProgramApplicationCard;
