import axios from "axios";

export const Duoescortapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/duo-escort")
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



export const Duoescorttextapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/duoescorts")
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