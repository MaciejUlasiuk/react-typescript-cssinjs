import styled from "@emotion/styled";

import google from "../assets/google.png";
import slack from "../assets/slack.png";
import shopify from "../assets/shopify.png";
import dropbox from "../assets/dropbox.png";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const ImgWrapper = styled.div`
  flex: 1;
  max-width: 150px;
  min-width: 120px;
  margin: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Brand = () => {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={google} alt="google" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={slack} alt="google" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={dropbox} alt="google" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={shopify} alt="google" />
      </ImgWrapper>
    </Wrapper>
  );
};

export default Brand;
