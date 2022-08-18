import React from "react";
import Image from "next/image"
import styles from '../../styles/Home.module.css';
import Link from "next/link";



const Modelsthums = (props) => {

    const Modeldata = [
        {
            mpic: "/images/models_thumbnails/pic1.jpg", 
            modelname: "Aurora",
            placenname: "King Road",
            mprice: "250 / 300",
               
        },
    
        {
            mpic: "/images/models_thumbnails/pic2.jpg", 
            modelname: "Seirra",
            placenname: "Earls Court",
            mprice: "350 / 500",
               
        },
    
        {
            mpic: "/images/models_thumbnails/pic3.jpg",
            modelname: "Parker",
            placenname: "Paddington",
            mprice: "250 / 300",
                
        },
    
        {   
            mpic: "/images/models_thumbnails/pic4.jpg", 
            modelname: "Janey",
            placenname: "Bayswater",
            mprice: "400 / 300",
        },
    
        {
            mpic: "/images/models_thumbnails/pic1.jpg",
            modelname: "Jordyn",
            placenname: "Gloucester Road",
            mprice: "150 / 300",
                
        },
    
        {
            mpic: "/images/models_thumbnails/pic2.jpg",
            modelname: "Sacha",
            placenname: "Marylebone",
            mprice: "250 / 300",
               
        },
    
    ]


    return (
    <>
    {Modeldata.map((Modeldata, i) => (
        <div className={styles.thumouterbox} key={i}>
        <Link href="">    
        <div className={styles.picbox}>
            <Image 
            src={Modeldata.mpic} 
            width={270} 
            height={400} 
            alt={Modeldata.modelname} 
            layout="responsive" 
            />
        </div>
        </Link>
        <div className={styles.modelsname}>
            {Modeldata.modelname}
            <span>
                <Image 
                    src="/images/selfie.svg" 
                    width={20} 
                    height={20}
                />
            </span>
            <span>
                <Image
                src="/images/video.svg"
                width={20}
                height={20}
                />
            </span>
        </div>
        <div className={styles.modelslocation}>
            <span>{Modeldata.placenname}</span>
            <span>AUD {Modeldata.mprice}</span>
        </div>
        
    </div>
    ))}
    


    </>
  )
}

export default Modelsthums