import axios from "axios";

export const Modeldataapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/escort-listing")
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



export const Modeltextdataapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/escorts")
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