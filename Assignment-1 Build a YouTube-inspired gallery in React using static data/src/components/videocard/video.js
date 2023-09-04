import styles from "./video.module.css";

const Card = (props) => {
    let { videoData } = props;

    return (
        <div className={styles.VideoCard}>

            <video poster={videoData.thumbnailUrl} alt={videoData.title} controls ></video>


            <div>
                <span>{videoData.title}</span>
            </div>
            <div>
                <img className={styles.logo} src={videoData.channelLogoUrl} alt={videoData.channelName} />
                <span>{videoData.channelName}
                </span><br></br>
                <span>
                    {videoData.views / 1000}K subscribers

                </span>


                <p>
                    {videoData.views / 1000}K views • {videoData.likes / 1000}K likes
                </p>
            </div>

        </div>
    );
};

export default Card;