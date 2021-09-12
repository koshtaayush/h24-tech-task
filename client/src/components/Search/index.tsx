//Library
import React from 'react'
import styled from 'styled-components'

//Resuable Components
import Input from './../Input'

interface Props {
    placeholder: string
    value: string
    onChangeProp: (value: string) => void
}

const Search: React.FC<Props> = (props) => {

    const { placeholder, value, onChangeProp } = props;

    return (
        <React.Fragment>
            <TopSection>
                <InputContainer>
                    <Input
                        onChangeProp={onChangeProp}
                        inputValue={value}
                        placeHolderText={placeholder}
                        test-id="searchInput"
                    />
                </InputContainer>
            </TopSection>
        </React.Fragment>
    )
}

export default Search

const TopSection = styled.div`
`

const InputContainer = styled.div`
    position: relative;
`
