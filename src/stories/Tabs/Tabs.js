import React, {Children, isValidElement, cloneElement, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TabPane } from './TabPane';

export const Tabs = ({ defaultActiveKey, size, centered, children, position, onTabChange, primaryColor, ...props }) => {

	const [activeTab, setActiveTab] = useState(defaultActiveKey);

	const renderTabPane = () => {
		return Children.map(children, child => {
			if (isValidElement(child) && activeTab === child.key) {
			  return cloneElement(child, {})
			}
		});
	  
	}

	const renderTabs = () => {
		let AlignedTabButton = TabButton;
		if(position === 'top'){
			AlignedTabButton = TopTabButton;
		} else if(position === 'bottom'){
			AlignedTabButton = BottomTabButton;
		} else if(position === 'left'){
			AlignedTabButton = LeftTabButton;
		} else if(position === 'right'){
			AlignedTabButton = RightTabButton;
		}
		return children.map((child) => {
			return(
				<AlignedTabButton 
					size={size} 
					isActive={activeTab === child.key} 
					key={"tabs-"+child.key}
					disabled={child.props.disabled}
					position={position}
					primaryColor={primaryColor}
					onClick={(evt) => {
						if(!child.props.disabled){
							setActiveTab(child.key);
							onTabChange(child.key, evt);
						}
					}}
				>{child.props.tab}</AlignedTabButton>
			)
		})
	}

    return(
        <TabsContainer position={position}>
			<TabButtonContainer position={position} centered={centered}>{renderTabs()}</TabButtonContainer>
			{renderTabPane()}
        </TabsContainer>
    )

	
}

const TabsContainer = styled.div`
    display: flex;
    flex-direction: ${props => {
		if(props.position === 'top'){
			return 'column'
		} else if(props.position === 'bottom'){
			return 'column-reverse'
		} else if(props.position === 'left'){
			return 'row'
		} else if(props.position === 'right'){
			return 'row-reverse'
		}
	}};
`

const TabButtonContainer = styled.div`
	display: flex;
	justify-content: ${props => props.centered ? 'center' : 'left'};
	flex-direction: ${props => ['left', 'right'].includes(props.position) ? 'column' : 'row'}
`

const TabButton = styled.div`
	font-size: 14px;
    padding: 0 1rem;
    margin-left: ${props => ['left', 'right'].includes(props.position) ? '0' : '1rem'};
	margin-bottom: ${props => ['left', 'right'].includes(props.position) ? '1rem' : '0'};
	font-weight: 500;
    height: ${props => {
        if(props.size === 'small'){
            return '1.5rem'
        } else if(props.size === 'medium'){
            return '2rem'
        } else if(props.size === 'large'){
            return '3rem'
        }
    }};
    display: flex;
    align-items: center;
    justify-content: center;
	cursor:${props => props.disabled ? 'not-allowed' : 'pointer'};
	color: ${props => {
		if(props.isActive){
			return '#000000';
	 	} else {
			if(props.disabled){
				return '#c7c5c5'
			} else {
				return '#797979'
			}
		}
	}};
	border: 0px solid ${props => {
		if(props.isActive){
			if(props.primaryColor){
				return props.primaryColor;
			}
			return '#E62F4D';
			
		} else {
			return 'transparent';
		}
	}};
	&:first-child{
		margin-left:0;
	}

	&:hover{
		background-color: #eef1fc;
	}
`

const LeftTabButton = styled(TabButton)`
	border-right-width: 4px;
`

const RightTabButton = styled(TabButton)`
	border-left-width: 4px;
`

const TopTabButton = styled(TabButton)`
	border-bottom-width: 4px;
`

const BottomTabButton = styled(TabButton)`
	border-top-width: 4px;
`

Tabs.propTypes = {
	/**
     * What primary color to use
     */
	 primaryColor: PropTypes.string,
	/**
    * How large should the tabs be?
    */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
    * Specify whether the tabs should be centered aligned
    */
	centered: PropTypes.bool,
	/**
    * What should be the position of the tab?
    */
	position: PropTypes.oneOf(['left', 'top', 'right', 'bottom']),
	/**
    * Optional click handler
    */
	onTabChange: PropTypes.func,
};

Tabs.defaultProps = {
	size: 'medium',
	position: 'top',
	onTabChange: (val, evt) => { console.log(val, evt); },
};

Tabs.TabPane = TabPane;

// export default Tabs;