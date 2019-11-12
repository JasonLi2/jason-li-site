import React, { useState } from "react";
import styled from "styled-components";
import Form from "./form";

const Container = styled.section`
  margin: 0 auto;
`;

const Content = styled.div`
  background: url("https://images.unsplash.com/photo-1490100667990-4fced8021649?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1504&q=80")
    center center/cover;
  height: 65rem;
  position: relative;
`;

const Secondary = styled.h3`
  color: #fff;
  font-size: 3rem;
  font-weight: 300;
  padding: 3rem;
`;

const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  background-color: #404040;
  border-radius: 5px;
  width: 45rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media only screen and (max-width: 39em) {
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 6rem);
  }
`;

const Contact = () => {
  const [details, setDetails] = useState({});

  const handleChange = e => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await fetch(
      "https://0v1lxszhha.execute-api.us-west-2.amazonaws.com/dev",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(details)
      }
    );
    setDetails({
      name: "",
      email: "",
      message: ""
    });
    console.log(details);
  }

  return (
    <Container id="contact">
      <Content>
        <FormWrapper>
          <Secondary>Contact me</Secondary>
          <Form
            details={details}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </FormWrapper>
      </Content>
    </Container>
  );
};

export default Contact;
