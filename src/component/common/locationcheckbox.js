import React, { useState } from 'react'
import { useFormik } from "formik";


const initialValues = {
    location: "",
}

const Locationcheck = ({ fillter }) => {
    // console.log(fillter);


    const { values, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            var data = new FormData();
            data.append("location", values.location);
            const response = Fillterpostdataapi(data);
            console.log(response);
        }

    });
    console.log(values);


    return (
        <>
            {fillter.locations.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label><input type="checkbox" name="location"
                                value={values.location}
                                onChange={handleChange}
                                onBlur={handleBlur}></input> {item.location_name}</label>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Locationcheck