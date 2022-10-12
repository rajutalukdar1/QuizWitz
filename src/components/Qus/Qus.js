import React from 'react';


const Qus = ({ qus, handelAddToCart, id }) => {
    return (
        <div>

            <label>
                <input onClick={() => handelAddToCart(qus)} type="radio" name={id} value={qus} />{qus}
            </label>
        </div>
    );
};

export default Qus;