import axios from "axios";

export const HomepageData = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/page-data/home")
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


export const HModeldata = async (data) => {
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

export const Fillterdataapi = async (data) => {
    return axios
        .get("https://dev.havingado.net/babesofdubai/api/v1/filteration-data")
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

export const Fillterpostdataapi = async (data) => {
    return axios
        .post(`https://dev.havingado.net/babesofdubai/api/v1/filter-escorts`, data)
        .then((response) => {
            if (response.status === 200 || response.status === 201) {
                return response.data;
            }
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
};
