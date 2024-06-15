import { Link } from "react-router-dom";
import './../VideoList/VideoList.scss'

const VideoList = ({videoList, handleSelectVideo}) => {
    return (
            <section className="videoList">
                <p className="videoList__heading">NEXT VIDEOS</p>
                {videoList.length > 0 ? (
                    <ol>
                        {videoList.map((video) => (
                            <>
                                <Link to={`/videos/${video.id}`}>
                                    <li key={video.id}>
                                        <div className="videoList__divider"></div>
                                        <section className="videoList__card" onClick={()=> handleSelectVideo(video.id)}>
                                            <div className="videoList__imgBox"> 
                                                <img className="videoList__img" src={video.image} alt="video images" />
                                            </div>
                                            <div className="videoList__videoNameDiv">
                                                <p className="videoList__videoName">
                                                    {video.title}
                                                </p>
                                                <p className="videoList__channel">
                                                    {video.channel}
                                                </p>
                                            </div>
                                        </section>
                                    </li>
                                </Link>
                            </>
                        ))}
                    </ol>
            ) : (
            <p>No Comments available.</p>
            )}
            </section>
    );
};

export default VideoList;