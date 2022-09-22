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
        data.append("rate", rateCheck);
        data.append("location[]", locationn);
        data.append("hair_color[]", hairColorr);
        data.append("service[]", servicesss);

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