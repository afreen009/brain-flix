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
                <label htmlFor="uploadVideo__title">
                    TITLE YOUR VIDEO
                    <input type="text" id="uploadVideo__title"
                    placeholder="Add a title to your video"/>
                </label>
            </section>
            <section className="uploadVideo__descriptionSec">
                <label htmlFor="descriptionSec">
                    <textarea name="uploadVideo__descriptionSec" id="descriptionSec" cols="30" rows="10"></textarea>
                </label>
            </section>
            <div className="uploadVideo__descriptionSec">
                <button >
                    PUBLISH
                </button>
            </div>
            <span>
                CANCEL
            </span>
        </form>
        </section>
    );
}
export default UploadVideo;
