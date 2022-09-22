import Accordion from "react-bootstrap/Accordion";
import Image from "next/image";
import React from "react";
import Locationcheck from "./common/locationcheckbox";
import Servicescheckbox from "./common/servicescheckbox";
import Haircolorcheckbox from "./common/haircolorcheckbox";
import Ratescheckbox from "./common/ratescheckbox";

const Fillter = ({
  fillter,
  locationData,
  hairColorData,
  serviceData,
  ratesData,
}) => {
  console.log(fillter);

  const [status, setStatus] = React.useState(false);
  const [service, setService] = React.useState([]);
  const [haircolor, setHaircolor] = React.useState([]);
  const [ratesCheck, setRatesCheck] = React.useState([]);
  const [locations, setLocations] = React.useState([]);

  const serviceCheck = (event) => {
    // console.log("service", event);
    setService(event);
  };

  const hairColor = (event) => {
    // console.log(event);
    setHaircolor(event);
  };

  const rates = (event) => {
    // console.log(event);
    setRatesCheck(event);
  };

  const location = (event) => {
    // console.log("location", event);
    setLocations(event);
  };

  const locationResponse = (event) => {
    // console.log("event", event);
    locationData(event);
  };

  const HairColorResponse = (event) => {
    // console.log("event", event);
    hairColorData(event);
  };

  const serviceResponse = (event) => {
    // console.log("event", event);
    serviceData(event);
  };

  const ratesResponse = (event) => {
    // console.log("event", event);
    ratesData(event);
  };

  return (
    <>
      <div className="fillterbox">
        <button className="fillter" onClick={() => setStatus(!status)}>
          <Image
            src="/images/filter_icon.png"
            alt="filter"
            width={16}
            height={16}
          />{" "}
          Fillter
        </button>

        <div className={`fillterinner ${status ? "active" : ""}`}>
          <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Services</Accordion.Header>
              <Accordion.Body>
                <Servicescheckbox
                  hairColorr={haircolor}
                  locationn={locations}
                  ratess={ratesCheck}
                  servicesss={serviceCheck}
                  serviceResponse={serviceResponse}
                  fillter={fillter}
                ></Servicescheckbox>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hair Color</Accordion.Header>
              <Accordion.Body>
                <Haircolorcheckbox
                  HairColorResponse={HairColorResponse}
                  hairColorr={hairColor}
                  locationn={locations}
                  ratess={ratesCheck}
                  servicesss={service}
                  fillter={fillter}
                ></Haircolorcheckbox>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Location</Accordion.Header>
              <Accordion.Body>
                <Locationcheck
                  locationResponse={locationResponse}
                  hairColorr={haircolor}
                  locationn={location}
                  ratess={ratesCheck}
                  servicesss={service}
                  fillter={fillter}
                ></Locationcheck>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Rates</Accordion.Header>
              <Accordion.Body>
                <Ratescheckbox
                  ratesResponse={ratesResponse}
                  hairColorr={haircolor}
                  locationn={locations}
                  ratess={rates}
                  servicesss={service}
                  fillter={fillter}
                ></Ratescheckbox>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Fillter;
