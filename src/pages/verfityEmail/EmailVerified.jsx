import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
const EmailVerified = () => {
  const { id, token } = useParams();

  console.log({ id, token });

  const url = `http://localhost:5000/api-von/v1/auth`;

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`${url}/verify-email/${id}/${token}`);
      console.log(data);
    })();
  }, [id, token]);
  return (
    <>
      <Container>
        <Wrapper>
          <Message>Congratulations you are now verified!!!</Message>
          <Action>
            You are required to fill in your bio-data to complete your
            registration, as this will help us create your profile.
          </Action>
          <Continue to={"/biodata"}>Click here to Continue</Continue>
        </Wrapper>
      </Container>
    </>
  );
};

export default EmailVerified;

const Container = styled.div``;
const Wrapper = styled.div``;
const Message = styled.div``;
const Action = styled.div``;
const Continue = styled(Link)``;
