import React, { useEffect } from "react";
import Background from "../../ui/background";
import styled from "styled-components";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const UploadBioData = () => {
  const schema = yup.object().shape({
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),
    phoneNo: yup.string().required("Please enter a phone number"),
    how_did_you_find_us: yup.string().required("Please provide details"),
    // date_of_birth: yup.string().required("Please provide your date of birth"),
    // gender: yup.string().required("Please select your gender"),
    // educational_level: yup.string().required("Please provide details"),
    // country_of_residence: yup.string().required("Please provide details"),
    // state_of_residence: yup.string().required("Please provide details"),
    // computer_skills_level: yup.string().required("Please provide details"),
    // do_you_have_laptop: yup.string().required("Please provide details"),
    // taken_a_software_dev_training: yup
    //   .string()
    //   .required("Please provide details"),
    // referral_code: yup.string(),
    // partner_sponsor: yup.string(),
    // password: yup.string().required("Enter your password"),
    // confirmPassword: yup
    //   .string()
    //   .oneOf([yup.ref("password")], "Password does not match"),
  });

  const URL = `http://localhost:5000/api-von/v1/auth`;
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({ resolver: yupResolver(schema) });

  const createProfile = handleSubmit(async (data) => {
    console.log(data);

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    // const res = await axios.post(`${URL}/create-profile/${}`)
  });

  // useEffect(() => {}, []);
  return (
    <>
      <Background>
        <FormCard onSubmit={createProfile}>
          <Wrapper>
            <Title>
              <div>Good to have you back!</div>
              <p>Enter your information to finish your application</p>
            </Title>

            <InputWrap>
              <GroupOne>
                <div>
                  <div className="wrapping-input">
                    <input
                      type="text"
                      placeholder="First name"
                      {...register("firstName")}
                    />{" "}
                    <p>{errors?.firstName && errors?.firstName?.message}</p>
                  </div>

                  <div className="wrapping-input">
                    <input
                      type="text"
                      placeholder="Last name"
                      {...register("lastName")}
                    />
                    <p>{errors?.lastName && errors?.lastName?.message}</p>
                  </div>
                </div>
                <div>
                  <div className="wrapping-input">
                    <input
                      type="text"
                      placeholder="Enter a phone number"
                      {...register("phoneNo")}
                    />{" "}
                    <p>{errors?.phoneNo && errors?.phoneNo?.message}</p>
                  </div>
                  <div className="wrapping-input">
                    <input
                      type="text"
                      placeholder="How did you find us"
                      {...register("how_did_you_find_us")}
                    />
                    <p>
                      {errors?.how_did_you_find_us &&
                        errors?.how_did_you_find_us?.message}
                    </p>
                  </div>
                </div>
              </GroupOne>
              <GroupTwo>
                <div>
                  <div className="wrapping-input">
                    <input
                      type="date"
                      placeholder="Date of birth"
                      data-placeholder="Date of birth"
                      required
                      aria-required="true"
                      {...register("date_of_birth")}
                    />
                    <p>
                      {errors?.date_of_birth && errors?.date_of_birth?.message}
                    </p>
                  </div>
                  <div className="wrapping-input">
                    <select name="Gender" required {...register("gender")}>
                      <option value="" disabled hidden>
                        Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <p>{errors?.gender && errors?.gender?.message}</p>
                  </div>
                </div>
                <div>
                  <div className="wrapping-input">
                    <select
                      name="Educational Level"
                      required
                      {...register("educational_level")}
                    >
                      <option value="" disabled hidden>
                        Educational Level
                      </option>
                      <option value={"college"}>College</option>
                      <option value={"bsc"}>BSc</option>
                      <option value={"others"}>Others</option>
                    </select>
                    <p>
                      {errors?.educational_level &&
                        errors?.educational_level?.message}
                    </p>
                  </div>
                  <div className="wrapping-input">
                    <select
                      name="Country of residence"
                      required
                      {...register("country_of_residence")}
                    >
                      <option value="" disabled hidden>
                        Country of residence
                      </option>
                      <option value={"Nigeria"}>Nigeria</option>
                      <option value={"Japan"}>Japan</option>
                      <option value={"Kenya"}>Kenya</option>
                      <option value={"Gabon"}>Gabon</option>
                    </select>
                    <p>
                      {errors?.country_of_residence &&
                        errors?.country_of_residence?.message}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="wrapping-input">
                    <select
                      name="State of residence"
                      required
                      {...register("state_of_residence")}
                    >
                      <option
                        defaultValue={"State of residence"}
                        disabled
                        hidden
                      >
                        State of residence
                      </option>
                      <option value={"Nigeria"}>Nigeria</option>
                      <option value={"Japan"}>Japan</option>
                      <option value={"Kenya"}>Kenya</option>
                      <option value={"Gabon"}>Gabon</option>
                    </select>
                    <p>
                      {" "}
                      {errors?.state_of_residence &&
                        errors?.state_of_residence?.message}
                    </p>
                  </div>
                  <div className="wrapping-input">
                    <select
                      name="Computer Skill Level"
                      required
                      {...register("computer_skill_level")}
                    >
                      <option
                        defaultValue={"Computer Skill Level"}
                        disabled
                        hidden
                      >
                        Computer Skills Level
                      </option>
                      <option value={"Pro"}>Pro</option>
                      <option value={"Mid"}>Mid</option>
                      <option value={"Junior"}>Junior</option>
                      <option value={"Beginner"}>beginner</option>
                    </select>
                    <p>
                      {errors?.computer_skill_level &&
                        errors?.computer_skill_level?.message}
                    </p>
                  </div>
                </div>
              </GroupTwo>
              {/* <GroupThree>
                <div className="radiowrap">
                  <div>
                    <p>Do you have access to a laptop?</p>
                    <RadioBox>
                      <div>
                        <input
                          type="radio"
                          id="yes"
                          value="true"
                          name="laptop"
                          {...register("do_you_have_laptop")}
                        />
                        <label htmlFor="yes">Yes</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="no"
                          value="false"
                          name="laptop"
                          {...register("do_you_have_laptop")}
                        />
                        <label htmlFor="no">No</label>
                      </div>
                    </RadioBox>
                  </div>
                  <p>
                    {" "}
                    {errors?.do_you_have_laptop &&
                      errors?.do_you_have_laptop?.message}
                  </p>
                </div>
                <div className="radiowrap">
                  <p>Have you taken a software development related training?</p>
                  <RadioBox>
                    <div>
                      <input
                        type="radio"
                        id="yes2"
                        name="training"
                        {...register("taken_a_software_dev_training")}
                      />
                      <label htmlFor="yes2">Yes</label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        id="no2"
                        name="training"
                        {...register("taken_a_software_dev_training")}
                      />
                      <label htmlFor="no2">No</label>
                    </div>
                  </RadioBox>
                </div>
              </GroupThree> */}
              {/* <GroupFour>
                <div>
                  <div className="referral">
                    <p>Are you referred? Enter your referral code</p>
                    <input
                      type="text"
                      placeholder="Enter referral code"
                      {...register("referralCode")}
                    />{" "}
                  </div>

                  <div className="partners">
                    <p>
                      Please select your sponsor, if you're under sponsorship
                      programme by any partnering organization below{" "}
                    </p>
                    <select
                      name="Sponsors"
                      required
                      {...register("partner_sponsor")}
                    >
                      <option
                        defaultValue={"Select your sponsor here"}
                        selected
                        disabled
                        hidden
                      >
                        Select your sponsor here
                      </option>
                      <option>UBA</option>
                      <option>Covenant University</option>
                      <option>RCCG City of David</option>
                      <option>Adanian Labs</option>
                    </select>
                  </div>
                </div>
              </GroupFour> */}
              {/* <GroupFive>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password")}
                  />{" "}
                  <input
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                  />
                </div>
              </GroupFive> */}
            </InputWrap>
            <ButtonWrap>
              <Button type="submit">Proceed</Button>
            </ButtonWrap>
          </Wrapper>
        </FormCard>
      </Background>
    </>
  );
};

