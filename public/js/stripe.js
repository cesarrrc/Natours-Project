import axios from 'axios';
import { showAlert } from './alert';

const stripe = Stripe(
  'pk_test_51KkQ20EnChkDDETcvYvuMmyX5SoVo5xU9SX5f28xB8dotsgGdavNcxsDQw9rbOHkTDiffpIym2oLi4UZEUWOhAOf00BZ0rCk4V'
);

export const bookTour = async tourId => {
  // 1) GET checkout session from API
  try {
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );
    // console.log(session);
    // 2) Create checout form + charge credit card
    await stripe.redirectToCheckout({
        sessionId: session.data.session.id
    })
  } catch (err) {
      console.log(err)
      showAlert('error', err)
  }
};
