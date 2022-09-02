import * as Yup from "Yup";

// this validaiton for employment page form start here //
export const employmentSchemas = Yup.object({

    full_name: Yup.string().min(3).max(30).required("Use your full name"),
    email: Yup.string().email().required("Enter your email address"),
    contact_no: Yup.string().min(10).max(15).required("Use your 10 digit number if you outside the UK use country code"),
    location: Yup.string().required('Eenter your leaving location'),
    age: Yup.string().required('Eenter your current age'),
    height: Yup.string().required('Eenter your height in feets'),
    statistics: Yup.string().required('Eenter your statistics'),
    orientation: Yup.string().required('Eenter your orientation'),
    nationality: Yup.string().required('Eenter your nationality'),
    languages: Yup.string().required('Eenter your languages'),
    hourly_rate: Yup.string().required('Eenter your hourly rate'),
    additional_hours: Yup.string().required('Eenter your Additional rate'),
    experience: Yup.string().required('Eenter your total experience'),
    addination_info: Yup.string().required('Eenter your Additional information'),
    file1: Yup.string().required('Upload your latest Picture'),
    file2: Yup.string().required('Upload your latest Picture'),


})