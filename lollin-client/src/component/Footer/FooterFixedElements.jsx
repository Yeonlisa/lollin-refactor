import styled from "styled-components";
import FooterLogo from "../../Images/logo3.png";
import FooterLogo2 from "../../Images/logo4.png";

export const Container = styled.div`
  padding: 20px 10px;
  background: #000;
  color: #fff;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Logo = styled.a`
  color: #ffbb72;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 10px;
  padding: 0;
  height: 100px;
  background-image: url(${FooterLogo});
  background-size: 250px;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    background-image: url(${FooterLogo2});
    height: 150px;
    margin-top: 10px;
    background-size: 100px;
    background-repeat: no-repeat;
    margin-left: 30px;
    margin-top: 10px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 40px;
  color: #fff;

  @media screen and (max-width: 500px) {
    margin-left: 10px;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-right: 20px;
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 14px;
  font-size: 15.5px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #bbff72;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.div`
  font-size: 24px;
  color: #fff;
  margin-bottom: 27px;
  font-weight: bold;
  text-align: center;
`;

export const Copyright = styled.div`
  text-align: end;
  font-size: 13px;
  margin-top: 20px;
  margin-right: 20px;

  @media screen and (max-width: 500px) {
    font-size: 11px;
    justify-content: center;
  }
`;
