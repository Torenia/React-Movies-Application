import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MultiSelect from 'react-multi-select-component';

const MultiSelectDropdown = ({ options }) => {

    const [selected, setSelected] = useState([]);

    return (
        <>
            <div className="label">Genre</div>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy={'Select Genre'}
            />
        </>
    );
};

export default MultiSelectDropdown;

MultiSelectDropdown.propTypes = {
    options: PropTypes.array
};
