import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
import { Fillterpostdataapi } from "../../api/homepageapi";

const Servicescheckbox = ({
    fillter,
    servicesss,
    hairColorr,
    locationn,
    ratess,
    serviceResponse,
}) => {
    const [serviceCheck, setServiceCheck] = useState([]);

    console.log("filterere", fillter);

    const handleChange = async (item) => {
        console.log(item);
        if (serviceCheck.length == 0) {
            serviceCheck.push(item.id);
            setServiceCheck(serviceCheck);
            servicesss(serviceCheck);
        } else {
            console.log("service", serviceCheck);
            var a = serviceCheck.findIndex((key) => Number(key) == Number(item.id));
            console.log("a is", a);
            if (a == -1) {
                serviceCheck.push(item.id);
                setServiceCheck(serviceCheck);
                servicesss(serviceCheck);
            } else {
                serviceCheck.splice(a, 1);
                setServiceCheck(serviceCheck);
                servicesss(serviceCheck);
            }
        }

        var data = new FormData();

        if (locationn.length == 0) {
            data.append(`location[]`, "");
        } else {
            locationn.map((item, index) => {
                data.append(`location[${index}]`, item);
            });
        }

        if (hairColorr.length == 0) {
            data.append(`hair_color[]`, "");
        } else {
            hairColorr.map((item, index) => {
                data.append(`hair_color[${index}]`, item);
            });
        }

        if (serviceCheck.length == 0) {
            data.append(`service[]`, "");
        } else {
            // console.log(servicesss);
            serviceCheck.map((item, index) => {
                data.append(`service[${index}]`, item);
            });
        }

        if (ratess.length == 0) {
            data.append(`rate[]`, "");
        } else {
            ratess.map((item, index) => {
                data.append(`rate[${index}]`, item);
            });
        }

        const response = await Fillterpostdataapi(data);
        // console.log(response);
        serviceResponse(response);
    };

    return (
        <>
            {fillter?.services?.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <label>
                                <input
                                    onChange={() => handleChange(item)}
                                    type="checkbox"
                                ></input>{" "}
                                {item.service_name}
                            </label>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Servicescheckbox;