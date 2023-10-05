'use client'
import styles from "./framecard.module.css"

const FrameCard = ({ title, type, color, list, buttonDelete, buttonEdit, typeButtonDelete, typeButtonEdit }) => {

    console.log("Teste", type);

    return (
        <div className={styles.card} style={{ backgroundColor: color }}>
            <p className={styles.registrosreceitastitle}>{title}</p>
            <div className={styles.registrosreceitaslist}>
                {
                    list.map(transaction => (
                        transaction.type == type  && (
                            <div key={transaction.id} className={styles.registrosreceitasitem}>
                                <p className={styles.registrosreceitasitemvalue}>{transaction.description}</p>
                                <p className={styles.registrosreceitasitemvalue}>R$ {transaction.value}</p>

                                <div className={styles.actions}>
                                    <button className={styles.actionsbutton} onClick={() => {typeButtonDelete}}>
                                        {buttonDelete}
                                    </button>

                                    <button className={styles.actionsbutton} onClick={() => {typeButtonEdit}}>
                                        {buttonEdit}
                                    </button>
                                </div>
                            </div>
                        )
                    ))
                }
            </div>
        </div>
    )
}

export default FrameCard;