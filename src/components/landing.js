import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background: url('https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2569&q=80') center center/cover;
    `

const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
`

const Primary = styled.h1`
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    padding: 3rem 0 0;
`

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
`

const Landing = () => (
    <Container>
    <Content>
      <Primary>Jason Li</Primary>
      <Secondary>Programmer, gamer, anime fan and a below-average to average artist and musician depending on the day. </Secondary>
    </Content>
    </Container>
)

export default Landing

// https://images.unsplash.com/photo-1492571350019-22de08371fd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1549&q=80
