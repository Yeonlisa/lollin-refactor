import React, { useState, useEffect } from 'react';
import useForm from '../../validation/useForm';
import validate from '../../validation/validate';
import axios from 'axios';
import {
  Container,
  Form,
  Title,
  LabelName,
  UpdateBtn,
  InputBox,
  LeaveBtn,
  InputArea,
} from '../../validation/formElements';
import HorizonLine from '../../modals/HorizonLine';
const jwt = require('jsonwebtoken')
require('dotenv').config();

const MyInfo = (history, {nickname, password}) => {
  const { handleChange, values, handleNew } = useForm(validate, submitForm);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [isLeaved, setIsLeaved] = useState(false);
  const [isAuth, setisAuth]= useState(true);


  function submitForm() {
    setIsSubmitted(true);
  }

  useEffect(() => {
    let decode 
    try {
      decode = jwt.verify(sessionStorage.jwt, process.env.REACT_APP_SECRET_KEY);
      if(decode.type === 'none'){
        setisAuth(false)
      }
    } catch(err) {
      console.log(err)
    }
  },[])



  const handleUpdate = async () => {
    if(!values.nickname && !values.password){
      alert('하나라도 입력해주세요!')
    } else {
    await axios
      .post(
        'https://lollinserver.link/user/update',
        {
          jwt : sessionStorage.jwt,
          nickname: values.nickname,
          password: values.password,
        },
        {
          'Content-Type': 'application/json',
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.status === 200) {
          setIsUpdated(true)
          setIsSubmitted(true)
          setTimeout(() => history.history.push("/"), 1000)
        } else if (res.data.message === 'insufficient datas') {
          alert('하나라도 입력해주세요!')
        }
      })
      .catch((err) => {
        console.error(err);
      });
    }
  };

  const handleLeave =  async () => {
    await axios
    .post('https://lollinserver.link/user/delete', 
    {
      jwt :sessionStorage.jwt,
    }
    )
    .then((res) => {
      if (res.status === 200) {
        setIsLeaved(true);
        sessionStorage.jwt = null;
        history.history.setisLogin(false);
        setTimeout(() => history.history.replace("/"), 1000)
      } else if (res.status === 400) {
        alert('Error')
      }
    })
    .catch((err) => {
      alert('Error')
    });
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleNew}>
          <Title>My Info</Title>
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
          </InputArea>
          {isAuth? '':<InputArea>
            <LabelName htmlFor="password">Password</LabelName>
            <InputBox
              id="password"
              type="password"
              name="password"
              placeholder="Enter your new Password"
              autoComplete="off"
              value={values.password}
              onChange={handleChange}
            />
          </InputArea>}
          <br />
          <UpdateBtn type="submit" onClick={handleUpdate}>
            {!isSubmitted ? 'Update' : 'Succeed!'}
          </UpdateBtn>
          <br />
          <HorizonLine />
          <LeaveBtn type="submit" onClick={handleLeave}>
            {!isLeaved? 'Leave' : 'Good-Bye!'}
          </LeaveBtn>
        </Form>
      </Container>
    </>
  );
};

export default MyInfo;
