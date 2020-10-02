import React, {useContext, memo } from 'react';
import { Route, useLocation, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MoviesResultsWrapper } from '../../Components/MoviesWrapper/MoviesWrapper';
import  EmptyResultState from '../../Components/EmptyResultState/EmptyResultState';
import { useMoviesData } from '../../Hooks/useMoviesData';
import { Context } from '../../Components/Context/Context';
import MoviesCards from '../MoviesCards/MoviesCards';

function MoviesResults({ searchText }) {
    const sortBy = useContext(Context).sortBy;
    const filterBy = useContext(Context).filterBy;
    const useQuery = () => new URLSearchParams(useLocation().search);
    const urlSearch = useQuery().get('search');

    const [state] = useMoviesData(sortBy, filterBy, searchText, urlSearch);

    return (
        <MoviesResultsWrapper>
            <Switch>
                <Route exact path="/movies" component={props => <MoviesCards state={state} {...props} />}/>
                <Route path="/" component={ EmptyResultState }/>
            </Switch>
        </MoviesResultsWrapper>
    )
}

MoviesResults.protoTypes = {
    searchText: PropTypes.string
}

export default memo(MoviesResults);
