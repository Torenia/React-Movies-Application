import React, { useContext, useState } from 'react';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { MovieSearchWrapper } from '../../Components/MovieSearchWrapper/MovieSearchWrapper';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import MovieModal from '../MovieModal/MovieModal';
import AddMovieModal from '../../Components/AddMovieModal/AddMovieModal';
import { Context } from '../../Components/Context/Context';

export default function MovieSearch() {
    const [input, setInput] = useState('');
    const [isShownMovieModal, setIsShownAddMovieModal] = useState(false);
    const { setSearchText} = useContext(Context);

    const handleSearch = ({ key }) => {
        if (key === 'Enter') {
            setSearchText(input);
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
                    <button onClick={() => setSearchText(input)}>Search</button>
                </SearchBox>
            </MovieSearchWrapper>
        </Wrapper>
    )
};



