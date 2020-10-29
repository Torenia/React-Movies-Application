import React from 'react';

import MovieCard from './MovieCard';

export default {
  title: 'MovieCard',
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const MovieCardExample = Template.bind({});
MovieCardExample.args = {
  id: 181808,
  title: "Star Wars: The Last Jedi",
  releaseDate: "2017-12-13",
  srcImg: "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
  genres: ["Fantasy", "Adventure", "Science Fiction"],
};

