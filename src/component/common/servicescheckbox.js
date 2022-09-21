import React from 'react'
// import { useFormik } from "formik";
// import { Fillterpostdataapi } from '../../api/homepageapi';


const Servicescheckbox = ({ fillter }) => {

    return (
        <>
            {fillter?.services?.map((item) => {
                return (
                    <>
                        <div key={item}>
                            <label><input type="checkbox"></input> {item.service_name} </label>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Servicescheckbox