import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TabPane = ({tab, key, ...props }) => {
    return(
        <TabPaneContainer>Tabs Pane</TabPaneContainer>
    )
}

const TabPaneContainer = styled.div`
`

TabPane.propTypes = {

};

TabPane.defaultProps = {

};