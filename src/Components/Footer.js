import React from "react";
import styled from "styled-components";

import { BsTwitter, BsInstagram, BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const FooterContainer = styled.div``;
const CompanyInfo = styled.div``;
const SocialContainer = styled.div``;

function Footer() {
  return (
    <FooterContainer>
      <div>이용약관 | 개인정보처리방침 </div>
      <CompanyInfo>
        <div>대표 : 김이지</div>
        <div>전화번호 : 010-0987-6543</div>
        <div>사업자번호 : 987-65-43210</div>
        <div>E-mail : tripEZ@hompage.co.kr</div>
      </CompanyInfo>

      <SocialContainer>
        <span>
          <BsTwitter />
        </span>
        <span>
          <BsInstagram />
        </span>
        <span>
          <FaDiscord />
        </span>
        <span>
          <BsTelegram />
        </span>
      </SocialContainer>
    </FooterContainer>
  );
}

export default Footer;
