// * Import React
import React from 'react';

function Loading() {
    return (
        <div className='text-center vh-100 d-flex align-items-center justify-content-center'>
            <div className='d-flex flex-column align-items-center'>
                <div
                    className='spinner-border mb-4'
                    role='status'
                    style={{ width: '3rem', height: '3rem' }}
                >
                    <span className='visually-hidden'>Loading...</span>
                </div>
                <span className='h4'>Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
