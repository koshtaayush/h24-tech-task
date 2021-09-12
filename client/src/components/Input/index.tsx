//Library
import React from 'react'
import styled from 'styled-components'

interface Props {
    onChangeProp: (val: string) => void
    inputValue: string
    placeHolderText: string
}

const Input: React.FC<Props> = (props) => {
    const { onChangeProp, inputValue, placeHolderText } = props

    /**
     * Function to change the value of input
     */
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        if (onChangeProp) {
            onChangeProp(value)
        }
    }

    return (
        <React.Fragment>
            <InputBox
                type="text"
                placeholder={placeHolderText}
                onChange={handleInputChange}
                value={inputValue}
                test-id="input"
            />
        </React.Fragment>
    )
}

export default Input

const InputBox = styled.input`
    font-size: 0.875rem;
    height: 1.25rem;
    line-height: 1.5rem;
    width: 95%;
    color: #000;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    padding: 0.5rem 0.625rem 0.625rem;
    margin: 0;
    outline: 0;
    border: 0.0625rem solid #f5f5f6;
    /* border-left-color: rgb(245, 245, 246);
    border-left-style: solid;
    border-left-width: 0.0625rem; */
    border-radius: 0 0.25rem 0.25rem 0;
    /* border-left: 0; */
    background: #f5f5f6;

    &:focus {
        background-color: #fff;
        border-color: #eaeaec;
    }
`
