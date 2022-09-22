import React, { useEffect, useState } from "react";
// import { useFormik } from "formik";
import { Fillterpostdataapi } from "../../api/homepageapi";

const Servicescheckbox = ({
  fillter,
  servicesss,
  hairColorr,
  locationn,
  ratess,
  serviceResponse,
}) => {
  const [serviceCheck, setServiceCheck] = useState([]);

  console.log("filterere", fillter);

  const handleChange = async (item) => {
    console.log(item);
    if (serviceCheck.length == 0) {
      serviceCheck.push(item.id);
      setServiceCheck(serviceCheck);
      servicesss(serviceCheck);
    } else {
      console.log("service", serviceCheck);
      var a = serviceCheck.findIndex((key) => Number(key) == Number(item.id));
      console.log("a is", a);
      if (a == -1) {
        serviceCheck.push(item.id);
        setServiceCheck(serviceCheck);
        servicesss(serviceCheck);
      } else {
        serviceCheck.splice(a, 1);
        setServiceCheck(serviceCheck);
        servicesss(serviceCheck);
      }
    }

    var data = new FormData();
    data.append("service[]", serviceCheck);
    data.append("hair_color[]", hairColorr);
    data.append("location[]", locationn);
    data.append("rate", ratess);
    const response = await Fillterpostdataapi(data);
    // console.log(response);
    serviceResponse(response);
  };

  return (
    <>
      {fillter?.services?.map((item) => {
        return (
          <>
            <div key={item.id}>
              <label>
                <input
                  onChange={() => handleChange(item)}
                  type="checkbox"
                ></input>{" "}
                {item.service_name}
              </label>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Servicescheckbox;
