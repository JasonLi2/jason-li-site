import React from 'react'
import styled from 'styled-components'

const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 3rem 3rem;
  justify-content: center;
  height: 100%;
  align-items: center;
`

const TextInput = styled.input`
font-weight: 400;
width: 100%;
margin-bottom: 2rem ;
height: 3.5rem;
padding: .5rem 1.5rem;
border-radius: 5px;
outline: none;
border: none;
background: #606060;
  color: #efefef;
  font-size: 1.6rem;
  &::placeholder{
      color: #afafaf;
  }
`

const TextArea = styled.textarea`
font-weight: 400;
width: 100%;
margin-bottom: 2rem ;
padding: .75rem 1.5rem;
border-radius: 5px;
outline: none;
border: none;
background: #606060;
  color: #efefef;
  font-size: 1.6rem;
  height: 20rem;
  &::placeholder{
      color: #afafaf;
  }
`

const Submit = styled.button`
font-weight: 400;
height: 3.5rem;
padding: .75rem 1.5rem;
border-radius: 5px;
width: 50%;
outline: none;
border: none;
background: #606060;
  color: #efefef;
  font-size: 1.6rem;
  background: #606060;
`


const Form = ({details, handleChange, handleSubmit}) => {
  return(
    <Container>
      <TextInput type='text' name='name' placeholder='Name' value={details.name || ""} onChange={handleChange}/>
      <TextInput type='text' name='email' placeholder='Email' value={details.email || ""} onChange={handleChange}/>
      <TextArea placeholder="Message" name='message' value={details.message || ""} onChange={handleChange}/>
      <Submit onClick={handleSubmit}>Submit</Submit>
    </Container>
  )
}

export default Form
