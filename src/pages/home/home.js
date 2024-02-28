import styles from './home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getInitialData } from '../../services/actions/burger-ingredients';
import ErrorMessage from '../../components/ui/error-message/error-message';
import Preloader from '../../components/ui/preloader/Preloader';
import Main from '../../components/main/main';

function Home({ handleOpenModal }) {
    const dispatch = useDispatch();

    const { ingredients, feedRequest, feedFailed } = useSelector(store => ({
        ingredients: store.ingredients,
        feedRequest: store.ingredients.feedRequest,
        feedFailed: store.ingredients.feedFailed,
    }));

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