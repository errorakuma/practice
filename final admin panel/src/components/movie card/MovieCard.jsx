import React from 'react'

import styles from './MovieCard.module.css';
class MovieCard extends React.Component {

    render() {
        const { moviedata } = this.props;

        return (
            < div className={styles.container}>
                <div className={styles.imageDiv}>
                    <img src={moviedata.Poster} alt='' />
                </div>
                <div className={styles.contentDiv}>
                    <p className={styles.name}>
                        {moviedata.Title}</p>
                </div>


            </div >
        )
    }

}

export default MovieCard;