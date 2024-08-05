import { Dispatch, SetStateAction } from 'react';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface IIncomeProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const Income: React.FC<IIncomeProps> = ({ setIsSidebarVisible }) => {
  return (
    <div>
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <h1>Income Page</h1>
    </div>
  );
};
