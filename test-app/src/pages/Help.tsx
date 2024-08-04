import { Dispatch, SetStateAction } from 'react';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface IHelpProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const Help: React.FC<IHelpProps> = ({ setIsSidebarVisible }) => {
  return (
    <div>
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <h1>Help Page</h1>
    </div>
  );
};
