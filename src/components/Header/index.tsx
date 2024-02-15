import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <img src='/logo.png' className={styles.logo} />
            <h1>Forecastify</h1>
        </div>
    )
}