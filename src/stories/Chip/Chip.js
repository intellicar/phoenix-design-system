import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { COLOR, ELEVATION } from "../../theme";
import "./style.css";
/**
 * Primary UI component for user interaction
 */

function createRipple(event) {
  const button = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

function ColorLuminance(hex, lum) {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  var rgb = "#",
    c,
    i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

const handleDelete = (e, props) => {
  e.stopPropagation();
  props.onDelete();
};

const disabledStyles = { "pointer-events": "none", opacity: "0.5" };

export const Chip = ({ ...props }) => {
  return (
    <div style={{ width: "fit-content" }}>
      <StyledChip
        {...props}
        style={props.disabled ? disabledStyles : {}}
        id="chip"
        onClick={(e) => {
          if (props.interactive) {
            createRipple(e);
          }
          props.onClick();
        }}
      >
        {props.avatar ? <Avatar src={props.avatar} /> : null}
        <span style={{ marginLeft: props.avatar || props.deleteIcon ? 4 : 0 }}>
          {props.label}
        </span>
        {props.avatar || props.deleteIcon ? (
          <Icon
            {...props}
            onClick={(e) => (props.onDelete ? handleDelete(e, props) : null)}
          >
            {props.deleteIcon ? props.deleteIcon : null}
          </Icon>
        ) : null}
      </StyledChip>
    </div>
  );
};

const Avatar = styled.img`
  height: 100%;
  border: 1.5px solid white;
  border-radius: 50%;
  margin-right: 2px;
`;

const iconContainer = styled.span`
  margin-left: 6px;
  display: flex;
  color: gray;
  cursor: pointer;
`;
const Icon = styled(iconContainer)`
  svg {
    font-size: 16px;
    fill: ${(props) => {
      return props.color === "primary" ? "white" : "gray";
    }};
  }
`;

const RawChip = styled.div`
  min-width: 5rem;
  border-radius: 15px;
  padding: 4px;
  box-sizing: border-box;
  text-align: center;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLOR.basic.BG}};
  color:${COLOR.basic.TX};
  font-weight:400;
  cursor:pointer;
  position: relative;
  overflow: hidden;
  transition: background 400ms;
  outline: 0;

  
`;

const SizedChip = styled(RawChip)`
  height: ${(props) => {
    if (props.size === "small") {
      return "20px";
    } else if (props.size === "medium") {
      return "26px";
    } else if (props.size === "large") {
      return "32px";
    }
  }};
  padding: ${(props) => {
    if (props.size === "small") {
      return "6px";
    } else if (props.size === "medium") {
      return "8px";
    } else if (props.size === "large") {
      return "10px";
    }
  }};
  font-size: ${(props) => {
    if (props.size === "small") {
      return "9px";
    } else if (props.size === "medium") {
      return "11px";
    } else if (props.size === "large") {
      return "16px";
    }
  }};
  box-shadow: ${(props) => {
    if (props.elevation) {
      return ELEVATION[props.elevation];
    }
  }};
`;

const variantButton = styled(SizedChip)`
  background-color: ${(props) => {
    if (props.variant === "outlined") {
      return "white";
    } else if (props.variant === "filled") {
      return props.color ? COLOR[props.color].BG : COLOR.basic.BG;
    }
  }};
  border: ${(props) => {
    if (props.variant === "outlined") {
      return `1px solid ${
        props.color ? COLOR[props.color].BG : COLOR.basic.BG
      }`;
    } else if (props.variant === "filled") {
      return "none";
    }
  }};
  color: ${(props) => {
    if (props.variant === "outlined") {
      return `${props.color ? COLOR[props.color].BG : COLOR.basic.TX}`;
    } else if (props.variant === "filled") {
      return props.color ? COLOR[props.color].TX : COLOR.basic.TX;
    }
  }};
`;

const AccessiblityChip = styled(variantButton)`
  &:hover {
    background-color: ${(props) => {
      return props.variant && props.variant === "outlined"
        ? "#d5b2b824"
        : ColorLuminance(
            props.color ? COLOR[props.color].BG : COLOR.basic.BG,
            -0.2
          );
    }};
  };
  padding: ${(props) => {
    if (props.avatar) {
      return "4px";
    } else if (props.deleteIcon) {
      return "4px 6px";
    }
  }};
  justify-content: ${(props) => {
    if (props.avatar || props.deleteIcon) {
      return "space-between";
    } else {
      return "center";
    }
  }};

};
`;

const StyledChip = styled(AccessiblityChip)``;

Chip.propTypes = {
  /**
   * Is this stretched based on parent size?
   */
  variant: PropTypes.oneOf(["filled", "outlined"]),
  /**
   * What background color to use
   */
  color: PropTypes.oneOf(["primary", "secondary"]),
  /**
   * What text color to use
   */
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  elevation: PropTypes.number,
  interactive: PropTypes.bool,

  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional Avatar Icon
   */
  avatar: PropTypes.string,
  deleteIcon: PropTypes.element,
  onDelete: PropTypes.func,
  disabled: PropTypes.bool,
};

Chip.defaultProps = {
  label: "Basic",
  size: "medium",
};
