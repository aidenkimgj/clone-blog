import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const generatePage = page => {
    // const component = () => require(`./pages/${page}`).default;
    const Component = require(`./pages/${page}`).default;
    try {
        // return React.createElement(component());
        return <Component/>
    } catch(err) {
        console.warn(err);
        return React.createElement(() => 404);
    } 
}

export default function PageRederer() {
    const {
        params: { page }
    } = useRouteMatch();

    return generatePage(page);
}