export default UploadBioData;

const FormCard = styled.form`
  width: 894px;
  padding: 60px 32px;
  margin: 100px 0;
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 650px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
  }
`;

const Wrapper = styled.div`
  width: 780px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 650px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
  }
`;
const Title = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  color: #13a8be;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 280px;
  }
  div {
    font-size: 32px;
    font-weight: 600;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 22px;
      font-weight: 600;
    }
  }
  p {
    font-size: 16px;
    font-weight: 500;
    @media screen and (max-width: 425px) and (min-width: 320px) {
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

const InputWrap = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    height: 1200px;
  }
`;
const GroupOne = styled.div`
  width: 100%;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 630px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }
  div {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 10px; */
    background-color: #20cee9;

    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 630px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      height: 160px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      width: 300px;
    }

    .wrapping-input {
      background-color: #dbc8c8;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 80px;
      width: 370px;
      border: 1px solid;
      @media screen and (max-width: 425px) and (min-width: 320px) {
        width: 285px;
        height: 80px;
      }
      p {
        color: #ff0000;
        font-size: 13px;
        padding: 3px;
      }
    }

    input {
      width: 370px;
      height: 56px;
      padding: 10px;
      border-radius: 4px;
      border: #d3d3d3 1px solid;
      @media screen and (max-width: 996px) and (min-width: 700px) {
        width: 310px;
      }
      @media screen and (max-width: 425px) and (min-width: 320px) {
        width: 285px;
        height: 56px;
      }
      :focus {
        border: #20cee9 1px solid;
        outline: none;
      }
    }
  }
