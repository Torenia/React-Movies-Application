import React from 'react';

import MovieCardEditDropdown from './MovieCardEditDropdown';

export default {
  title: 'MovieCardEditDropdown',
  component: MovieCardEditDropdown,
};

export const Template = (args) => <MovieCardEditDropdown {...args} />;

export const ShowMovieCardEditDropdown = Template.bind({});
ShowMovieCardEditDropdown.args = {
  showDropdown: true,
};

export const HideMovieCardEditDropdown = Template.bind({});
HideMovieCardEditDropdown.args = {
  showDropdown: false,
};
