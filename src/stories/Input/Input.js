import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ type, placeholder, size, label, stretched, ...props }) => {
    const viewType = stretched ? 'sds-input--stretched' : '';
    return(
        <div className={['sds-input--container', viewType].join(" ")}>
            <label>{label}</label>
            <div className={['sds-input--box', `sds-input--${size}`].join(" ")}>
                <input type={type ? type : 'text'} placeholder={placeholder} {...props} />
            </div>
        </div>
    )
}

Input.propTypes = {
    /**
     * What is the type of input?
     */
     type: PropTypes.string,
    /**
     * Is this stretched based on parent size?
     */
     stretched: PropTypes.bool,
    /**
     * What is the placeholder
     */
     placeholder: PropTypes.string,
    /**
     * How large should the input be?
     */
     size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Input label
     */
     label: PropTypes.string.isRequired,
    /**
     * Optional click handler
     */
     onChange: PropTypes.func,
  };

  Input.defaultProps = {
    type: 'text',
    stretched: false,
    placeholder: 'Type text here...',
    size: 'medium',
    label: 'Label',
    onChange: undefined,
  };