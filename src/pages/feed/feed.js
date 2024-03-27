import styles from './feed.module.css';
import CompletedOrder from '../../components/completed-order/completed-order';
import OrdersHistory from '../../components/orders-history/orders-history';
import { useLocation, Outlet } from 'react-router-dom';

const Feed = () => {
    const location = useLocation();
    const isFeedPage = location.pathname === '/feed';
    const isFeedOrderPage = location.pathname === '/feed/:number';

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Лента заказов</h1>
            <section className={styles.sections}>
                <section>
                    <ul className={`custom-scroll ${styles.list}`}>
                        <li className={styles.listItem}>
                            <CompletedOrder />
                        </li>
                        <li className={styles.listItem}>
                            <CompletedOrder />
                        </li>
                        <li className={styles.listItem}>
                            <CompletedOrder />
                        </li>
                        <li className={styles.listItem}>
                            <CompletedOrder />
                        </li>
                        <li className={styles.listItem}>
                            <CompletedOrder />
                        </li>
                    </ul>    
                </section>
                <OrdersHistory />  
            </section>
            <Outlet />
        </main>
    )
};

export default Feed;