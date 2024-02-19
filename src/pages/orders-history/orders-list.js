import styles from './orders-list.module.css';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation';

function OrdersList() {
    return (
        <section className={ `${styles.section} pt-30` }>
            <ProfileNavigation />
        </section>
    )
};

export default OrdersList;