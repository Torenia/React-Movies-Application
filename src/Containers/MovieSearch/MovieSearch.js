import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { MovieSearchWrapper } from '../../Components/MovieSearchWrapper/MovieSearchWrapper';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import MovieModal from '../MovieModal/MovieModal';
import AddMovieModal from '../../Components/AddMovieModal/AddMovieModal';

export default function MovieSearch({ searchText }) {
    const [input, setInput] = useState('');
    const [isShownMovieModal, setIsShownAddMovieModal] = useState(false);

    const handleSearch = ({ key }) => {
        if (key === 'Enter') {
            searchText(input);
        }
    };

    return (
        <Wrapper>
            <MovieSearchWrapper>
                <button onClick={() => setIsShownAddMovieModal(true)}>+ add movie</button>
                <h1>find your movie</h1>
                {isShownMovieModal && <MovieModal>
                    <AddMovieModal
                        isShownMovieModal={setIsShownAddMovieModal}
                    />
                </MovieModal>}
                <SearchBox>
                    <input type="text"
                           placeholder="What do you want to watch?"
                           defaultValue={input}
                           onInput={e => setInput(e.target.value)}
                           onKeyDown={handleSearch}/>
                    <button onClick={() => searchText(input)}>Search</button>
                </SearchBox>
            </MovieSearchWrapper>
        </Wrapper>
    )
};

MovieSearch.protoTypes ={
    searchText: PropTypes.string
}



