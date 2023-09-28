import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Modal,
  Select,
  Space,
  Switch,
  Typography
} from 'antd';
import React, { useState } from 'react';
import FileInput from '../../../shared/UploadFile';
import { Icon } from '@iconify/react';
import axios from 'axios';
import { QuestionTypes } from '../../../shared/enums/QuestionsTypes';

const { Text } = Typography;

const cardHeaderStyle = {
  background: '#DAE9FD',
  color: 'black'
};

enum QuestionGroups {
  Personal = 'personal',
  Profile = 'profile',
  Additional = 'additional'
}

const ApplicationForm = () => {
  const [profileItems, setProfileItems] = useState<any>([
    {
      title: 'Education',
      mandatory: false,
      hidden: false
    },
    {
      title: 'Experience',
      mandatory: false,
      hidden: false
    },
    {
      title: 'Resume',
      mandatory: false,
      hidden: false
    }
  ]);

  const [personalItems, setPersonalItems] = useState<any>([
    {
      title: 'Phone (without dialcode)',
      internal: false,
      hidden: false
    },
    {
      title: 'Nationality',
      internal: false,
      hidden: false
    },
    {
      title: 'Current Residence',
      internal: false,
      hidden: false
    },
    {
      title: 'Id Number',
      internal: false,
      hidden: false
    },
    {
      title: 'Date of Birth',
      internal: false,
      hidden: false
    },
    {
      title: 'Gender',
      internal: false,
      hidden: false
    }
  ]);

  const [additionalQuestions, setAdditionalQuestions] = useState<any>([
    {
      type: QuestionTypes.Paragraph,
      question: 'Please tell me about yourself in less than 500 words'
    },
    {
      type: QuestionTypes.Paragraph,
      question: 'Please select the year of graduation from the list below'
    },
    {
      type: QuestionTypes.DropdownSelect,
      question: 'Nationality',
      choiceList: ['', '']
    },
    {
      type: QuestionTypes.MultipleChoice,
      question: 'Nationality',
      choiceList: ['', ''],
      maxChoice: ''
    },
    {
      type: QuestionTypes.YesNo,
      question: 'Id Number'
    }
  ]);

  const [newQuestion, setNewQuestion] = useState('');
  const [newChoice, setNewChoice] = useState('');
  const [currentGroup, setCurrentGroup] = useState('');
  const [currentQuestionType, setCurrentQuestionType] = useState('');

  const handleUpdateForm = async () => {
    try {
      await axios.put(
        'http://127.0.0.1:3100/api/1.0/programs/programId/application-form',
        { personalItems, profileItems, additionalQuestions },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
    } catch (error) {}
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);

    if (currentGroup.toLowerCase() === QuestionGroups.Personal.toLowerCase()) {
      const newItem = {
        type: currentQuestionType,
        title: newQuestion
      };
      setPersonalItems([...personalItems, newItem]);
    } else if (
      currentGroup.toLowerCase() === QuestionGroups.Profile.toLowerCase()
    ) {
      const newItem = { type: currentQuestionType, title: newQuestion };
      setProfileItems([...profileItems, newItem]);
    } else {
      const newItem = { type: currentQuestionType, question: newQuestion };
      setAdditionalQuestions([...additionalQuestions, newItem]);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Space direction="vertical" className="gap-12">
      <Modal
        title="Questions"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="cancel"
            type="text"
            icon={<Icon icon="gridicons:cross" className="" />}
            className="absolute left-6 flex items-center justify-center"
            danger
            onClick={handleCancel}
          >
            Delete Questions
          </Button>,
          <Button
            key="ok"
            type="primary"
            className="bg-blue-500"
            onClick={handleOk}
          >
            Save
          </Button>
        ]}
      >
        <Space direction="vertical" className="flex justify-between mb-1">
          <Text className="font-medium">Type</Text>
          <Select
            defaultValue="Select question type"
            className="w-[470px]"
            onChange={(value) => {
              setCurrentQuestionType(value);
              setNewQuestion('');
            }}
            options={[
              { value: QuestionTypes.Paragraph, label: 'Paragraph' },
              { value: QuestionTypes.ShortAnswer, label: 'Short answer' },
              { value: QuestionTypes.YesNo, label: 'Yes/No' },
              { value: QuestionTypes.DropdownSelect, label: 'Dropdown' },
              { value: QuestionTypes.MultipleChoice, label: 'Multiple choice' },
              { value: QuestionTypes.Date, label: 'Date' },
              { value: QuestionTypes.Number, label: 'Number' },
              { value: QuestionTypes.FileUpload, label: 'File upload' },
              { value: QuestionTypes.Video, label: 'Video question' }
            ]}
          />
          <Divider className="my-2" />
          {currentQuestionType && (
            <Space direction="vertical" className="flex justify-between">
              <Text className="font-medium">Question</Text>
              <Input
                className="w-[470px]"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
              />
            </Space>
          )}
          {(currentQuestionType.toLowerCase() ===
            QuestionTypes.DropdownSelect.toLowerCase() ||
            currentQuestionType.toLowerCase() ===
              QuestionTypes.MultipleChoice.toLowerCase()) && (
            <Space
              direction="vertical"
              className="flex relative justify-between"
            >
              <Icon icon="ic:baseline-list" className="absolute top-[45px]" />
              <Text className="font-medium ml-[20px]">Choice</Text>
              <Input className="w-[420px] ml-[20px]" />
              <Button
                type="text"
                className="items-center justify-center absolute right-[-5px] top-[40px] font-medium flex text-blue-500"
                icon={<Icon icon="ic:baseline-add" />}
              />
            </Space>
          )}
        </Space>
        <Divider />
      </Modal>
      <Card
        title="Upload cover image"
        headStyle={cardHeaderStyle}
        className="w-[600px]"
      >
        <FileInput
          accept=".jpg, .png, .pdf"
          fileInfo="16:9 ratio is recommended. Max image size 1mb"
        />
      </Card>

      <Card
        title="Personal Information"
        headStyle={cardHeaderStyle}
        className="w-[600px]"
      >
        <Space className="flex justify-between my-2">
          <Text className="font-medium">First Name</Text>
          <Input className="w-[450px]" />
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Text className="font-medium">Last Name</Text>
          <Input className="w-[450px]" />
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Text className="font-medium">Email</Text>
          <Input className="w-[450px]" />
        </Space>
        <Divider />

        {personalItems.map((item: any, index: any) => (
          <div key={index}>
            <Space className="flex justify-between my-2">
              <Space className="w-[200px]">
                <Text className="font-medium">{item.title}</Text>
              </Space>
              <Checkbox onChange={() => {}}>Internal</Checkbox>
              <Space>
                <Switch defaultChecked={item.hidden} onChange={() => {}} />
                <Text className="font-light">Hide</Text>
              </Space>
            </Space>
            <Divider />
          </div>
        ))}

        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
            onClick={() => {
              showModal();
              setCurrentGroup(QuestionGroups.Personal);
            }}
          >
            Add a question
          </Button>
        </Space>
      </Card>

      <Card title="Profile" headStyle={cardHeaderStyle} className="w-[600px]">
        {profileItems.map((item: any, index: any) => (
          <div key={index}>
            <Space className="flex justify-between my-2">
              <Space className="w-[200px]">
                <Text className="font-medium">{item.title}</Text>
              </Space>

              <Checkbox onChange={() => {}} checked={item.mandatory}>
                Mandatory
              </Checkbox>
              <Space>
                <Switch
                  defaultChecked={item.hidden}
                  onChange={() => {
                    // Handle switch state change
                  }}
                />
                <Text className="font-light">Hide</Text>
              </Space>
            </Space>
            <Divider />
          </div>
        ))}
        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
            onClick={() => {
              showModal();
              setCurrentGroup(QuestionGroups.Profile);
            }}
          >
            Add a question
          </Button>
        </Space>
      </Card>

      <Card
        title="Additional questions"
        headStyle={cardHeaderStyle}
        className="w-[600px]"
      >
        {additionalQuestions.map((item: any, index: any) => (
          <div key={index}>
            <Space
              direction="vertical"
              className="flex justify-between relative w-[100%] items-start my-2"
            >
              <Space className="w-[200px]">
                <Text className="font-medium text-slate-400 text-[10px]">
                  Education
                </Text>
              </Space>
              <Space className="flex justify-between w-[100%] items-start">
                <Text className="font-medium">{item.question}</Text>
              </Space>
              <Button
                type="text"
                className="items-center justify-center absolute right-0 top-0 font-medium flex text-blue-500"
                icon={<Icon icon="fluent:edit-16-regular" />}
              />
            </Space>
            {index < additionalQuestions.length - 1 && <Divider />}
          </div>
        ))}

        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
            onClick={() => {
              showModal();
              setCurrentGroup(QuestionGroups.Additional);
            }}
          >
            Add a question
          </Button>
        </Space>
      </Card>
      <Button type="primary" onClick={handleUpdateForm} className="bg-blue-500">
        Save Application Form
      </Button>
    </Space>
  );
};

export default ApplicationForm;
