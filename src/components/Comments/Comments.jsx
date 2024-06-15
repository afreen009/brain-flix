import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../Comments/Comments.scss';
import CommentsList from "../CommentList/CommentList";

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/"; // root route for API endpoint
const API_KEY = "?api_key=ea5349e3-babf-4703-96e7-ebbc2041eb84";


const Comments = ({id}) => {
    const getCommentsEndPoint =`${API_URL}videos/${id}/comments${API_KEY}`;

    const [comments, SetComments] = useState([]);
    const { commentId } = useParams();

    console.log(id); 
    const getComments = async () => {
        try{
          let result = await axios.get(getCommentsEndPoint);
          SetComments(result.data);
        }catch(e) {
          console.log(e);
        }
      }
    
      useEffect(() => {
        getComments();
      }, []);
      
    return (
            <section className="comments">
                {/* <p className="comments__commentsLength">{video.comments.length} Comments</p> */}
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
                    {/* <CommentsList commentsList={video.comments}/> */}
            </section>

    );
};

export default Comments; 