import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, primaryColor, textColor, size, label, stretched, ...props }) => {
  return (
    <StyledButton
      size={size}
      primary={primary}
      stretched={stretched}
      style={{ backgroundColor: primaryColor, color:textColor }}
      type="button"
      {...props}
    >
      {label}
    </StyledButton>
  );
};

const RawButton = styled.button`
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`
const SizedButton = styled(RawButton)`
  font-size: ${props => {
    if(props.size === 'small'){
      return '12px'
    } else if(props.size === 'medium'){
      return '14px'
    } else if(props.size === 'large'){
      return '16px'
    }
  }};
  padding: ${props => {
    if(props.size === 'small'){
      return '10px 16px'
    } else if(props.size === 'medium'){
      return '11px 20px'
    } else if(props.size === 'large'){
      return '12px 24px'
    }
  }};
`

const IsPrimaryButton = styled(SizedButton)`
  color: ${props => props.primary ? 'white' : '#333'};
  background-color: ${props => props.primary ? '#E62F4D' : 'white'};
  box-shadow: ${props => props.primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};
`

const IsStretchedButton = styled(IsPrimaryButton)`
  width: ${props => props.stretched ? '100%' : 'unset'};
`

const StyledButton = styled(IsStretchedButton)``


Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * Is this stretched based on parent size?
   */
  stretched: PropTypes.bool,
  /**
   * What background color to use
   */
  primaryColor: PropTypes.string,
  /**
   * What text color to use
   */
   textColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  primaryColor: null,
  textColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
