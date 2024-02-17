import styles from './home.module.css';

import PropTypes from 'prop-types';


import Main from '../../components/main/main';

function Home({ handleOpenModal }) {
    return (
        <Main
            handleOpenModal={ handleOpenModal }
        />
    )
};

Home.propTypes = {
    handleOpenModal: PropTypes.func.isRequired,
};

export default Home;