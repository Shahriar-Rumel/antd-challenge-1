import { Menu as AntdMenu, Avatar, Space } from 'antd';
import {
  TeamOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  HomeOutlined,
  FileTextOutlined,
  LayoutOutlined,
  HeartOutlined,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Icon } from '@iconify/react';

const Menu = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  const menuItems = [
    {
      key: '1',
      icon: <Icon icon="fluent:home-16-regular" style={{ fontSize: '24px' }} />
    },
    {
      key: '2',
      icon: <Icon icon="ci:users-group" style={{ fontSize: '24px' }} />
    },
    {
      key: '3',
      icon: <Icon icon="ph:calendar-check" style={{ fontSize: '24px' }} />
    },
    {
      key: '4',
      icon: <Icon icon="carbon:share" style={{ fontSize: '24px' }} />
    },
    {
      key: '5',
      icon: <Icon icon="arcticons:google-docs" style={{ fontSize: '24px' }} />
    },
    {
      key: '6',
      icon: <Icon icon="ph:notebook-thin" style={{ fontSize: '24px' }} />
    },
    {
      key: '7',
      icon: <Icon icon="ph:heart-light" style={{ fontSize: '24px' }} />
    }
  ];
  return (
    <AntdMenu
      defaultSelectedKeys={['4']}
      mode="vertical"
      className="w-[80px] fixed bottom-0 top-0 pt-[60px] z-[999] flex flex-col justify-between"
    >
      {menuItems.map((item) => (
        <AntdMenu.Item
          key={item.key}
          icon={item.icon}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60px',
            marginTop: '5px'
          }}
        />
      ))}
      <AntdMenu.Item
        key={8}
        icon={
          <Icon
            icon="fluent:settings-48-regular"
            style={{ fontSize: '24px' }}
          />
        }
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60px',
          marginTop: '30vh'
        }}
      />
      <Avatar className="bg-blue-200 text-blue-700 mx-auto">AS</Avatar>
    </AntdMenu>
  );
};

export default Menu;
