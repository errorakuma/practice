import React from "react";
import axios from "axios";
import styles from "./Movie.module.css";
import MovieCard from "../movie card/MovieCard";
class Movie extends React.Component {
    state = {
        list: [],
        search: "",
        filterdata: [],
    };

    componentDidMount() {
        axios
            .get("https://www.omdbapi.com/?apikey=45f0782a&s=Anime")
            .then((res) => this.setState({ list: res.data.Search }))

            .catch((err) => console.log(err));

    }

    handleChange = (e) => {
        // console.log(e.target.value)

        let usermovie = e.target.value.toLowerCase();
        // console.log(usermovie)

        let data = this.state.list.filter((movie) =>
            movie.Title.toLowerCase().includes(usermovie)
        );

        console.log(data);

        this.setState({ search: e.target.value, filterdata: data }, () =>
            console.log(this.state)
        );
    };

    render() {
        return (
            <>
                <header>

                    <h1>Movie Website</h1>
                </header>
                <main>
                    <div className={styles.searchDiv}>
                        <input
                            type="text"
                            placeholder="Enter Movie name..."
                            onChange={(e) => this.handleChange(e)}
                            className={styles.search}
                        />
                    </div>
                    <div className={styles.container}>
                        {this.state.filterdata.length === 0 &&
                            this.state.search === "" ? (
                            this.state.list.map((card, idx) => (
                                <MovieCard moviedata={card} key={"movie" + idx} />
                            ))
                        ) : this.state.filterdata.length === 0 &&
                            this.state.search !== "" ? (
                            <h1 className={styles.noRec}>No record found !</h1>
                        ) : (
                            this.state.filterdata.map((card, idx) => (
                                <MovieCard moviedata={card} key={"movie" + idx} />
                            ))
                        )}
                    </div>
                </main>
                <footer>
                    <h1>2023</h1>
                </footer>
            </>
        );
    }
}
export default Movie;
