import *as Yup from 'yup'

// this validaiton for booking page form start here //
export const bookingSchemas = Yup.object({
    full_name: Yup.string().min(3).max(30).required("Use your full name"),
    email: Yup.string().required("Enter your email address"),
    contact_no: Yup.string().min(10).max(15).required("Use your 10 digit number if you outside the UK use country code"),
    // booking_date: Yup.string().min(3).max(30).required("Use YY-MM-DD"),
    // booking_time: Yup.string().min(3).max(30).required("Use your full name"),
    // booking_duration: Yup.string().min(3).max(30).required("Use your full name"),

})