import styles from "./video.module.css";

const Card = (props) => {
    let { videoData } = props;

    return (
        <div className={styles.VideoCard}>
            <img src={videoData.thumbnailUrl} alt={videoData.title} />
            <div>
                <span>{videoData.title}</span>
            </div>
            <div>
                <img className={styles.logo} src={videoData.channelLogoUrl} alt={videoData.channelName} />
                <span>{videoData.channelName}</span>
                <p>
                    {videoData.views} views • {videoData.likes} likes
                </p>
            </div>

        </div>
    );
};

export default Card;