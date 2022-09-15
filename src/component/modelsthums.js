import React from "react";
import Image from "next/image"
import styles from '../../styles/Home.module.css';
import Link from "next/link";



const Modelsthums = ({ modeldata }) => {
    console.log(modeldata)


    return (
        <>
            {modeldata.map((curElemt) => {
                return (
                    <>

                        <div className={styles.thumouterbox} key={curElemt.id}>
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
                                <span>AUD <strong> {curElemt.halfHrInCallRate} </strong> <strong> {curElemt.halfHrOutCallRate} </strong> </span >
                            </div>

                        </div>

                    </>
                )

            })}

        </>
    )
}

export default Modelsthums

