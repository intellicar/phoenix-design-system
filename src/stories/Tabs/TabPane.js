import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TabPane = ({tab, key, ...props }) => {

    useEffect(() => {
		console.log("child props",props);
        console.log("child tab",tab);
	})

    return(
        <TabPaneContainer>{props.children}</TabPaneContainer>
    )
}

const TabPaneContainer = styled.div`
`

TabPane.propTypes = {

};

TabPane.defaultProps = {

};