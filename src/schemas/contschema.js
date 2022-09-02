import * as Yup from "Yup";
// this validaiton for contact us page form start here //
export const contacSchemas = Yup.object({
    first_name: Yup.string().min(3).max(30).required("Use your full name"),
    email: Yup.string().email().required("Enter your email address"),
    contact_no: Yup.string().min(10).max(15).required("Use your 10 digit number if you outside the UK use country code")

})