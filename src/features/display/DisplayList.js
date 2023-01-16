import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
// import DisplayCard from './DisplayCard';
import AnimatedDisplayCard from './AnimatedDisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnerSlice';
import Error from "../../components/Error";
import Loading from "../../components/Loading";

const DisplayList = () => {
    const items = useSelector((state) => [
        selectFeaturedCampsite(state),
        selectFeaturedPromotion(state),
        selectFeaturedPartner(state),
    ]);

    console.log('display items: ', items);

    return (
        <Row>
            {items.map((item, idx) => {
                const { featuredItem, isLoading, errorMsg } = item;
                if (isLoading) {
                    return <Loading key={idx} />;
                }
                if (errorMsg) {
                    return <Error errorMsg={errorMsg} key={idx} />
                }
                return (
                    featuredItem && (
                    <Col md className='m-1' key={idx}>
                        <AnimatedDisplayCard item={featuredItem} />
                        </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;