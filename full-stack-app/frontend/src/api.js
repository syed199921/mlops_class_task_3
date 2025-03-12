import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getCustomerByFullName = async (fullName) => {
  try {
    const response = await axios.get(`${API_URL}/get_customer`, {
      data: { fullName }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching customer:', error);
    throw error;
  }
};