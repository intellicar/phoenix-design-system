import React, {Children, isValidElement, cloneElement, useState} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TabPane } from './TabPane';

export const Tabs = ({ defaultActiveKey, onChange, children, ...props }) => {

	const [activeTab, setActiveTab] = useState(defaultActiveKey);

	const renderTabPane = () => {
		return Children.map(children, child => {
			if (isValidElement(child) && activeTab === child.key) {
			  return cloneElement(child, { isActive: defaultActiveKey ===  child.key})
			}
			return child;
		});
	  
	}

	const renderTabs = () => {
		return children.map((child) => {
			return(
				<div className="tabs" onClick={() => {setActiveTab(child.key)}} >{child.props.tab} {activeTab === child.key ? 'active' : ''}</div>
			)
		})
	}
    return(
        <TabsContainer>
			{renderTabs()}
			{renderTabPane()}
        </TabsContainer>
    )

	
}

const TabsContainer = styled.div`
`

Tabs.propTypes = {

};

Tabs.defaultProps = {

};

Tabs.TabPane = TabPane;

// export default Tabs;