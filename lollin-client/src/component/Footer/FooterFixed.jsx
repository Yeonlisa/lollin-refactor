import React from 'react';
import {
  Logo,
  Container,
  Wrapper,
  Column,
  Row,
  FooterLink,
  Title,
  Copyright,
} from './FooterFixedElements';

const FooterFixed = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Row>
              <Logo />
            <Column>
              <Title>About Us</Title>
              <FooterLink
                href="https://github.com/codestates/Lollin-client"
                target="_blank"
              >
                Client repository
              </FooterLink>
              <FooterLink
                href="https://github.com/codestates/Lollin-server"
                target="_blank"
              >
                Server repository
              </FooterLink>
            </Column>
            <Column>
              <Title>Team Spieler</Title>
              <FooterLink
                href="https://github.com/whwnddnwhwnd"
                target="_blank"
              >
                Cho JungWoo
              </FooterLink>
              <FooterLink
                href="https://github.com/leehojun0314"
                target="_blank"
              >
                Lee HoJun
              </FooterLink>
              <FooterLink href="https://github.com/Yeonlisa" target="_blank">
                Yeon HoJin
              </FooterLink>
              <FooterLink
                href="https://github.com/hunhunseunghun"
                target="_blank"
              >
                Yoo SeungHun
              </FooterLink>
            </Column>
          </Row>
        </Wrapper>
        <Copyright>
          Copyright {new Date().getFullYear()}. Team Spieler all pictures cannot be copied without
          permission.
        </Copyright>
      </Container>
    </>
  );
};

export default FooterFixed;
