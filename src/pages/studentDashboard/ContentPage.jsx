import {
  ArrowBack,
  CalendarToday,
  CalendarTodayOutlined,
  CalendarViewDayOutlined,
  Cancel,
  CancelOutlined,
  CancelRounded,
  CancelSharp,
  Home,
  Note,
  PhoneAndroid,
  Search,
} from "@mui/icons-material";
// import { Calendar } from "antd";
import React from "react";
import styled from "styled-components";

const ContentPage = () => {
  return (
    <Container>
      <Wrapper>
        <HeaderComp>
          <LeftComp>
            <HeadingContent>
              <BackButtonAndDesc>
                <BackButtonComp>
                  <ArrowBack />
                </BackButtonComp>
                <TitleAndTime>
                  <Title>UI/UX Design Conference Meeting</Title>
                  <Time>19 lesson 6h 29min</Time>
                </TitleAndTime>
              </BackButtonAndDesc>
              <SearchComp>
                <SearchIcon>
                  <Search />
                </SearchIcon>
                <SearchInput placeholder="Search here" />
                <SearchIcon>
                  <CancelSharp />
                </SearchIcon>
              </SearchComp>
            </HeadingContent>
          </LeftComp>
          <NextLesson>Next Lesson</NextLesson>
        </HeaderComp>
        <VideoContentComp>
          <VideoAndActions>
            <VideoComp controls />
            <ActionsComp>
              <ActionsCompWrapper>
                <ActionLeftComp>
                  <IconAndText bg="rgb(0,0,230,0.3)" cl="rgb(0,0,255)">
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Save Note</ActionText>
                  </IconAndText>
                  <IconAndText
                    bg="rgb(0,215,230,0.1)"
                    cl="rgb(0,255,255)"
                    mg="0px 10px"
                  >
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Discussion</ActionText>
                  </IconAndText>
                  <IconAndText bg="rgb(255,0,230,0.3)" cl="rgb(255,0,255)">
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Addd to Calendar</ActionText>
                  </IconAndText>
                </ActionLeftComp>
                <ActionRightComp>
                  <IconAndText bg="rgb(0,0,230,0.3)" cl="rgb(0,0,255)">
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Save Note</ActionText>
                  </IconAndText>
                  <IconAndText
                    bg="rgb(0,0,230,0.3)"
                    cl="rgb(0,0,255)"
                    mg="0px 10px"
                  >
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Save Note</ActionText>
                  </IconAndText>
                  <IconAndText bg="rgb(0,0,230,0.3)" cl="rgb(0,0,255)">
                    <ActionIcon>
                      <Note />
                    </ActionIcon>
                    <ActionText>Save Note</ActionText>
                  </IconAndText>
                </ActionRightComp>
              </ActionsCompWrapper>
            </ActionsComp>
          </VideoAndActions>
          <LessonsLearn>
            <LessonsLearWrapper>
              <LessonHeading>
                <LessonHeadingTitle>Lesson learn for you</LessonHeadingTitle>
                <Icon>
                  <CalendarToday />
                </Icon>
              </LessonHeading>
              <LessonItemHolder>
                <LessonItem>
                  <IconAndLessonTitle>
                    <Icon>
                      <PhoneAndroid fontSize="30px" />
                    </Icon>
                    <LessonTitle>Lesson 03 : Learn about Xd</LessonTitle>
                  </IconAndLessonTitle>
                  <Period>20 mins</Period>
                </LessonItem>
                <LessonItem>
                  <IconAndLessonTitle>
                    <Icon>
                      <PhoneAndroid fontSize="30px" />
                    </Icon>
                    <LessonTitle>Lesson 03 : Learn about Xd</LessonTitle>
                  </IconAndLessonTitle>
                  <Period>20 mins</Period>
                </LessonItem>
                <LessonItem>
                  <IconAndLessonTitle>
                    <Icon>
                      <PhoneAndroid fontSize="30px" />
                    </Icon>
                    <LessonTitle>Lesson 03 : Learn about Xd</LessonTitle>
                  </IconAndLessonTitle>
                  <Period>20 mins</Period>
                </LessonItem>
                <LessonItem>
                  <IconAndLessonTitle>
                    <Icon>
                      <PhoneAndroid fontSize="30px" />
                    </Icon>
                    <LessonTitle>Lesson 03 : Learn about Xd</LessonTitle>
                  </IconAndLessonTitle>
                  <Period>20 mins</Period>
                </LessonItem>
              </LessonItemHolder>
            </LessonsLearWrapper>
          </LessonsLearn>
        </VideoContentComp>
      </Wrapper>
    </Container>
  );
};

export default ContentPage;

const ActionText = styled.div`
  font-size: 10px;
  margin-left: 5px;
`;

const ActionIcon = styled.div``;

const IconAndText = styled.div`
  padding: 8px 17px;
  background-color: ${({ bg }) => bg};
  color: ${({ cl }) => cl};
  margin: ${({ mg }) => mg};
  display: flex;
  border-radius: 5px;
  align-items: center;
  cursor: pointer;
`;

const Period = styled.div`
  padding: 7px;
  border-radius: 5px;
  background-color: tomato;
  font-size: 10px;
  color: white;
`;

const LessonTitle = styled.div`
  margin-left: 7px;
  font-size: 12px;
  font-weight: 500;
`;

const IconAndLessonTitle = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: orange;
`;

const LessonHeadingTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const LessonItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid silver;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
`;

const LessonItemHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const LessonHeading = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const LessonsLearWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ActionRightComp = styled.div`
  display: flex;
  align-items: center;
`;

const ActionLeftComp = styled.div`
  display: flex;
  align-items: center;
`;

const ActionsCompWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ActionsComp = styled.div`
  width: 100%;
  display: flex;
  background-color: white;
  height: 70px;
  box-shadow: 1px 1px 1px lightgray;
  justify-content: center;
`;

const VideoComp = styled.video`
  height: 450px;
  /* background-color: red; */
  width: 100%;
`;

const LessonsLearn = styled.div`
  width: 300px;
  display: flex;
  justify-content: center;
  background-color: white;
  margin-left: 50px;
`;

const VideoAndActions = styled.div`
  flex: 1;
`;

const SearchInput = styled.input`
  background-color: transparent;
  flex: 1;
  border: none;
  outline: none;
`;

const SearchIcon = styled.div`
  color: gray;
  cursor: pointer;
  background-color: transparent;
  margin: 0 5px;
`;

const SearchComp = styled.div`
  background-color: white;
  display: flex;
  padding: 8px;
  width: 330px;
  color: white;
  align-items: center;
  height: 40px;
  border-radius: 5px;
  outline: 2px solid lightgray;
`;

const Time = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: gray;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 5px;
`;

const TitleAndTime = styled.div``;

const BackButtonComp = styled.div`
  background-color: purple;
  cursor: pointer;
  transition: all 550ms;
  font-size: 12px;
  color: white;
  padding: 6px 9px;
  margin-right: 20px;
  border-radius: 5px;
  :hover {
    transform: scale(1.02);
  }
`;

const BackButtonAndDesc = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
`;

const HeadingContent = styled.div`
  display: flex;
`;

const NextLesson = styled.div`
  padding: 14px 20px;
  background-color: tomato;
  color: white;
  display: flex;
  border-radius: 4px;
  cursor: pointer;
  transition: all 550ms;
  font-size: small;
  :hover {
    transform: scale(1.02);
  }
`;

const LeftComp = styled.div`
  display: flex;
`;

const VideoContentComp = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HeaderComp = styled.div`
  margin-top: 30px;
  margin-bottom: 60px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #fafcff;
  justify-content: center;
`;
