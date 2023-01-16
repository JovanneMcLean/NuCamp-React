import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import Partner from './Partner';
import { selectAllPartners } from './partnerSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const PartnersList = () => {
    const partners = useSelector(selectAllPartners);
    const isLoading = useSelector((state) => state.partners.isLoading);
    const errorMsg = useSelector((state) => state.partners.errorMsg);

    return isLoading ? (
        <Loading />
    ) : errorMsg ? (
            <Error errorMsg={errorMsg} />
    ) : (
        <Col className='mt-4'>
            <Row>
                {partners.map((partner) => {
                    return (
                        <div className='d-flex mb-5' key={partner.id}>
                            <Partner partner={partner} />
                        </div>
                    );
                })};
            </Row>
        </Col>
    )
}

export default PartnersList;
