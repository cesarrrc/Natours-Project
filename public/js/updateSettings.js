import axios from 'axios';
import { showAlert } from './alert';

// Type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    // console.log('*********THIS IS THE TYPE**********', type);
    const url =
      type === 'password'
        ? '/api/v1/users/update-my-password'
        : '/api/v1/users/update-me';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    // console.log(err);
    showAlert('error', err.response.data.message);
  }
};
