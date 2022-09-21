import React from 'react'
import { useFormik } from "formik";


const initialValues = {
    rate: "",
};
const Ratescheckbox = ({ fillter }) => {

    const { values, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            var data = new FormData();
            data.append("rate", values.rate);
            const response = Fillterpostdataapi(data);
            console.log(response);
        }

    });
    console.log(values);

    return (
        <>
            {fillter.rates.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label><input type="checkbox" name="rate"
                                value={values.rate}
                                onChange={handleChange}
                                onBlur={handleBlur}></input> {item.rates}</label>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Ratescheckbox