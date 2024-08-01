import React, { useState, useEffect } from 'react';
import { customers } from '../../constants/customersData';
import './CustomersList.scss';

const CustomersList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState(customers);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  useEffect(() => {
    let filteredData = customers;

    if (searchTerm) {
      filteredData = filteredData.filter((customer) =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter) {
      filteredData = filteredData.filter(
        (customer) => customer.status === statusFilter
      );
    }

    setFilteredCustomers(filteredData);
    setCurrentPage(1);
  }, [searchTerm, statusFilter]);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const renderPagination = () => {
    const paginationButtons = [];

    paginationButtons.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={currentPage === 1 ? 'active' : ''}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      paginationButtons.push(
        <span key="start-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    let startPage = Math.max(2, currentPage - 1);
    let endPage = Math.min(totalPages - 1, currentPage + 1);

    if (currentPage <= 3) {
      startPage = 2;
      endPage = 4;
    }

    if (currentPage >= totalPages - 2) {
      startPage = totalPages - 3;
      endPage = totalPages - 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={currentPage === i ? 'active' : ''}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      paginationButtons.push(
        <span key="end-ellipsis" className="ellipsis">
          ...
        </span>
      );
    }

    paginationButtons.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={currentPage === totalPages ? 'active' : ''}
      >
        {totalPages}
      </button>
    );

    return (
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {paginationButtons}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };

  return (
    <div className="customers-list">
      <header className="customers-list__header">
        <div className="customers-list__header__flex">
          <h1>All Customers</h1>
          <button
            className={`filter-button ${
              statusFilter === 'Active' ? 'active' : ''
            }`}
            onClick={() =>
              setStatusFilter(statusFilter === 'Active' ? '' : 'Active')
            }
          >
            Active Members
          </button>
        </div>
        <div className="customers-list__controls">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>
      <table className="customers-list__table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCustomers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>
                <p className={`status ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer className="customers-list__footer">
        <span>
          Showing data {currentPage * itemsPerPage - itemsPerPage + 1} to{' '}
          {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} of{' '}
          {filteredCustomers.length} entries
        </span>
        {renderPagination()}
      </footer>
    </div>
  );
};

export default CustomersList;
