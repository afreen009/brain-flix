import './../UploadVideo/UploadVideo.scss'

const UploadVideo = () =>{
    return (
        <section className="uploadVideo">
        <h2 className="uploadVideo__headerName">
            Uplaod Video
        </h2>
        <section className='uploadVideo__thumbnailsec'>
            <label className='uploadVideo__thumbnailLabel' htmlFor="uploadVideo__imageWrapper">
                VIDEO THUMBNAIL
                <div className="uploadVideo__imageWrapper">
                    <img className='uploadVideo__image' src="/src/assets/images/Upload-video-preview.jpg" alt="Thumbnail Image" />
                </div>
            </label>
        </section>
        <form className='uploadVideo__formSec'>
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
                    <textarea cols="30" rows="10" type="text" className='uploadVideo__description' id="uploadVideo__title"
                    placeholder="Add a description to your video"/>
                </label>
            </section>
            <div className="uploadVideo__btnDiv">
                <button className="uploadVideo__publishBtn">
                    <img src="/src/assets/icons/publish.svg" alt="publish icon" />
                    PUBLISH
                </button>
            </div>
            <span className='uploadVideo__cancelBtn'>
                CANCEL
            </span>
        </form>
        </section>
    );
}
export default UploadVideo;
