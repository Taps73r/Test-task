import { Dispatch, SetStateAction } from 'react';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface IDashBoardProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const DashBoard: React.FC<IDashBoardProps> = ({
  setIsSidebarVisible,
}) => {
  return (
    <div>
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <h1>Dashboard Page</h1>
    </div>
  );
};
