import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errorMsg = useSelector((state) => state.campsites.errorMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        )
    }

    if (errorMsg) {
        return (
            <Row>
                <Error errorMsg={errorMsg} />
            </Row>
        )
    }


    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default CampsitesList;
