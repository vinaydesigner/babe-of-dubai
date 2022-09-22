import React, { useState } from "react";
import { useFormik } from "formik";
import { Fillterpostdataapi } from "../../api/homepageapi";

const initialValues = {
    location: "",
};

const Locationcheck = ({
    fillter,
    servicesss,
    hairColorr,
    locationn,
    ratess,
    locationResponse,
}) => {
    const [locationCheck, setlocationCheck] = useState([]);
    // console.log("filterere", fillter);

    const handleChange = async (item) => {
        console.log(item);
        if (locationCheck.length == 0) {
            locationCheck.push(item.id);
            setlocationCheck(locationCheck);
            locationn(locationCheck);
        } else {
            console.log("service", locationCheck);
            var a = locationCheck.findIndex((key) => Number(key) == Number(item.id));
            // console.log("a is", a);
            if (a == -1) {
                locationCheck.push(item.id);
                setlocationCheck(locationCheck);
                locationn(locationCheck);
            } else {
                locationCheck.splice(a, 1);
                setlocationCheck(locationCheck);
                locationn(locationCheck);
            }
        }

        var data = new FormData();
        data.append("location[]", locationCheck);
        data.append("hair_color[]", hairColorr);
        data.append("service[]", servicesss);
        data.append("rate", ratess);
        const response = await Fillterpostdataapi(data);
        console.log(response);
        locationResponse(response);
        // console.log(response);
    };

    return (
        <>
            {fillter?.locations?.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label>
                                <input
                                    type="checkbox"
                                    name="location"
                                    onChange={() => handleChange(item)}
                                ></input>
                                {item.location_name}
                            </label>
                        </div>
                    </>
                );
            })}
        </>
    );
};

export default Locationcheck;