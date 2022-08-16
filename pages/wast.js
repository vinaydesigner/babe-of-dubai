import styles from '../styles/Home.module.css';
import {Button} from "react-bootstrap";
import {useState} from "react";


const aboutus = () => {
  
  const [data,setData]=useState("vinay")
  function nameupdteData ()
  {
    setData("Kartik")
  }
  return (
    <>
    <div>{data}</div>
    <button onClick={nameupdteData}>nameupdate</button>
    </>
  )
}


export default aboutus