import React, { useEffect, useState } from "react";
import Background from "../../ui/background";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    re_email: yup.string().oneOf([yup.ref("email"), null], "Email must match"),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({ resolver: yupResolver(schema) });

  const baseURL = `http://localhost:5000/api-von/v1`;
  const url = `${baseURL}/auth/register`;

  const submitForm = handleSubmit(async (data) => {
    console.log(data);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios
      .post(url, data, config)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    navigate("/check-email");
    reset();
  });

  // const PROXY_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fapi-von%2Fv1%2Fauth%2Fgoogle%2Fcallback&scope=email%20profile&client_id=758955789613-bllr1fa03mqli9dq21ag03k83c6gvbu6.apps.googleusercontent.com`;
  // axios.defaults.headers.common["Origin"] = PROXY_URL;

  const google = async () => {
    // await axios
    //   .get(`${baseURL}/auth/google`, {
    //     headers: {
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));

    await fetch(`${baseURL}/auth/google`, {
      method: "GET",
      mode: "cors",
      headers: {
        // Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Background>
        <FormCard>
          <TopWrap onSubmit={submitForm}>
            <Welcome>
              <div>Your tech journey starts here</div>
              <p>Sign up to create an account</p>
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
                <Input
                  type="email"
                  placeholder="Re-enter email address"
                  {...register("re_email")}
                />
                <p>{errors?.re_email && errors?.re_email?.message}</p>
              </div>
            </InputWrap>
            <Terms>
              <p>
                By applying for the internship, I agree to{" "}
                <span style={{ color: "#F39712", marginLeft: "3px" }}>
                  Adanian
                </span>
                <span style={{ color: "#13A8BE", marginRight: "3px" }}>
                  Labs
                </span>{" "}
                Terms and Conditions and Privacy Policy
              </p>
            </Terms>
            <RegisterBtn type="submit">Register</RegisterBtn>
          </TopWrap>
          <Google onClick={() => google()}>Continue with Google</Google>
          <BottomWrap>
            <div>Already have an account?</div>
            <Link to="/login">
              <SecondaryButton>Login</SecondaryButton>
            </Link>
          </BottomWrap>
        </FormCard>
      </Background>
    </>
  );
};

export default Register;
const FormCard = styled.div`
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

const TopWrap = styled.form`
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

  margin-bottom: 10px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 80px;
    text-align: center;
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
  height: 165px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin-bottom: 10px; */
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

const Terms = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 11px;
`;
const RegisterBtn = styled.button`
  width: 100%;
  height: 72px;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  background-color: #d1d1d1;
  font-size: 24px;
  margin-top: 10px;
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
  }
`;
