import { Space } from 'antd';

import MainLayout from '../../layout/MainLayout';

const Home = (props: any) => {
  return (
    <MainLayout>
      <Space
        className={styles.wrapper}
        style={{ width: `calc(100vw - 140px)` }}
      >
        lfsdf
      </Space>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'ml-[100px]  items-start gap-6 mx-auto my-[30px]'
};

export default Home;
