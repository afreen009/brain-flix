import '../Comments/Comments.scss';
import CommentsList from "../CommentList/CommentList";


const Comments = ({comments}) => {
    return (
            <section className="comments">
                <p className="comments__commentsLength">{comments?.length} Comments</p>
                <form action="">
                   <div className="comments__commentBoxsec">
                        <div className="comments__imageBox">
                            <div className="comments__image">
                                <img src="/src/assets/images/Mohan-muruge.jpg" className="comments__imgCircle" alt="users iamage"/>
                            </div>
                        </div>
                        <div className="comments__buttonDiv">
                            <label className="comments__commentLabel" htmlFor="comments">JOIN THE CONVERSATION
                                <textarea
                                        name="comments__commentBox"
                                        id="comments"
                                        cols="10" 
                                        rows="5"
                                        className="comments__commentBox"
                                        placeholder="Add a new comment"
                                        required
                                    ></textarea>
                            </label>
                            <button type="submit" id="submit" className="comments__submitButton"> 
                            <img className="comments__btnImg" src="/src/assets/icons/add_comment.svg" alt="" />
                            COMMENT</button>
                        </div>
                    </div> 
                </form>
                <CommentsList commentsList={comments}/>
            </section>

    );
};

export default Comments; 