import { useNavigate } from "react-router-dom";
import './UploadVideo.scss'
import Header from '../../components/Header/Header'

const UploadVideo = () =>{
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
  
      alert("Your upload was successful! You rock!");
      navigate("/");
    };
    
    return (
        <>
        <Header />
        <section className="uploadVideo">
            <div className='uploadVideo__innerdiv'>
            <h2 className="uploadVideo__headerName">
                    Uplaod Video
            </h2>
                <div className='uploadVideo__divider'></div>
                <form onSubmit={handleSubmit} className='uploadVideo__formSec'>
                    <section className='uploadVideo__inlineSec'>
                        <section className='uploadVideo__thumbnailsec'>
                            <label className='uploadVideo__thumbnailLabel' htmlFor="uploadVideo__imageWrapper">
                                VIDEO THUMBNAIL
                                <div className="uploadVideo__imageWrapper">
                                    <img className='uploadVideo__image' src="/src/assets/images/Upload-video-preview.jpg" alt="Thumbnail Image" />
                                </div>
                            </label>
                        </section>
                        <div className='uploadVideo__inputsSec'>
                            <section className="uploadVideo__titleSec">
                                <label className='uploadVideo__titleLabel' htmlFor="uploadVideo__title">
                                    TITLE YOUR VIDEO
                                    <input type="text" className='uploadVideo__title' id="uploadVideo__title"
                                    placeholder="Add a title to your video"/>
                                </label>
                            </section>
                            <section className="uploadVideo__descriptionSec">
                                <label className='uploadVideo__descriptionLabel' htmlFor="uploadVideo__description">
                                    ADD A VIDEO DESCRIPTION
                                    <textarea cols="30" rows="5" type="text" className='uploadVideo__description' id="uploadVideo__title"
                                    placeholder="Add a description to your video"/>
                                </label>
                            </section>
                        </div>
                    </section>
                    <div className='uploadVideo__divider'></div>
                    <section className='uploadVideo__btnSec'>
                        <div className="uploadVideo__btnDiv">
                            <button className="uploadVideo__publishBtn" type="submit">
                                <img src="/src/assets/icons/publish.svg" alt="publish icon" />
                                PUBLISH
                            </button>
                        </div>
                        <span className='uploadVideo__cancelBtn'>
                            CANCEL
                        </span>
                    </section>
                </form>
            </div>
        </section>
        </>
    );
}
export default UploadVideo;
