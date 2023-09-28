import {
  Button,
  Card,
  Checkbox,
  Divider,
  Input,
  Space,
  Switch,
  Typography
} from 'antd';
import React, { useState } from 'react';
import FileInput from '../../../shared/UploadFile';
import { Icon } from '@iconify/react';
import axios from 'axios';

const cardHeaderStyle = {
  background: '#DAE9FD',
  color: 'black'
};

const { Text } = Typography;
const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    coverImage: '',
    personalInformation: {
      firstName: '',
      lastName: '',
      email: ''
    }
  });

  const handleUpdateForm = async () => {
    try {
      await axios.put(
        'http://127.0.0.1:3100/api/1.0/programs/programId/application-form',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Application form updated successfully!');
    } catch (error) {
      console.error('Error updating application form:', error);
    }
  };
  return (
    <>
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
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Phone(without dialcode)</Text>
          </Space>
          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Nationality</Text>
          </Space>

          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Current Residence</Text>
          </Space>

          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Id Number</Text>
          </Space>
          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>

        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Date of Birth</Text>
          </Space>
          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Gender</Text>
          </Space>
          <Checkbox onChange={() => {}}>Internal</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>

        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
          >
            Add a question
          </Button>
        </Space>
      </Card>

      <Card title="Profile" headStyle={cardHeaderStyle} className="w-[600px]">
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Education</Text>
          </Space>

          <Checkbox onChange={() => {}}>Mandatory</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Experience</Text>
          </Space>

          <Checkbox onChange={() => {}}>Mandatory</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>
        <Divider />
        <Space className="flex justify-between my-2">
          <Space className="w-[200px]">
            <Text className="font-medium">Resume</Text>
          </Space>
          <Checkbox onChange={() => {}}>Mandatory</Checkbox>
          <Space>
            <Switch defaultChecked onChange={() => {}} />
            <Text className="font-light">Hide</Text>
          </Space>
        </Space>

        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
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
            <Text className="font-medium">
              Have you ever been rejected by the UK embassy?
            </Text>
          </Space>{' '}
          <Button
            type="text"
            className="items-center justify-center absolute right-0 top-0 font-medium flex text-blue-500"
            icon={<Icon icon="fluent:edit-16-regular" />}
          />
        </Space>
        <Divider />
        <Space
          direction="vertical"
          className="flex justify-between relative w-[100%] items-start my-2"
        >
          <Space className="w-[200px]">
            <Text className="font-medium text-slate-400 text-[10px]">
              Yes/No questions
            </Text>
          </Space>
          <Space className="flex justify-between w-[100%] items-start">
            <Text className="font-medium">
              Have you ever been rejected by the UK embassy?
            </Text>
          </Space>{' '}
          <Button
            type="text"
            className="items-center justify-center absolute right-0 top-0 font-medium flex text-blue-500"
            icon={<Icon icon="fluent:edit-16-regular" />}
          />
        </Space>

        <Space className="flex justify-between mt-[40px]">
          <Button
            type="text"
            className="items-center font-medium flex text-blue-500"
            icon={<Icon icon="ic:baseline-plus" />}
          >
            Add a question
          </Button>
        </Space>
      </Card>
    </>
  );
};

export default ApplicationForm;
