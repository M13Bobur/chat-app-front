import React from "react";
import { Wrapper } from "./style";
import logoImg from "assets/gerb1.png";

function Logo({ size }) {
  return (
    <Wrapper>
      <img src={logoImg} alt="logo__img" height="70" />
      <h2>Тезкор-ечим</h2>
    </Wrapper>
  );
}

export default Logo;
