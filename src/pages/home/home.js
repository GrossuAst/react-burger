import styles from './home.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import ErrorMessage from '../../components/ui/error-message/error-message';
import Preloader from '../../components/ui/preloader/Preloader';
import Main from '../../components/main/main';

function Home({ handleOpenModal }) {
    const { ingredients, feedRequest, feedFailed } = useSelector(store => ({
        ingredients: store.ingredients,
        feedRequest: store.ingredients.feedRequest,
        feedFailed: store.ingredients.feedFailed,
    }), shallowEqual);

    return (
        feedRequest ? <Preloader /> : feedFailed ? <ErrorMessage /> :
        ingredients.ingredients.length > 0 &&
        <Main 
            handleOpenModal={ handleOpenModal }
        />
    )
};

Home.propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
};

export default Home;