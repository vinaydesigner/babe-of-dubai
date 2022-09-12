import axios from "axios"

// this API for Writer a Review page form start here //


export const wreviewapi = async (data) => {
    return axios.post(`https://dev.havingado.net/babesofdubai/api/v1/review-form`, data)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }

        }).catch((error) => {
            console.log(error);
        })
}



// close here //




// export const reviewimageapi = async () => {
//     return axios
//         .get(`https://dev.havingado.net/babesofdubai/api/v1/header-menu`)
//         .then((res) => {
//             return res.data;
//         })
//         .catch((error) => {
//             console.log("error", error);
//         });
// };

