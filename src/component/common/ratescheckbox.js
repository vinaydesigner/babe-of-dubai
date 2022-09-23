import React, { useState } from "react";
import { useFormik } from "formik";
import { Fillterpostdataapi } from "../../api/homepageapi";

const Ratescheckbox = ({
    fillter,
    servicesss,
    hairColorr,
    locationn,
    ratess,
    ratesResponse,
}) => {
    const [rateCheck, setRateCheck] = useState([]);
    // console.log("filterere", fillter);

    const handleChange = async (item) => {
        console.log(item);
        if (rateCheck.length == 0) {
            rateCheck.push(item.range);
            setRateCheck(rateCheck);
            ratess(rateCheck);
        } else {
            console.log("service", rateCheck);
            var a = rateCheck.findIndex((key) => Number(key) == Number(item.id));
            // console.log("a is", a);
            if (a == -1) {
                rateCheck.push(item.range);
                setRateCheck(rateCheck);
                ratess(rateCheck);
            } else {
                hairCheck.splice(a, 1);
                setRateCheck(rateCheck);
                ratess(rateCheck);
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

        if (servicesss.length == 0) {
            data.append(`service[]`, "");
        } else {
            console.log(servicesss);
            servicesss.map((item, index) => {
                data.append(`service[${index}]`, item);
            });
        }

        if (rateCheck.length == 0) {
            data.append(`rate`, "");
        } else {
            rateCheck.map((item, index) => {
                data.append(`rate`, item);
            });
        }

        const response = await Fillterpostdataapi(data);
        // console.log(response);
        ratesResponse(response);
    };

    return (
        <>
            {fillter?.rates?.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="rate"
                                    onChange={() => handleChange(item)}
                                ></input>{" "}
                                {item.rates}
                            </label>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Ratescheckbox;