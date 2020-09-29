import React from 'react';
import PropTypes from 'prop-types';

import MultiSelect from 'react-multi-select-component';

const genres = ['Adventure', 'Drama', 'Family', 'Music', 'Animation', 'Science Fiction', 'Fantasy', 'Action', 'Romance',
    'Comedy', 'Mystery', 'Thriller', 'War', 'Crime'];

const prepareOptions = (value = []) =>
    value.map(genre => ({
        label: genre,
        value: genre,
    }));

const MultiSelectDropdown = ({ onChange, value }) => (
    <>
        <div className="label">Genre</div>
        <MultiSelect
            options={prepareOptions(genres)}
            value={value}
            onChange={onChange}
            labelledBy={'Select Genre'}
        />
    </>
);

export default MultiSelectDropdown;

MultiSelectDropdown.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array
};
