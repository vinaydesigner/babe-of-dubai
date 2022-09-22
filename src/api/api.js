import axios from "axios"



// this API for contact us page form start here //


export const contactForm = async (data) => {
    return axios
        .post(`https://dev.havingado.net/babesofdubai/api/v1/contact-us-form`, data)
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



export const ContactusText = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/contactus")
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

// const contactForm = (data) => {
//     return axios.post(`https://dev.havingado.net/babesofdubai/api/v1/contact-us-form`, data)
//         .then((response) => {
//             if (response.status === 200 || response.status === 201) {
//                 return response.data;
//             }

//         }).catch((error) => {
//             console.log(error);
//         })
// }
// export default contactForm

// close here //


