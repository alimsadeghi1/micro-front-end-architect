// * Import React
import React, { useState } from 'react';

// * Import UI libraries
import { Container } from 'react-bootstrap';

function Home() {
    const [localStorageText, setLocalStorageText] = useState('');

    const clearLocalStorage = () => {
        localStorage.clear();
    };

    const addDataToLocalStorage = () => {
        localStorage.setItem('test', localStorageText);
    };

    return (
        <Container>
            <h2>Welcome to Micro Front End Architecture</h2>
            <div className='mt-5'>
                <label className='d-block mb-3'>
                    Add something in local storage 😉 .
                </label>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Enter whatever you want ...'
                    value={localStorageText}
                    onChange={(e) => setLocalStorageText(e.target.value)}
                />
                <button
                    onClick={addDataToLocalStorage}
                    className='btn btn-primary mt-3 px-5'
                >
                    Save
                </button>
                <button
                    onClick={clearLocalStorage}
                    className='btn btn-outline-danger ms-2 mt-3 px-5'
                >
                    Clear LocalStorage
                </button>
            </div>
        </Container>
    );
}

export default Home;
