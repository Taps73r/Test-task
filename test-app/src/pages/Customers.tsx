import CustomersList from '../components/CustomersList/CustomersList';
import { HelloHeader } from '../components/HelloHeader/HelloHeader';

export const Customers: React.FC = () => {
  return (
    <main className="customers">
      <HelloHeader />
      <CustomersList />
    </main>
  );
};
