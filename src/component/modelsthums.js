import React from "react";
import Image from "next/image"
import styles from '../../styles/Home.module.css';
import Link from "next/link";



const Modelsthums = ({ modeldata }) => {
    console.log(modeldata)


    return (
        <>
            {modeldata?.length == 0 ? (
                <p className="searchnotfound">Sorry No Data Found</p>
            ) : (
                modeldata?.map((curElemt) => {
                    return (
                        <>

                            <div key={curElemt.id} className={styles.thumouterbox} >
                                <Link href={`/escorts/${curElemt.slug}`}>
                                    <a>
                                        <div className={styles.picbox}>
                                            <img
                                                src={`https://dev.havingado.net/babesofdubai${curElemt.thumbnail}`}
                                                width={270}
                                                height={400}
                                                alt={curElemt.escort_name}
                                                layout="responsive"
                                            />
                                        </div>
                                    </a>
                                </Link>
                                <div className={styles.modelsname}>
                                    {curElemt.escort_name}
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
                                    <span>{curElemt.location}</span>
                                    <span>AED <strong> {curElemt.oneHrInCallRate} </strong> <strong> {curElemt.oneHrOutCallRate} </strong> </span >
                                </div>

                            </div>

                        </>
                    );
                })
            )}

        </>
    )
}

export default Modelsthums

