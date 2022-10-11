import React from 'react';

const Qus = ({ qus }) => {
    return (
        <div>
            <label>
                <input type="radio" name="correctAnswer" value={qus} />{qus}
            </label>
        </div>
    );
};

export default Qus;