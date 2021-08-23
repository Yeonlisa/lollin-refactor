import React, { useState } from 'react';
import useForm from '../../validation/useForm';
import validate from '../../validation/validate';
import axios from 'axios';
import {
  Container,
  Form,
  CloseIcon,
  InputArea,
  Errors,
  InputBox,
  LabelName,
  SignupBtn,
  Title,
} from '../../validation/formElements';

const Signup = (history, { submitForm, username, password, nickname, email }) => {
  const { handleChange, values, handleSubmit, errors, handleClose } = useForm(
    submitForm,
    validate
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const handleSignup = async () => {
    await axios
      .post(
        'https://lollinserver.link/user/signup',
        {
          username: values.username,
          password: values.password,
          nickname: values.nickname,
          email: values.email,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        }
      )
      .then((res) => {
        if(res.status === 200) {
          submitForm();
          setTimeout(() => history.history.push("/"), 1000)
        } else if (res.status === 409 || res.status === 400) {
          alert('아이디 혹은 닉네임이 중복되었습니다')
        }
      })
      .catch((err) => {
        alert('회원가입 실패! 다시 작성해 주세요!')
      });
  };

  return (
    <>
        <Container>
          <Form onSubmit={handleSubmit}>
            <CloseIcon onClick={handleClose} />
            <Title>Sign Up</Title>
            <InputArea>
              <LabelName htmlFor="username">ID</LabelName>
              <InputBox
                id="username"
                type="text"
                name="username"
                placeholder="Enter your ID"
                autoComplete="off"
                value={values.username}
                onChange={handleChange}
              />
              {errors.username && <Errors>{errors.username}</Errors>}
            </InputArea>
            <InputArea>
              <LabelName htmlFor="password">Password</LabelName>
              <InputBox
                id="password"
                type="password"
                name="password"
                placeholder="8 characters or more Password"
                autoComplete="off"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <Errors>{errors.password}</Errors>}
            </InputArea>
            <InputArea>
              <LabelName htmlFor="nickname">LoL-Nickname</LabelName>
              <InputBox
                id="nickname"
                type="text"
                name="nickname"
                placeholder="Enter your LoL-Nickname"
                autoComplete="off"
                value={values.nickname}
                onChange={handleChange}
              />
              {errors.nickname && <Errors>{errors.nickname}</Errors>}
            </InputArea>
            <InputArea>
              <LabelName htmlFor="email">E-mail</LabelName>
              <InputBox
                id="email"
                type="email"
                name="email"
                placeholder="Enter your E-mail"
                autoComplete="off"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <Errors>{errors.email}</Errors>}
            </InputArea>
            <SignupBtn type="submit" onClick={handleSignup}>
              {!isSubmitted ? 'Submit' : 'Welcome!'}
            </SignupBtn>
          </Form>
        </Container>
    </>
  );
};

export default Signup;
