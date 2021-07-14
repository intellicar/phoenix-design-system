import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TabPane = ({tab, key, ...props }) => {

    return(
        <TabPaneContainer>{props.children}</TabPaneContainer>
    )
}

const TabPaneContainer = styled.div`
    padding: 0.5rem;
    flex:1;
`

TabPane.propTypes = {

};

TabPane.defaultProps = {

};