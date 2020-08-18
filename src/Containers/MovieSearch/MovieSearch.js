import React from 'react';

import { Wrapper } from '../../Components/Wrapper/Wrapper'
import { MovieSearchWrapper } from '../../Components/MovieSearchWrapper/MovieSearchWrapper'
import { SearchBox } from '../../Components/SearchBox/SearchBox'


export default function MovieSearch() {
    return (
        <Wrapper>
            <MovieSearchWrapper>
                <button>+ add movie</button>
                <h1>find your movie</h1>
                <SearchBox>
                    <input type="text" placeholder="What do you want to watch?"/>
                    <button>Search</button>
                </SearchBox>
            </MovieSearchWrapper>
        </Wrapper>
    )
};



