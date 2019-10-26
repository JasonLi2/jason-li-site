import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    margin-top: 5rem;
    width: 100%;
    background-color: #555;
    padding: 5rem;
`

const Name = styled.h3`
    color: #f0f0f0;
    text-transform: uppercase;
    text-align: center;
`

const Footer = () => (
    <Container>
        <Name>Jason Li</Name>
    </Container>
)

export default Footer