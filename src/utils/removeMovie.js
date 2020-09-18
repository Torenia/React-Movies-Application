import axios from 'axios';

export const removeMovie = (id) => {
    let deleteMovie = false;
    try {
        axios.delete(`http://localhost:4000/movies/${id}`).then(deleteMovie = true);
    } catch (e) {
        console.error(e);
    }
    return deleteMovie;
}

