import React from 'react'

const LoadingImage = () => {
    return (
        <div className="loading">
            <div className="container">
                <div className="ring"></div>
                <div className="ring"></div>
                <div className="ring"></div>
                <p>Loading...</p>
            </div>
        </div>
    )
}

export default LoadingImage;