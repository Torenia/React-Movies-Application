import React, { useContext, useState } from 'react';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { MovieSearchWrapper } from '../../Components/MovieSearchWrapper/MovieSearchWrapper';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import AddMovieModal from '../../Components/AddMovieModal/AddMovieModal';
import { Context } from '../../Components/Context/Context';
import { useModal } from '../../Hooks/useModal';

export default function MovieSearch() {
    const [input, setInput] = useState('');
    const {isShowing, toggle} = useModal();
    const { setSearchText} = useContext(Context);

    const handleSearch = ({ key }) => {
        if (key === 'Enter') {
            setSearchText(input);
        }
    };

    return (
        <Wrapper>
            <MovieSearchWrapper>
                <button onClick={toggle}>+ add movie</button>
                <h1>find your movie</h1>
                <AddMovieModal
                    isShowing={isShowing}
                    toggle={toggle}
                />
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



