import axios from "axios";

export const Headermenuaapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/header-menu")
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


export const Footermenuaapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/footer-menu")
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


