import { Divider as AntdDivider } from 'antd';

interface dividerProps {
  type?: 'vertical' | 'horizontal';
}
const Divider = ({ type }: dividerProps) => {
  return (
    <AntdDivider
      type={type ? type : 'vertical'}
      className="w-[1px] h-[16px] bg-slate-100"
    />
  );
};

export default Divider;
