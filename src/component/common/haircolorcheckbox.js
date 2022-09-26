import { useFormik } from "formik";
import React, { useState } from "react";
import { Fillterpostdataapi } from "../../api/homepageapi";

const initialValues = {
    hair_color: "",
};

const Haircolorcheckbox = ({
    fillter,
    servicesss,
    hairColorr,
    locationn,
    ratess,
    HairColorResponse,
}) => {
    const [hairCheck, sethairCheck] = useState([]);
    // console.log("filterere", fillter);

    const handleChange = async (item) => {
        console.log(item);
        if (hairCheck.length == 0) {
            hairCheck.push(item.id);
            sethairCheck(hairCheck);
            hairColorr(hairCheck);
        } else {
            console.log("service", hairCheck);
            var a = hairCheck.findIndex((key) => Number(key) == Number(item.id));
            // console.log("a is", a);
            if (a == -1) {
                hairCheck.push(item.id);
                sethairCheck(hairCheck);
                hairColorr(hairCheck);
            } else {
                hairCheck.splice(a, 1);
                sethairCheck(hairCheck);
                hairColorr(hairCheck);
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

        if (hairCheck.length == 0) {
            data.append(`hair_color[]`, "");
        } else {
            hairCheck.map((item, index) => {
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

        if (ratess.length == 0) {
            data.append(`rate[]`, "");
        } else {
            ratess.map((item, index) => {
                data.append(`rate[${index}]`, item);
            });
        }
        const response = await Fillterpostdataapi(data);
        console.log(response);
        HairColorResponse(response);
    };

    return (
        <>
            {fillter?.hair_color?.map((item) => {
                // console.log("item", item);
                return (
                    <>
                        <div key={item.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="hair_color[]"
                                    //   value={values.hair_color}
                                    onChange={() => handleChange(item)}
                                ></input> {item.hair_color}
                            </label>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Haircolorcheckbox;