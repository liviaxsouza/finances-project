import styles from "./dashcard.module.css"

const DashCard = ( {title, value, color} ) => {
    return (
        <div className={styles.card} style={{ backgroundColor: color }}>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardValue}>R$ {value}</p>
        </div>
    )
}

export default DashCard;