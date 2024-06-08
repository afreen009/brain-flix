import { useState } from "react";
import '../Comments/Comments.scss';
import CommentsList from "../CommentList/CommentList";

const Comments = ({video}) => {
    // const formattedDate = new Date(video.comments[].timestamp).toLocaleDateString("en-US");
    return (
            <section className="comments">
                <p>{video.comments.length} Comments</p>
                <div className="comment__commentBoxsec">
                    <div className="comment__imgCommentDiv">
                        <div className="comments__imageBox">
                            <div className="comments__image">
                                <img src="/src/assets/images/Mohan-muruge.jpg" className="comments__imgCircle" alt="users iamage"/>
                            </div>
                        </div>
                        
                            {/* <label className="comment__commentLabel" for="comments">COMMENT</label> */}
                            <textarea
                                    name="comment__commentBox"
                                    id="comment"
                                    cols="10" 
                                    rows="5"
                                    className="comment__commentBox"
                                    placeholder="Add a new comment"
                                    required
                            ></textarea>
                    </div>
                        <div className="comment__buttonDiv">
                            <button type="submit" id="submit" className="comment__submitButton"> COMMENT</button>
                        </div>
                    </div> 
                    <CommentsList commentsList={video.comments}/>
            </section>

    );
};

export default Comments; 