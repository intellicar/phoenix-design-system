import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./style.css";
import { FaCaretSquareDown, FaSearch } from "react-icons/fa";
/**
 * Primary UI component for user interaction
 */

export const MultiSelect = ({ ...props }) => {
  const multiselectRef = useRef();
  const [filteredItem, setFilteredItem] = useState(props.data);

  const handleClick = (e) => {
    if (multiselectRef.current && !multiselectRef.current.contains(e.target)) {
      if (document.getElementById("multiSelectContainer")) {
        document.getElementById("multiSelectContainer").style.display = "none";
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const toggleMultiSelect = () => {
    if (document.getElementById("multiSelectContainer")) {
      document.getElementById("multiSelectContainer").style.display = "flex";
    }
  };

  const checkIfSelect = (vehicleid) => {
    // return props.selectedItem.find((item) => item[props.operationKey] === vehicleid);
    return props.selectedItem.find((item) => item === vehicleid);
  };
  const selectItem = (item) => {
    let prevData = props.selectedItem;
    let checkResult = prevData.find((prevItem) => prevItem === item);
    // let checkResult = prevData.find(
    // 	(prevItem) => prevItem[props.operationKey] === item[props.operationKey]
    // );
    if (checkResult) {
      // setSelectedItem(prevData.filter((e) => e[props.operationKey] !== item[props.operationKey]));
      props.onSelect(prevData.filter((e) => e !== item));
    } else {
      // setSelectedItem([...prevData, item]);
      props.onSelect([...prevData, item]);
    }
  };

  const processedItems = () => {
    let items = [];
    let oldItems = [...filteredItem];
    for (let idx in filteredItem) {
      if (checkIfSelect(filteredItem[idx][props.operationKey])) {
        items.push(filteredItem[idx]);
        let index = oldItems.findIndex(
          (x) => x[props.operationKey] === filteredItem[idx][props.operationKey]
        );
        if (index !== -1) {
          oldItems.splice(index, 1);
        }
      }
    }
    return [...items, ...oldItems];
  };

  const searchItem = (key) => {
    let data = props.data;
    let searchedItem = [];
    for (let idx in data) {
      if (
        data[idx][props.displayKey].toLowerCase().includes(key.toLowerCase())
      ) {
        searchedItem.push(data[idx]);
      }
    }
    setFilteredItem(searchedItem);
  };

  return (
    <MultiSelectContainer {...props} ref={multiselectRef}>
      <RenderToggler onClick={toggleMultiSelect}>
        <span>selected {props.selectedItem.length}</span>
        <FaCaretSquareDown />
      </RenderToggler>
      <SelectionContainer id="multiSelectContainer">
        <RenderSearchBox>
          <div className="BoxContainer">
            <FaSearch />
            <input
              type="text"
              placeholde="Search"
              onChange={(e) => searchItem(e.target.value)}
            />
          </div>
        </RenderSearchBox>
        <RenderItemList>
          {processedItems().map((item, key) => {
            return (
              <div
                className={
                  "Item " +
                  (checkIfSelect(item[props.operationKey]) && "active")
                }
                key={key}
                onClick={() => selectItem(item[props.operationKey])}
              >
                <div>{parseInt(key) + 1}</div>
                <span>{item[props.displayKey]}</span>
              </div>
            );
          })}
        </RenderItemList>
        <RenderActionButtons>
          {props.SelectionType && props.SelectionType === "Multi" ? (
            <button>ALL</button>
          ) : null}
          <button>CLEAR</button>
          <button style={{ background: "#EB5971", color: "white" }}>OK</button>
        </RenderActionButtons>
      </SelectionContainer>
    </MultiSelectContainer>
  );
};

const RenderActionButtons = styled.div`
  padding: 0.375rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.1rem;
  button {
    border: none;
    padding: 0.375rem;
    font-size: 0.625rem;
    border-radius: 0.188rem;
    cursor: pointer;
    font-weight: 600;
    color: $font-black;
    width: ${(props) => {
      return props.SelectionType && props.SelectionTyp === "Multi"
        ? "31%"
        : "48%";
    }};
  }

  button:hover {
    background: #eb5971;
    transition: all 0.3s;
    color: white;
  }
`;

const RenderItemList = styled.div`
  margin-top: 0.313rem;
  margin-bottom: 0.313rem;
  padding: 0.313rem;
  box-sizing: border-box;
  flex: 1;
  overflow-y: auto;
  .Item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f2f4f7;
    padding: 0.3rem 0;
    cursor: pointer;
    margin-bottom: 0.125rem;
    span {
      font-size: 12px;
      margin-left: 0.5rem;
      font-weight: 500;
      color: $font-black;
    }
    div {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #f2f4f7;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 8px;
      font-weight: 500;
    }
  }
  .active {
    color: white;
    div {
      background-color: #eb5971;
    }
    span {
      color: #eb5971;
    }
  }
`;
const RenderSearchBox = styled.div`
  display: flex;
  margin-top: 0.25rem;
  height: 2rem;
  padding: 0.5rem;
  justify-content: center;
  .BoxContainer {
    display: flex;
    padding: 0.188rem 0.188rem;
    box-sizing: border-box;
    align-items: center;
    border-radius: 0.25rem;
    background-color: #f2f4f7;
    margin-top: 0.2rem;
    width: 100%;

    svg {
      font-size: 0.625rem;
      margin-left: 0.188rem;
      width: 10%;
      color: gray;
    }
    input {
      border: none;
      font-size: 0.75rem;
      padding: 0.125rem 0.625rem;
      background-color: #f2f4f7;
      width: 90%;
    }
  }
  input:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;
const SelectionContainer = styled.div`
  z-index: 1;
  display: none;
  height: 18rem;
  position: absolute;
  background: white;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  top: 2.125rem;
  left: 0;
  right: 0;
  border-radius: 0.313rem;
  flex-direction: column;
`;
const RenderToggler = styled.div`
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border: 1px solid #e4e2e2;
  border-radius: 0.313rem;
  cursor: pointer;
  span {
    font-size: 0.75rem;
    font-weight: 600;
    color: #595959;
  }
  svg {
    align-self: center;
    margin-top: 0.125rem;
    color: #595959;
  }
`;

const MultiSelectContainer = styled.div`
  width: ${(props) => {
    return props.full ? "100%" : "13.5rem";
  }};
  height: 2rem;
  margin-right: 1rem;
  position: relative;
`;

MultiSelect.propTypes = {
  /**
   * Button contents
   */

  /**
   * On Item Select Handler
   */
  onSelect: PropTypes.func,

  /**
   * List of selected items keys
   */
  selectedItem: PropTypes.array,
  /**
   * Key to be used for operation
   */
  operationKey: PropTypes.string,
  /**
   * Key to be used for data display
   */
  displayKey: PropTypes.string,
  /**
   * Array of objects data
   */
  data: PropTypes.array,
  /**
   * Optional Select All handler for multiSelect
   */
  onSelectAll: PropTypes.func,

  /**
   * Type of Selection
   */
  SelectionType: PropTypes.oneOf(["Single", "Multi"]),

  /**
   * Type of Width
   */
  full: PropTypes.bool,
};

MultiSelect.defaultProps = {};
