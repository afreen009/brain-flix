import { useState } from "react";
import '../CommentList/CommentList.scss';

const CommentsList = ({commentsList}) => {
    function formatDate (i){
        const formattedDate = new Date(commentsList[i]?.timestamp).toLocaleDateString("en-US");
        return formattedDate;
    }
    return (
        <section className="commentsList">
         {commentsList?.length > 0 ? (
            <ol>
                {commentsList.map((comment, index) => (
                    <li key={comment.id}>
                        <div className="commentList__divider"></div>
                        <section className="commentList__card">
                            <div className="commentList__avatarDiv">
                                <div className="commentList__commentAvatarCircle"></div>
                            </div>
                            <div className="commentList__commentDiv">
                                <div className="commentList__commentedNameTimeDiv">
                                    <p className="commentList__commentedName">
                                        {comment.name}
                                    </p>
                                    <p className="commentList__commentedDate">
                                        {formatDate(index)}
                                    </p>
                                </div>
                                <p className="commentList__comment">
                                {comment.comment}
                                </p>
                            </div>
                        </section>
                    </li>
                ))}
            </ol>
        ) : (
          <p>No Comments available.</p>
        )}
        <div className="commentList__divider commentList__divider--bottom"></div>

            </section>

    );
};

export default CommentsList; 