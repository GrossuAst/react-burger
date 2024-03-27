import styles from './completed-order.module.css';
import diamond from '../../images/diamond36x36.svg';

const CompletedOrder = () => {
    return (
        <article className={`${styles.card} p-5 mr-2`}>
            <div className={styles.mainInfo}>
                <h3 className={styles.orderNumber}>#034535</h3>
                <p className={`text text_type_main-default text_color_inactive`}>Сегодня, 16:20</p>   
            </div>
            <h3 className={`text text_type_main-medium mt-5`}>
                Death Star Starship Main бургер
            </h3>
            <div className={`${styles.ingredientsContainer} mt-5`}>
                <ul className={styles.ingredients}>
                    <li className={styles.listItem} style={{zIndex:10}}>
                        <img src='https://code.s3.yandex.net/react/code/bun-01.png' className={styles.ingredientImage} />
                    </li>
                    <li className={styles.listItem} style={{zIndex:9}}>
                        <img src='https://code.s3.yandex.net/react/code/meat-01.png' className={styles.ingredientImage} />
                    </li>
                    <li className={styles.listItem} style={{zIndex:8}}>
                        <img src='https://code.s3.yandex.net/react/code/sauce-01.png' className={styles.ingredientImage} />
                    </li>
                    <li className={styles.listItem} style={{zIndex:7}}>
                        <img src='https://code.s3.yandex.net/react/code/sauce-04.png' className={styles.ingredientImage} />
                    </li>
                    <li className={styles.listItem} style={{zIndex:6}}>
                        <img src='https://code.s3.yandex.net/react/code/meat-01.png' className={styles.ingredientImage} />
                    </li>
                    <li className={`${styles.listItem} text text_type_main-default`} style={{zIndex:5}}>
                        <img src='https://code.s3.yandex.net/react/code/meat-01.png' className={styles.ingredientImage} />
                    </li>
                </ul>
                <div className={styles.price}>
                    <p className={styles.priceNumber}>
                        480
                    </p>
                    <img src={diamond} className={`${styles.diamond} ml-2`} />
                </div>
            </div>
        </article>
    )
};

export default CompletedOrder;