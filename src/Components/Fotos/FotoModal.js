import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import useClickOutside from 'Utils/useClickOutside';
import useData from 'Utils/useData';
import PropTypes from 'prop-types';

const FotoModal = ({ id }) => {
    const data = useData('fotoData', 'GET', 'id', parseInt(id));
    const full_url = data?.foto?.data?.full_url;
    const clickRef = useRef();

    useClickOutside(clickRef, () => handleClick());

    const history = useHistory();
    const handleClick = () => {
        history.push('/impressie');
    };

    if (!data) {
        handleClick();
    }

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div ref={clickRef} className="modal-content">
                <p className="image">
                    <img src={full_url} alt="Impressie Foto || Het Hak Hout" />
                </p>
                {data?.description && (
                    <p className="subtitle has-text-white">
                        {data.description}
                    </p>
                )}
            </div>
            <button
                className="modal-close is-large"
                aria-label="close"
                onClick={() => handleClick()}
            ></button>
        </div>
    );
};

FotoModal.propTypes = {
    id: PropTypes.string.isRequired,
};

export default FotoModal;
