import React, { useState } from "react";
import styled from "styled-components";
import Background from "../../ui/background";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <Background>
      <FormCard onSubmit={submitForm}>
        <TopWrap>
          <Welcome>
            <div>Welcome!</div>
            <p>Let's get back to work</p>
          </Welcome>
          <InputWrap>
            <div>
              <Input
                type="email"
                placeholder="Email address"
                {...register("email")}
              />
              <p>{errors?.email && errors?.email?.message}</p>
            </div>

            <div>
              {" "}
              <Input
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <p>{errors?.password && errors?.password?.message}</p>
            </div>

            <ForgotPassword>Forgot password</ForgotPassword>
          </InputWrap>

          <RegisterBtn type="submit">Login</RegisterBtn>
          <Google>Continue with Google</Google>
        </TopWrap>

        <BottomWrap>
          <div>Already have an account?</div>
          <Link to="/register">
            <SecondaryButton>Sign up</SecondaryButton>
          </Link>
        </BottomWrap>
      </FormCard>
    </Background>
  );
};

export default Login;

const FormCard = styled.form`
  width: 650px;
  padding: 60px 32px;
  margin: 100px 0;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 500px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    margin: 60px 0;
    padding: 30px 32px;
  }
`;

const TopWrap = styled.div`
  width: 502px;
  height: 452px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 500px;
    align-items: center;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
    height: 352px;
    align-items: center;
  }
`;
const Google = styled.button`
  width: 502px;
  height: 76px;
  border: 1px solid #f39712;
  background-color: transparent;
  font-size: 24px;
  margin-top: 20px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    font-size: 18px;
    height: 50px;
  }
`;
const Welcome = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 70px;
  }
  div {
    font-size: 32px;
    color: #13a8be;
    font-weight: 600;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 23px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 13px;
    }
  }
`;

const InputWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    height: 150px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    color: #ff4040;
    font-weight: 500;
    font-size: 13px;
    margin-top: 7px;
  }
`;
const ForgotPassword = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  color: #13a8be;
  justify-content: flex-end;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 10px;
`;
const RegisterBtn = styled.button`
  width: 100%;
  height: 72px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #d1d1d1;
  font-size: 24px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 80%;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    font-size: 20px;
    height: 50px;
  }
`;

const SecondaryButton = styled(RegisterBtn)`
  background-color: transparent;
  border: solid 1px #f39712;
  color: #f39712;
  height: 60px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    font-size: 20px;
    height: 50px;
  }
`;
const Input = styled.input`
  width: 502px;
  height: 56px;
  padding: 10px 15px;
  border: 1px solid grey;
  border-radius: 4px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 400px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    height: 46px;
  }
`;
const BottomWrap = styled.div`
  width: 502px;
  height: 118px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
  border-top: 2px solid #13a8be;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 500px;
    align-items: center;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
    height: 90px;
  }
  div {
    width: 100%;
    height: 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 80%;
    }
  }
`;
