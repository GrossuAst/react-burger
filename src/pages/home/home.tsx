import styles from './home.module.css';
import { useSelector, shallowEqual } from 'react-redux';
import ErrorMessage from '../../components/ui/error-message/error-message';
import Preloader from '../../components/ui/preloader/Preloader';
import Main from '../../components/main/main';

interface IHomeProps {
    handleOpenModal: () => void;
};

export const Home = ({ handleOpenModal }: IHomeProps) => {
    const { feedRequest, feedFailed } = useSelector((store: any) => ({
        feedRequest: store.ingredients.feedRequest,
        feedFailed: store.ingredients.feedFailed,
    }), shallowEqual);

    return (
        feedRequest ? <Preloader /> : feedFailed ? <ErrorMessage /> :
        <Main handleOpenModal={ handleOpenModal } />
    )
};

export default Home;