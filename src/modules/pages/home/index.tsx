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

import MainLayout from '../../layout/MainLayout';

import FileInput from '../../shared/UploadFile';
import { Icon } from '@iconify/react';
import ApplicationForm from './components/ApplicationForm';

const { Text } = Typography;

const Home = (props: any) => {
  return (
    <MainLayout>
      <Space
        className={styles.wrapper}
        direction="vertical"
        style={{ width: `calc(100vw - 140px)` }}
      >
        <Typography.Title className="text-center tracking-tight">
          Application Form
        </Typography.Title>
        <ApplicationForm />
        {/* <Card
          title="Upload cover image"
          headStyle={cardHeaderStyle}
          className="w-[600px]"
        >
          <FileInput
            accept=".jpg, .png, .pdf" // Specify the accepted file types
            fileInfo="16:9 ratio is recommended. Max image size 1mb" // Provide additional information about file requirements
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
        </Card> */}
      </Space>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'ml-[100px] justify-center  items-center gap-6 mx-auto my-[30px]'
};

export default Home;
