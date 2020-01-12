import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router';
import useData from 'Utils/useData';

const Redirect = ({ route }) => {
    const { openNewTab } = route;
    const { src } = useParams();
    const history = useHistory();
    const data = useData('redirectData', 'GET_BY', src, 'redirect_from');

    useEffect(() => {
        if (data) {
            if (openNewTab) {
                window.open(data.redirect_to);
                history.goBack();
            } else {
                window.location.replace(data.redirect_to);
            }
        }
    }, [data, history, openNewTab]);

    return (
        <>
            <h1>Redirecting...</h1>
        </>
    );
};

Redirect.propTypes = {
    openNewTab: PropTypes.bool
};

export default Redirect;
