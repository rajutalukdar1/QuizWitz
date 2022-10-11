import React from 'react';


const Qus = ({ qus, handelAddToCart }) => {
    return (
        <div>

            <label>
                <input onClick={() => handelAddToCart(qus)} type="radio" name="correctAnswer" value={qus} />{qus}
            </label>
        </div>
    );
};

export default Qus;