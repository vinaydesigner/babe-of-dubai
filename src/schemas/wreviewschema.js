import *as Yup from 'yup'

export const wreviewschema = Yup.object({

    reviewer_name: Yup.string().min(3).max(30).required("Use your full name"),
    email: Yup.string().required("Enter your email address"),
    contact_no: Yup.string().required("enter"),
    date_of_visit: Yup.string().required("Select date"),
    type_of_visit: Yup.string().required("Seclect type"),
    duration: Yup.string().required("Select duration"),
    looks: Yup.string().required("Select looks"),
    performance: Yup.string().required("Select performance"),
    comment: Yup.string().required("Enter your comments"),
    status: Yup.string().required("Enter your email address"),


})

