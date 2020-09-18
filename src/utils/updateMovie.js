import axios from 'axios';

export const updateMovie = async (data) => {
    try {
        await axios.put('http://localhost:4000/movies', data);
    } catch (e) {
        console.error(e);
    }
}

