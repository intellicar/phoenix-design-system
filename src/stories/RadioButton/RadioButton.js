import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const RadioButton = ({ backgroundColor, tickColor, size, defaultChecked, value, label, name, onChange, ...props }) => {
  return (
    <RadioContainer>
        <RadioLabel size={size}>{label}
            <RawRadio
                type="radio"
                name={name} 
                backgroundColor={backgroundColor}
                value={value} 
                defaultChecked={defaultChecked}
                onChange={(evt) => {onChange(evt, evt.target.value);}} 
            />
            <RadioMark size={size} tickColor={tickColor}></RadioMark>
        </RadioLabel>
    </RadioContainer>
  );
};

const RadioContainer = styled.div`
    display:flex;
`;

const RadioMark = styled.span`
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
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after {
        content: "";
        position: absolute;
        display: none;
        width: 0.7rem;
        height: 0.7rem;
        background-color: white;
        border-radius: 50%;
        background-color: ${props => props.tickColor ? props.tickColor : 'white'};
    }
`;

const RadioLabel = styled.label`
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
    &:hover ${RadioMark} {
        background-color: #ebecec;
    }
`;

const RawRadio = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + ${RadioMark} {
        background-color: ${props => props.backgroundColor ? props.backgroundColor : '#E62F4D'};
        &:after {
            display: block;
        }
    }
`;

RadioButton.propTypes = {
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
     * Radio contents
     */
    label: PropTypes.string.isRequired,
    /**
    * Specify whether the underlying input should be checked
    */
    defaultChecked: PropTypes.bool,
    /**
    * Name of Radio Button
    */
    name: PropTypes.string,
     /**
    * value of radio button
    */
    value: PropTypes.string.isRequired,
    /**
    * Optional click handler
    */
    onChange: PropTypes.func,
};
  
RadioButton.defaultProps = {
    backgroundColor: null,
    tickColor: null,
    primary: false,
    size: 'medium',
    value: 'radio_1',
    name: 'Radio 1',
    label: 'Item 1',
    onChange: (evt, val) => {
        console.log(evt, val);
    },
};