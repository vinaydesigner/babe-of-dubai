import axios from "axios"

// this API for employment page form start here //


export const employmentForm = async (data) => {
    return axios
        .post(`https://dev.havingado.net/babesofdubai/api/v1/employment-form`, data)
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




export const EmploymentText = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/employment")
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


// const employmentForm = (data) => {
//     return axios.post(`https://dev.havingado.net/babesofdubai/api/v1/employment-form`, data)
//         .then((response) => {
//             if (response.status === 200 || response.status === 201) {
//                 return response.data;
//             }

//         }).catch((error) => {
//             console.log(error);
//         })

// }
// export default employmentForm