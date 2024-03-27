import styles from './orders-history.module.css';

const OrdersHistory = () => {
    return (
        <section>
            <div className={`${styles.inProgress} mt-6`}>
                <div>
                    <h2 className={`${styles.title} mb-6`}>Готовы:</h2>
                    <ul className={styles.list}>
                        <li >
                            <p className={`${styles.listItem} ${styles.done} text text_type_digits-default`}>
                                034533
                            </p>
                        </li>
                        <li >
                            <p className={`${styles.listItem} ${styles.done} text text_type_digits-default`}>
                                034533
                            </p>
                        </li>
                        <li >
                            <p className={`${styles.listItem} ${styles.done} text text_type_digits-default`}>
                                034533
                            </p>
                        </li>
                        <li >
                            <p className={`${styles.listItem} ${styles.done} text text_type_digits-default`}>
                                034533
                            </p>
                        </li>
                        <li >
                            <p className={`${styles.listItem} ${styles.done} text text_type_digits-default`}>
                                034533
                            </p>
                        </li>
                    </ul>
                </div>
                <div className='ml-9'>
                    <h2 className={`${styles.title} mb-6`}>В работе:</h2>
                    <ul className={styles.list}>
                        <li>
                            <p className={`${styles.listItem} text text_type_digits-default`}>
                                034538
                            </p>
                        </li>
                        <li>
                            <p className={`${styles.listItem} text text_type_digits-default`}>
                                034538
                            </p>
                        </li>
                        <li>
                            <p className={`${styles.listItem} text text_type_digits-default`}>
                                034538
                            </p>
                        </li>
                    </ul>
                </div>    
            </div>
            <div>
                <h2 className={`${styles.numberTitle} mt-15 text_type_main-medium`}>
                    Выполнено за все время:
                </h2>
                <p className="text text_type_digits-large">
                    28 752
                </p>
            </div>
            <div>
                <h2 className={`${styles.numberTitle} mt-15 text_type_main-medium`}>
                    Выполнено за сегодня:
                </h2>
                <p className="text text_type_digits-large">
                    138
                </p>
            </div>
        </section>
    )
};

export default OrdersHistory;