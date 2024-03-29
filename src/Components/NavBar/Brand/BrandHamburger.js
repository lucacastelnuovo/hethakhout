import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import MenuLink from '../Menu/MenuLink';

const BrandHamburger = ({ hamburgerOpen, hamburgerClick }) => {
    const classes = classNames('navbar-burger', 'burger', {
        'is-active': hamburgerOpen
    });

    return (
        <>
            <MenuLink
                to="/redirect/instagram"
                className="navbar-item is-hidden-desktop"
            >
                <span className="icon" style={{ color: '#333' }}>
                    <FontAwesomeIcon icon={faInstagram} />
                </span>
            </MenuLink>
            <div className={classes} onClick={hamburgerClick}>
                <span />
                <span />
                <span />
            </div>
        </>
    );
};

BrandHamburger.propTypes = {
    hamburgerOpen: PropTypes.bool.isRequired,
    hamburgerClick: PropTypes.func.isRequired
};

export default BrandHamburger;
