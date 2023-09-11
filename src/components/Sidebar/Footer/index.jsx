import React from 'react';
import { BsTelegram } from 'react-icons/bs';
import {
  Footer,
  FooterImage,
  FooterImageBlock,
  LampImage,
  PhoneLink,
  TelegramBlock,
  TelegramIcon,
} from './style';
import Lampa from './../../../assets/img/lamp-on.png';

export default () => {
  return (
    <Footer>
      <FooterImageBlock
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        <FooterImage>
          <LampImage src={Lampa} alt='' />
        </FooterImage>
      </FooterImageBlock>
      <h3>Боғланиш учун</h3>
      <PhoneLink href='tel:+998 73 244 05 35'>+998 73 244 05 35</PhoneLink>
      <PhoneLink href='tel:+998 73 244 35 05'>+998 73 244 35 05</PhoneLink>
      <TelegramBlock>
        <TelegramIcon>
          <BsTelegram style={{ width: '100%', height: '100%' }} />
        </TelegramIcon>
        <a href='https://t.me/sprouz_support' target={'blank'}>
          @t.me/sprouz_support
        </a>
      </TelegramBlock>
    </Footer>
  );
};
