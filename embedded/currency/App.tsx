import React, { useEffect, useState } from 'react';

function App() {
    let [currency, setCurrency] = useState('300$');

    useEffect(() => {
        setTimeout(() => {
            setCurrency('5000$');
        }, 3000);
    }, []);

    return (
        <div>
            <p>{currency}</p>
            <p></p>
        </div>
    );
}

export default App;
