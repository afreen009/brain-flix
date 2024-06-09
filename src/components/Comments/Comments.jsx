import { useState } from "react";
import '../Comments/Comments.scss';
import CommentsList from "../CommentList/CommentList";

const Comments = ({video}) => {
    // const formattedDate = new Date(video.comments[].timestamp).toLocaleDateString("en-US");
    return (
            <section className="comments">
                <p>{video.comments.length} Comments</p>
                <div className="comments__commentBoxsec">
                    <div className="comments__imgCommentDiv">
                        <div className="comments__imageBox">
                            <div className="comments__image">
                                <img src="/src/assets/images/Mohan-muruge.jpg" className="comments__imgCircle" alt="users iamage"/>
                            </div>
                        </div>
                        
                            {/* <label className="comment__commentLabel" for="comments">COMMENT</label> */}
                            <textarea
                                    name="comments__commentBox"
                                    id="comments"
                                    cols="10" 
                                    rows="5"
                                    className="comments__commentBox"
                                    placeholder="Add a new comment"
                                    required
                            ></textarea>
                    </div>
                        <div className="comments__buttonDiv">
                            <button type="submit" id="submit" className="comments__submitButton"> COMMENT</button>
                        </div>
                    </div> 
                    <CommentsList commentsList={video.comments}/>
            </section>

    );
};

export default Comments; 