import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));
    const isLoading = useSelector((state) => state.comments.isLoading);
    const errorMsg = useSelector((state) => state.comments.errorMsg);


    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    if (errorMsg) {
        return (
            <>
                <Error errorMsg={errorMsg} />
            </>
        )
    }
    if (comments && comments.length > 0) {
        return (
            <div>
                <Col md='5' className='m-1' >
                    <h4>Comments</h4>
                    {comments.map((comment) => {
                        return <Comment key={comment.id} comment={comment} />;
                    })}
                <CommentForm campsiteId={campsiteId} />
                </Col>
                
            </div>
        );
    }
    return (
        <Col md='5' className='m-1'>
            Oops! There are no comments for this campsite yet.
        </Col>
    );
};

export default CommentsList;
