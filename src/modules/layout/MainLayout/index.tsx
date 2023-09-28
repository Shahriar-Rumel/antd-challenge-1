import { useLocation } from 'react-router-dom';
import Menu from '../../shared/Menu';

const MainLayout = ({ children }: any) => {
  const location = useLocation();
  return (
    <main className="mx-auto">
      <Menu />
      <>{children}</>
    </main>
  );
};

export default MainLayout;
