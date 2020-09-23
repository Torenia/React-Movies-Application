import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MultiSelect from 'react-multi-select-component';

const prepareOptions = (value = []) =>
    value.map(genre => ({
        label: genre,
        value: genre,
    }));

const MultiSelectDropdown = ({ options, selectedOptions }) => {
    const [selected, setSelected] = useState([]);
    const genreOptions = selectedOptions?.length ? prepareOptions(selectedOptions) : options;

    return (
        <>
            <div className="label">Genre</div>
            <MultiSelect
                options={genreOptions}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select Genre'}
            />
        </>
    );
};

export default MultiSelectDropdown;

MultiSelectDropdown.propTypes = {
    options: PropTypes.array,
    selectedOptions: PropTypes.array
};
