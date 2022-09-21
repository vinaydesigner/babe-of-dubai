import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Thanukyou = () => {
    return (
        <div className={styles.thankyoupage}>
            <Container>
                <h1>Thanks for booking with us</h1>
                <p>Our team will contact you very soon.</p>
            </Container>
        </div>
    )
}
export default Thanukyou