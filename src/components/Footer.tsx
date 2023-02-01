import styled from "@emotion/styled";
import rightSideImg from "../assets/google.png";
const Footer = () => {
  const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 21vh;
    margin-bottom: 5vh;
    margin-left: 1%;
    margin-right: 1%;
  `;

  const FooterHeading = styled.div`
    width: 100%;
    text-align: center;

    margin-bottom: 3rem;
  `;

  const Heading = styled.h1`
    font-family: var(--font-family);
    font-weight: 800;
    font-size: var(--fs-xl);
    line-height: 75px;
    color: var(--color-text);
  `;
  const FooterBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem;
    border: 1px solid #fff;
    text-align: center;

    margin-bottom: 10rem;
    cursor: pointer;
  `;
  const P = styled.p`
    padding: 0.25rem;
    font-size: var(--fs-s);
    font-family: var(--font-family);
    line-height: 21px;
    color: var(--color-text);
    word-spacing: 2px;
  `;

  const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;
    text-align: left;
  `;
  const FooterLogo = styled.div`
    width: 250px;
    margin: 1rem;
  `;
  const Img = styled.img`
    width: 118px;
    height: 30px;

    margin-bottom: 1rem;
  `;
  const PImg = styled.p`
    font-size: 12px;
    line-height: 15px;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--font-family);
  `;
  const InsideFooterLinks = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  `;
  const H4 = styled.h4`
    font-size: 14px;
    line-height: 17px;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--font-family);

    margin-bottom: 0.9rem;
  `;
  const CopyrightWrapper = styled.div`
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  `;
  return (
    <>
      <FooterWrapper id="Footer">
        <FooterHeading>
          <Heading>Do you want to step in to the future before others</Heading>
        </FooterHeading>
        <FooterBtn>
          <P>Request Early Access</P>
        </FooterBtn>
        <FooterLinks>
          <FooterLogo>
            <Img src={rightSideImg}></Img>
            <PImg>Crechterwoord K12 182 DK Alknjkcb,</PImg>
          </FooterLogo>
          <InsideFooterLinks>
            <H4>Links</H4>
            <P>Overons</P>
            <P>Social Media</P>
            <P>Counters</P>
            <P>Contact</P>
          </InsideFooterLinks>
          <InsideFooterLinks>
            <H4>Company</H4>
            <P>Terms & Conditions</P>
            <P>Privacy Policy</P>
            <P>Contact</P>
          </InsideFooterLinks>
          <InsideFooterLinks>
            <H4>Get in touch</H4>
            <P>Warsaw, Kamienna 53</P>
            <P>099-132567</P>
            <P>info@randomemail.net</P>
          </InsideFooterLinks>
        </FooterLinks>
        <CopyrightWrapper>
          <P>@2023 Maciej Ulasiuk. All rights reserved.</P>
        </CopyrightWrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
