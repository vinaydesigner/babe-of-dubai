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
        data.append("hair_color[]", hairCheck);
        data.append("service[]", servicesss);

        data.append("location[]", locationn);
        data.append("rate", ratess);
        const response = await Fillterpostdataapi(data);
        console.log(response);
        HairColorResponse(response);
    };

    return (
        <>
            {fillter?.hair_color?.map((item) => {
                console.log("item", item);
                return (
                    <>
                        <div key={item.id}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="hair_color[]"
                                    //   value={values.hair_color}
                                    onChange={() => handleChange(item)}
                                ></input>
                                {item.hair_color}
                            </label>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Haircolorcheckbox;