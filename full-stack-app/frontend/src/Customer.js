import React, { useState } from 'react';
import { getCustomerByFullName } from './api';

const Customer = () => {
  const [fullName, setFullName] = useState('');
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getCustomerByFullName(fullName);
      setCustomer(data.customer);
      setError(null);
    } catch (err) {
      setError('Customer not found');
      setCustomer(null);
    }
  };

  return (
    <div>
      <h1>Search Customer</h1>
      <input
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Enter full name"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {customer && (
        <div>
          <h2>Customer Details</h2>
          <p>Full Name: {customer.fullName}</p>
          <p>Date of Birth: {customer.dateOfBirth}</p>
          <p>Contact Number: {customer.contactNumber}</p>
          <p>Address: {customer.address}</p>
        </div>
      )}
    </div>
  );
};

export default Customer;