import axios from "axios";

export const bookingForm = async (data) => {
  return axios
    .post(`https://dev.havingado.net/babesofdubai/api/v1/booking-form`, data)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const BookingSelect = async (data) => {
  return axios
    .get("https://dev.havingado.net/babesofdubai/api/v1/escort-list")
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.data;
      }
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
