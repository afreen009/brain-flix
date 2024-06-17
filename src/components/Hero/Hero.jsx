import '../Hero/Hero.scss';

const Hero = ({video}) => {
    return (
            <section className="hero">
                <div className="hero__videoContainer">
                    <video
                        controls
                        id="customVideo"
                        poster={video.image}
                        className="hero__video--wrapper"
                        >
                    </video>
                </div> 
            </section>
    );
};

export default Hero;