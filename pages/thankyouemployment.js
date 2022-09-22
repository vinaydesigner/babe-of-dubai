import React from 'react'
import { Container } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

const Thanukyou = () => {
    return (
        <div className={styles.thankyoupage}>
            <Container>
                <h1>Thanks for the request to join us</h1>
                <p>One of the responsible person will contact you soon withing 24-48 hours.</p>
            </Container>
        </div>
    )
}
export default Thanukyou