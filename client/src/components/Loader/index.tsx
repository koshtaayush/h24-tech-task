import React from 'react'
import './LoaderStyle.css'

type LoaderProps = {
    width?: string
    loaderHeight?: string
    loaderStyles?: object
}

class Loader extends React.Component<LoaderProps> {
    render() {
        const loaderStyles = this.props.loaderStyles || {}

        return (
            <div
                className="loader"
                style={{
                    height: this.props.loaderHeight || '100%',
                    ...loaderStyles,
                }}>
                <svg
                    className="circular"
                    style={{ width: this.props.width || '60px' }}
                    viewBox="25 25 50 50">
                    <circle
                        className="path"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                    />
                </svg>
            </div>
        )
    }
}

export default Loader
