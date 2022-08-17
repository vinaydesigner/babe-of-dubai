import Image from "next/image"
import styles from '../../styles/Home.module.css';

const Modelsthums = () => {
  return (
    <>
    <div className={styles.heading_shorby}>Shor by</div>
    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="joy" layout="responsive" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} /></span>
            <span><Image src="/images/video.svg" width={20} height={20} /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="sunny" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="lora" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="bib" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="nora" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="saya" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="maya" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>

    <div className={styles.thumouterbox}>
        <div className={styles.picbox}>
            <Image src="/images/models_thumbnails/demopic.jpg" width={270} height={380} alt="pitna" />
        </div>
        <div className={styles.modelsname}>
            Model Name
            <span><Image src="/images/selfie.svg" width={20} height={20} alt="selfie icon" /></span>
            <span><Image src="/images/video.svg" width={20} height={20} alt="video icon" /></span>
        </div>
        <div className={styles.modelslocation}>
            <span>Location</span>
            <span>AUD 200/300</span>
        </div>
    </div>
    </>
  )
}

export default Modelsthums