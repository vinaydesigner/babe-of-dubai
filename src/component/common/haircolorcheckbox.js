import { useFormik } from 'formik'
import React from 'react'

const initialValues = {
    hair_color: "",
}

const Haircolorcheckbox = ({ fillter }) => {
    const { values, handleBlur, handleChange } = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            var data = new FormData();
            data.append("hair_color", values.hair_color);
            const response = Fillterpostdataapi(data);
            console.log(response);
        }

    })
    console.log(values);

    return (
        <>
            {fillter?.hair_color?.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label><input type="checkbox" name="hair_color" value={values.hair_color}
                                onChange={handleChange}
                                onBlur={handleBlur}></input> {item.hair_color}</label>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Haircolorcheckbox