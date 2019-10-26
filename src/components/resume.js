import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
background: #303030;
  padding: 5rem 0;
`

const Content = styled.div`
padding: 3rem;
max-width: 100rem;
margin: 0 auto;
display: flex;
align-items: center;
`

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  padding: 0 3rem;
  font-weight: 300;
  max-width: 100rem;
  margin: 0 auto;
`

const Tertiary = styled.h4`
color: #afafaf;
font-weight: 300;
font-size: 2.5rem;
padding-top: 1.5rem;
`


const Details = styled.p`
    margin: 0 auto;
    text-align: justify;
`

const Body = styled.span`

`

const Image = styled.img`
  width: 40rem;
  height: 40rem;
  object-fit: cover;
  padding: 0 3rem;
`

const Resume = () => (
    <Container>
    <Secondary>My experience</Secondary>
    <Content>
      <Body>
        <Tertiary>Projects</Tertiary>
        <Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris augue neque gravida in fermentum. Elementum tempus egestas sed sed risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem viverra aliquet eget sit.
        </Details>
      </Body>
      <Image src='https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80'/>
    </Content>
    <Content>
        <Image src='https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'/>
        <Body>
        <Tertiary>Education</Tertiary>
        <Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris augue neque gravida in fermentum. Elementum tempus egestas sed sed risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem viverra aliquet eget sit.
        </Details>
        </Body>
    </Content>
    <Content>
      <Body>
        <Tertiary>Work</Tertiary>
        <Details>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Vel pretium lectus quam id leo in vitae. Curabitur gravida arcu ac tortor. Quam elementum pulvinar etiam non quam lacus suspendisse. Ac auctor augue mauris augue neque gravida in fermentum. Elementum tempus egestas sed sed risus pretium. Magna fringilla urna porttitor rhoncus dolor purus non enim. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Scelerisque eleifend donec pretium vulputate sapien. Et molestie ac feugiat sed lectus. Urna molestie at elementum eu facilisis sed. At ultrices mi tempus imperdiet. Dignissim diam quis enim lobortis. Cras pulvinar mattis nunc sed. Neque convallis a cras semper. Mauris a diam maecenas sed enim ut sem viverra aliquet. Dictum at tempor commodo ullamcorper. Sodales ut etiam sit amet. Maecenas sed enim ut sem viverra aliquet eget sit.
        </Details>
            </Body>
            <Image src='https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80'/>
      </Content>

    </Container>
)

export default Resume
