import { useState } from 'react';
import { Drawer, Empty, Space, Typography } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';

import { useCandidate } from '../../hooks/CandidateContext';

import Input from '../../shared/Input';
import MainLayout from '../../layout/MainLayout';
import UserTable from './components/UserTable';
import CandidateProgramApplicationCard from './components/CandidateProgramApplicationCard';
import Container from './components/Container';
import ApplicationStage from './components/ApplicationStage';
import { candidates } from '../../shared/data/candidates';
import ProgramApplicationCTA from './components/ProgramApplicationCTA';

const SearchWithFilter = ({
  value,
  setValue
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex gap-4 items-center">
      <Input
        placeholder="Search by name, edu, exp or #tag"
        prefixIcon={<SearchOutlined className="text-[20px] text-slate-400" />}
        title="Extra information"
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <Space
        onClick={showDrawer}
        className="bg-white border-0 cursor-pointer h-[100%] w-[10%] items-center justify-center p-2.5 rounded-md shadow-primary"
      >
        <FilterOutlined className="text-slate-500 text-[20px]" />
      </Space>

      <Drawer
        title="Applicant Filter"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Typography.Paragraph>Filter Property 01</Typography.Paragraph>
        <Typography.Paragraph>Filter Property 02</Typography.Paragraph>
      </Drawer>
    </div>
  );
};

const Home = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCandidates = candidates.filter((candidate) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const nameMatches = candidate.name
      .toLowerCase()
      .includes(lowerCaseSearchTerm);
    const programMatches = candidate.program
      .toLowerCase()
      .includes(lowerCaseSearchTerm);

    const locationMatches = candidate.location
      .toLowerCase()
      .includes(lowerCaseSearchTerm);

    const locationsMatches = candidate.locations.some((location) =>
      location.toLowerCase().includes(lowerCaseSearchTerm)
    );
    const tagMatches = candidate.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseSearchTerm)
    );

    return (
      nameMatches ||
      programMatches ||
      locationMatches ||
      locationsMatches ||
      tagMatches
    );
  });

  const { candidate, setCandidate } = useCandidate();

  return (
    <MainLayout>
      <Space
        className={styles.wrapper}
        style={{ width: `calc(100vw - 140px)` }}
      >
        <Space direction="vertical" className="w-[100%] relative">
          <ApplicationStage />
          <SearchWithFilter setValue={setSearchTerm} value={searchTerm} />
          <UserTable candidates={filteredCandidates} />
        </Space>
        <Space direction="vertical" className="w-[100%]">
          {candidate ? (
            <Space direction="vertical" style={{ flex: 1 }}>
              <CandidateProgramApplicationCard />
              <Container />
            </Space>
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <Typography.Paragraph className="w-[50%] mx-auto text-slate-400 text-center">
                  No candidate is selected yet. Click on a candidate from the
                  list on the left to view their information.
                </Typography.Paragraph>
              }
            />
          )}
        </Space>
        <ProgramApplicationCTA />
      </Space>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'ml-[100px]  items-start gap-6 mx-auto my-[30px]'
};

export default Home;
