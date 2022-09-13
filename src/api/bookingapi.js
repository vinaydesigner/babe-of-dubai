import axios from "axios"

export const bookingForm = async (data) => {
    return axios.post(`https://dev.havingado.net/babesofdubai/api/v1/booking-form`, data)
        .then((response) => {
            if (response.status === 20 || response.status === 201) {
                return response.data;
            }
            // console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
};