`;

const GroupTwo = styled(GroupOne)`
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 630px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    width: 300px;
  }

  input {
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 285px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      width: 285px;
      height: 56px;
    }
  }
  select {
    width: 370px;
    height: 56px;
    padding: 10px;
    border-radius: 4px;
    border: #d3d3d3 1px solid;
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 310px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      display: flex;
      flex-wrap: wrap;
      width: 285px;
      height: 56px;
    }
    :focus {
      border: #20cee9 1px solid;
      outline: none;
    }
  }

  input[type="date"]::before {
    content: attr(data-placeholder);
  }
  input[type="date"]:focus::before,
  input[type="date"]:valid::before {
    display: none;
  }
`;

const GroupThree = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 630px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 300px;
    height: 180px;
  }
  .radiowrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 60px;
    border: 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 4px;
    border: #d3d3d3 1px solid;
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 310px;
      height: 90px;
      margin-top: 10px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      height: 80px;
      width: 285px;
    }
    p {
      font-size: 13px;
    }
  }
`;
const RadioBox = styled.div`
  width: 350px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 285px;
  }
  div {
    height: 30px;
    width: 90px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    input {
      width: 20px;
      height: 20px;
      border: #d3d3d3 1px solid;
      :focus {
        border: #20cee9 1px solid;
        outline: none;
      }
    }
  }
`;

const GroupFour = styled.div`
  width: 100%;
  height: 110px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 630px;
    height: 130px;
    margin-top: 10px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 230px;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 110px;

    width: 100%;
    @media screen and (max-width: 996px) and (min-width: 700px) {
      width: 630px;
      height: 120px;
    }
    @media screen and (max-width: 425px) and (min-width: 320px) {
      height: 220px;
      flex-wrap: wrap;
      width: 300px;
      justify-content: center;
    }
    .referral {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 370px;
      height: 90px;
      @media screen and (max-width: 996px) and (min-width: 700px) {
        width: 310px;
        height: 120px;
      }
      @media screen and (max-width: 425px) and (min-width: 320px) {
        width: 285px;
        height: 120px;
        align-items: center;
      }
      input {
        width: 370px;
        height: 56px;
        padding: 10px;
        border-radius: 4px;
        border: #d3d3d3 1px solid;
        @media screen and (max-width: 996px) and (min-width: 700px) {
          width: 310px;
        }
        @media screen and (max-width: 425px) and (min-width: 320px) {
          width: 285px;
        }
        :focus {
          border: #20cee9 1px solid;
          outline: none;
        }
      }
      p {
        padding: 5px 10px;
        font-size: 14px;
        font-weight: 600;
        color: #20cee9;
        @media screen and (max-width: 996px) and (min-width: 700px) {
          font-weight: 500;
        }
        @media screen and (max-width: 425px) and (min-width: 320px) {
          text-align: center;
          font-weight: 500;
        }
      }
    }

    .partners {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 370px;
      height: 100px;
      @media screen and (max-width: 996px) and (min-width: 700px) {
        width: 310px;
        height: 120px;
      }
      @media screen and (max-width: 425px) and (min-width: 320px) {
        width: 285px;
        flex-wrap: wrap;
        height: 120px;
        align-items: center;
      }
      p {
        padding: 5px 10px;
        font-size: 14px;
        font-weight: 600;
        color: #20cee9;
        @media screen and (max-width: 996px) and (min-width: 700px) {
          font-weight: 500;
        }
        @media screen and (max-width: 425px) and (min-width: 320px) {
          width: 275px;
          text-align: center;
          font-weight: 500;
        }
      }
      select {
        width: 370px;
        height: 56px;
        padding: 10px;
        border-radius: 4px;
        border: #d3d3d3 1px solid;
        @media screen and (max-width: 996px) and (min-width: 700px) {
          width: 310px;
        }
        @media screen and (max-width: 425px) and (min-width: 320px) {
          width: 285px;
        }
        :focus {
          border: #20cee9 1px solid;
          outline: none;
        }
      }
    }
  }
`;

const GroupFive = styled(GroupOne)``;

const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  @media screen and (max-width: 996px) and (min-width: 700px) {
    width: 630px;
  }
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 300px;
  }
`;
const Button = styled.button`
  width: 500px;
  height: 70px;
  background-color: #d1d1d1;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  @media screen and (max-width: 425px) and (min-width: 320px) {
    width: 285px;
  }
`;
