import styled from 'styled-components'; 
import { FaTimes } from 'react-icons/fa';

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   padding-bottom: 15rem;
// `;

export const BackGround = styled.img`
  position: absolute;
  width: 100%;
  height: 178vh;
  filter: blur(1.8px);
  top: 2rem;
  z-index: 2;
`;

export const BgSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 178vh;
  z-index: 3;
  position: relative;
  place-items: center;
  background-color: #0000008f;
  padding-top: 2rem;
`;


export const Container = styled.div`
  margin: 100px auto;
  width: 800px;
  position: relative;
  border-radius: 10px;
  height: 700px;
  display: flex;
  z-index: 10;
  
  @media (max-width: 768px) {
    margin: 50px auto;
    /* margin-left: 20px;
    margin-right: 20px; */
    width: 400px;
  }
`;

export const Form = styled.form`
  background-color: rgba(0,0,0);
  position: absolute;
  top: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 97%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const CloseIcon = styled(FaTimes)`
  cursor: pointer;
  position: absolute;
  color: #fff;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Title = styled.h1`
  font-size: 48px;
  text-align: start;
  width: 80%;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #fff;
`;

export const InputArea = styled.div`
  background-color: rgba(0,0,0,0.8);
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  width: 80%;
`;

export const LabelName = styled.label`
  display: inline-block;
  margin-bottom: 6px;
  color: #fff;
  font-size: 22px;
`;

export const InputBox = styled.input`
  display: block;
  padding-left: 10px;
  outline: 0;
  border-width: 0 0 2px;
  border-radius: 2px;
  height: 40px;
  width: 99.2%;
  font-size: 19px;
  border-bottom-color: #fff!important;
  background-color: rgba(0,0,0,0.8);
  color: #fff;
  
  ::placeholder {
    color: #595959;
    font-size: 17px;
  }
`;

export const Errors = styled.p`
  font-size: 0.75rem;
  margin-top: 0.5rem;
  color: #f00e0e;
`;

export const LoginBtn = styled.button`
  width: 81.3%;
  height: 50px;
  margin-top: 15px;
  border-radius: 2px;
  background: #0080ff;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #00ffff;
    color: #000;
  }
`;

export const KakaoBtn = styled.button`
  width: 81.3%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background-color: rgba(0,0,0,0.8);
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #ffff00;
    color: #000;
  }
`;

export const SignupBtn = styled.button`
  width: 81.3%;
  height: 50px;
  margin-top: 15px;
  border-radius: 2px;
  background: #0080ff;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #00ffff;
    color: #000;
  }
`;

export const UpdateBtn = styled.button`
  width: 81.3%;
  height: 50px;
  margin-top: 15px;
  border-radius: 2px;
  background: #0080ff;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #00ffff;
    color: #000;
  }
`;

export const LeaveBtn = styled.button`
  width: 81.3%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background-color: rgba(0,0,0,0.8);
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  
  &:hover {
    cursor: pointer;
    background-color: #e0e0e0;
    color: #000;
  }
`;
