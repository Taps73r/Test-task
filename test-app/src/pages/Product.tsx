import { Dispatch, SetStateAction } from 'react';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface IProductProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const Product: React.FC<IProductProps> = ({ setIsSidebarVisible }) => {
  return (
    <div>
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <h1>Product Page</h1>
    </div>
  );
};
