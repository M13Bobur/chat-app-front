import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  border-radius: 16px;
  text-align: center;
  padding: 0;
`;

export const FooterImageBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0px 0px 38px 0px;
`;

export const FooterImage = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  margin-top: -35px;
  background: #f5f5f5;
`;
export const LampImage = styled.img`
  width: 30px;
  height: 30px;
  filter: blur(0.5px);
`;

export const PhoneLink = styled.a`
  display: block;
  color: #787486;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
`;

export const TelegramBlock = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  border-radius: 4px;
  height: 40px;
  margin: 20px 15px;
  padding: 10px 5px;
  & a {
    color: #787486;
  }
`;

export const TelegramIcon = styled.div`
  width: 30px;
  height: 30px;
  color: #37aee2;
  margin: 0px 10px;
  ${
    '' /* background: linear-gradient(203.2deg, #37AEE2 21.67%, #1E96C8 70%); */
  }
`;
