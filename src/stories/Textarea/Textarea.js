import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Textarea = ({ placeholder, size, label, stretched, disabled, ...props }) => {
    return(
        <TextareaContainer stretched={stretched}>
            <TextareaLabel>{label}</TextareaLabel>
            <TextareaBox disabled={disabled}>
                <StyledTextarea size={size} placeholder={placeholder} disabled={disabled} {...props}></StyledTextarea>
            </TextareaBox>
        </TextareaContainer>
    )
}

const TextareaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.stretched ? '100%' : '18.7rem'};
`

const TextareaLabel = styled.label`
    font-size: 0.8rem;
    font-weight: 700;
    color: #141D2E;
`

const TextareaBox = styled.div`
    border: 1px solid #EBECEC;
    border-radius: 4px;
    display: flex;
    overflow: hidden;
    padding: 0 0.4rem;
    margin-top: 0.3rem;
    background-color: ${props => props.disabled ? '#ebecec' : 'white'}
`

const RawTextarea = styled.textarea`
    min-width: 100%;
    max-width: 100%;
    border: 0;
    outline: 0;
    color: #141D2E;
    background-color: ${props => props.disabled ? '#ebecec' : 'white'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
`

const SizedTextarea = styled(RawTextarea)`
    min-height: ${props => {
        if(props.size === 'small'){
        return '5rem'
        } else if(props.size === 'medium'){
        return '6rem'
        } else if(props.size === 'large'){
        return '7rem'
        }
    }};
    max-height: ${props => {
        if(props.size === 'small'){
        return '5rem'
        } else if(props.size === 'medium'){
        return '6rem'
        } else if(props.size === 'large'){
        return '7rem'
        }
    }};
`

const StyledTextarea = styled(SizedTextarea)``

Textarea.propTypes = {
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
     * Textarea label
     */
     label: PropTypes.string.isRequired,
    /**
     * Is Textarea disabled?
     */
     disabled: PropTypes.bool,
    /**
     * Optional click handler
     */
     onChange: PropTypes.func,
  };

  Textarea.defaultProps = {
    stretched: false,
    placeholder: 'Type text here...',
    size: 'medium',
    label: 'Label',
    disabled: false,
    onChange: undefined,
  };