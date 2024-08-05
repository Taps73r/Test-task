import { Dispatch, SetStateAction } from 'react';
import CustomersList from '../components/CustomersList/CustomersList';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

interface ICustomersProps {
  setIsSidebarVisible: Dispatch<SetStateAction<boolean>>;
}

export const Customers: React.FC<ICustomersProps> = ({
  setIsSidebarVisible,
}) => {
  return (
    <main className="customers">
      <HelloHeader setIsSidebarVisible={setIsSidebarVisible} />
      <CustomersList />
    </main>
  );
};
