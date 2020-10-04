import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from '../../Components/Wrapper/Wrapper';
import { MovieSearchWrapper } from '../../Components/MovieSearchWrapper/MovieSearchWrapper';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import { Context } from '../../Components/Context/Context';

export default function MovieSearch() {
    const [input, setInput] = useState('');
    const { setSearchText } = useContext(Context);

    const handleSearch = ({ key }) => {
        if (key === 'Enter') {
            setSearchText(input);
        }
    };

    return (
        <Wrapper>
            <MovieSearchWrapper>
                <Link to={'/add/movie'}>
                    <button>+ add movie</button>
                </Link>
                <h1>find your movie</h1>
                <SearchBox>
                    <input type="text"
                           placeholder="What do you want to watch?"
                           defaultValue={input}
                           onInput={e => setInput(e.target.value)}
                           onKeyDown={handleSearch}/>
                    <Link to={`/movies/?searchBy=title&&search=${input}`}>
                        <button onClick={() => setSearchText(input)}>Search</button>
                    </Link>
                </SearchBox>
            </MovieSearchWrapper>
        </Wrapper>
    )
};



