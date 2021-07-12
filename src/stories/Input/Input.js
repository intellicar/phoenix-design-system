import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Input = ({ type, placeholder, size, label, stretched, disabled, ...props }) => {
    return(
        <InputContainer stretched={stretched}>
            <InputLabel>{label}</InputLabel>
            <InputBox disabled={disabled}>
                <StyledInput disabled={disabled} size={size} type={type ? type : 'text'} placeholder={placeholder} {...props} />
            </InputBox>
        </InputContainer>
    )
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.stretched ? '100%' : '18.7rem'};
`

const InputLabel = styled.label`
    font-size: 0.8rem;
    font-weight: 700;
    color: #141D2E;
`

const InputBox = styled.div`
    border: 1px solid #EBECEC;
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    padding: 0 0.4rem;
    margin-top: 0.3rem;
    background-color: ${props => props.disabled ? '#ebecec' : 'white'}
`

const RawInput = styled.input`
    width: 100%;
    border: 0;
    outline: 0;
    color: #141D2E;
    background-color: ${props => props.disabled ? '#ebecec' : 'white'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
`

const SizedInput = styled(RawInput)`
    height: ${props => {
    if(props.size === 'small'){
      return '2rem'
    } else if(props.size === 'medium'){
      return '2.25rem'
    } else if(props.size === 'large'){
      return '2.5rem'
    }
  }};
`

const StyledInput = styled(SizedInput)``

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
     * Is Input Disabled?
     */
      disabled: PropTypes.bool,
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
    disabled: false,
    onChange: undefined
  };