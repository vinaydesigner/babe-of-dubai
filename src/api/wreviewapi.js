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




// this API for Review page content show //

export const Reviewtextapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/reviews")
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


// this API show Review page listings //

export const Reviewmodellistapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/review-listing")
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




