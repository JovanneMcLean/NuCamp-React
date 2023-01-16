import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/Comments/CommentsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/Error';
import Loading from '../components/Loading';

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errorMsg = useSelector((state) => state.campsites.errorMsg);
    let content = null;

    if (isLoading) {
        content = <Loading />;
    } else if (errorMsg) {
        content = <Error errorMsg={errorMsg} />;
    } else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        )
    }


    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} />}
            <Row>
                {content}
            </Row>
        </Container>
    );
};

export default CampsiteDetailPage;