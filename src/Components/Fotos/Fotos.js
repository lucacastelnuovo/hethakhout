import React from 'react';
import useLocalStorage from 'Utils/useLocalStorage';
import Loader from 'Components/Loader';
import Foto from './Foto';

const Fotos = () => {
    const [data] = useLocalStorage('fotoData');

    return (
        <div className="columns is-multiline">
            {!data && <Loader />}
            {data && data.map(foto => <Foto key={foto.id} data={foto} />)}
        </div>
    );
};

export default Fotos;