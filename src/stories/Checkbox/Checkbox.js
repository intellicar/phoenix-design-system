import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({ backgroundColor, tickColor, size, defaultChecked, value, label, name, onChange, ...props }) => {
  return (
    <CheckboxContainer>
        <CheckboxLabel size={size}>{label}
            <RawCheckbox
                type="checkbox"
                name={name} 
                backgroundColor={backgroundColor}
                value={value} 
                defaultChecked={defaultChecked}
                onChange={(evt) => {onChange(evt, evt.target.checked);}} 
            />
            <CheckMark size={size} tickColor={tickColor}></CheckMark>
        </CheckboxLabel>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.div`
    display:flex;
`;

const CheckMark = styled.span`
    position: absolute;
    top: ${props => props.size === 'small' ? '0.1rem' : 0};
    left: 0;
    height: ${props => {
        if(props.size === 'small'){
        return '1.1rem'
        } else if(props.size === 'medium'){
        return '1.3rem;'
        } else if(props.size === 'large'){
        return '1.5rem'
        }
    }};

    width: ${props => {
        if(props.size === 'small'){
        return '1.1rem'
        } else if(props.size === 'medium'){
        return '1.3rem;'
        } else if(props.size === 'large'){
        return '1.5rem'
        }
    }};

    background-color: #eef1fc;
    border-radius: 4px;
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: ${props => {
            if(props.size === 'small'){
            return '0.3rem'
            } else if(props.size === 'medium'){
            return '0.4rem;'
            } else if(props.size === 'large'){
            return '0.5rem'
            }
        }};
        top: ${props => {
            if(props.size === 'small'){
            return '0.1rem'
            } else if(props.size === 'medium'){
            return '0.2rem;'
            } else if(props.size === 'large'){
            return '0.3rem'
            }
        }};
        width: 5px;
        height: 10px;
        border: solid ${props => props.tickColor ? props.tickColor : 'white'};
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`;

const CheckboxLabel = styled.label`
    display: flex;
    position: relative;
    padding-left: ${props => {
        if(props.size === 'small'){
            return '1.6rem'
        } else if(props.size === 'medium'){
            return '1.8rem'
        } else if(props.size === 'large'){
            return '2rem'
        }
    }};
    margin-bottom: 0.3rem;
    cursor: pointer;
    font-size: 15px;
    margin-top: 0.3rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    &:hover ${CheckMark} {
        background-color: #ebecec;
    }
`;

const RawCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + ${CheckMark} {
        background-color: ${props => props.backgroundColor ? props.backgroundColor : '#E62F4D'};
        &:after {
            display: block;
        }
    }
`;

Checkbox.propTypes = {
    /**
     * What background color to use
     */
    backgroundColor: PropTypes.string,
    /**
    * What tick color to use
    */
    tickColor: PropTypes.string,
    /**
    * How large should the button be?
    */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /**
     * Checkbox contents
     */
    label: PropTypes.string.isRequired,
    /**
    * Specify whether the underlying input should be checked
    */
    defaultChecked: PropTypes.bool,
    /**
    * Name of checkbox
    */
    name: PropTypes.string,
     /**
    * value of checkbox
    */
    value: PropTypes.string.isRequired,
    /**
    * Optional click handler
    */
    onChange: PropTypes.func,
};
  
Checkbox.defaultProps = {
    backgroundColor: null,
    tickColor: null,
    primary: false,
    size: 'medium',
    value: 'checkbox_1',
    name: 'Checkbox 1',
    label: 'Item 1',
    onChange: (evt, isChecked) => {
        console.log(evt, isChecked);
    },
};