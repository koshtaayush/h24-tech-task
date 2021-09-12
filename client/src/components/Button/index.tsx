//Library
import React from 'react'
import styled from 'styled-components'

interface Props {
    onClickProp: () => void
    buttonType: 'S' | 'L'
    disabled: boolean
    buttonText: string
}

const Button: React.FC<Props> = (props) => {
    const { onClickProp, buttonType, disabled, buttonText } = props

    return (
        <React.Fragment>
            <ButtonContainer
                type="button"
                name="sendMessage"
                onClick={onClickProp}
                disabled={disabled}
                buttonType={buttonType}
                test-id={'buttonTest'}>
                {buttonText}
            </ButtonContainer>
        </React.Fragment>
    )
}

export default Button

interface IButtonContainer {
    buttonType: string
    disabled: boolean
}

const ButtonContainer = styled.button<IButtonContainer>`
    background: #fff;
    width: 100%;
    font-weight: 500;
    font-size: 0.75rem;
    text-transform: uppercase;
    display: inline-block;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 0.0625rem solid #a9abb3;
    margin-top: 0.5rem;
`
