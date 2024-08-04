import { Dispatch, SetStateAction } from 'react';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface IPromoteProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const Promote: React.FC<IPromoteProps> = ({ setIsSidebarVisible }) => {
  return (
    <div>
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <h1>Promote Page</h1>
    </div>
  );
};
