import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TabPane } from './TabPane';

export const Tabs = ({ defaultActiveKey, onChange, ...props }) => {

	useEffect(() => {
		console.log(props);
	})

    return(
        <TabsContainer>
			<TabPane />
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