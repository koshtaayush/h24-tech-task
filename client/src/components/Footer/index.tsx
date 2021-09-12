//Library
import React from 'react'
import styled from 'styled-components'

interface Props {}

const Footer: React.FC<Props> = (props) => {
    return (
        <Container>
            Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und
            Versandkosten.
        </Container>
    )
}

export default Footer

const Container = styled.div`
    background-color: lightblue;
    text-align: center;
`
