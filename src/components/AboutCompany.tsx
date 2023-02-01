import styled from "@emotion/styled";

const AboutCompany = () => {
  const AboutCompanyWrapper = styled.div`
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
  `;
  const SpanWrapper = styled.div`
    display: flex;
  `;
  const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 4rem 0 2rem;
  `;
  const Heading = styled.h1`
    padding: 2rem;
    font-size: 34px;
    line-height: 45px;
    font-weight: 800;
    font-family: var(--font-family);
    max-width: 510px;
    color: var(--color-text);
    text-align: center;
  `;
  const P = styled.p`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: var(--color-subtext);
    cursor: pointer;
    max-width: 34em;
    @media (max-width: 623px)
  {
    margin-left: 5%;
    margin-right: 5%;
    
    max-width: 75%;
  }
  `;
  const SpansWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: 2rem;
    justify-content: center;
    align-items: center;
    
  `;
  const Span = styled.span`
    text-align: center;
    padding: 3rem;
    font-weight: 800;
    font-size: var(--fs-s);
    line-height: 24px;
    letter-spacing: -0.04em;
    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--font-family);
  `;
  return (
    <AboutCompanyWrapper id="About">
      <HeadingWrapper>
        <Heading>About Us</Heading>
        <P>
          At our company, we are dedicated to providing the latest and greatest
          technology solutions to businesses of all sizes. We understand the
          challenges that companies face in today's fast-paced, ever-changing
          digital landscape, and our mission is to empower organizations to meet
          those challenges head on. With a team of experts and a passion for
          excellence, we work tirelessly to create cutting-edge solutions that
          drive growth, increase efficiency, and improve overall performance.
        </P>
      </HeadingWrapper>
      <SpansWrapper>
        <Span>Driven by a passion for excellence</Span>
        <Span>Empowering businesses through innovative technology.</Span>
        <Span>Transforming industries with cutting-edge solutions.</Span>
      </SpansWrapper>
    </AboutCompanyWrapper>
  );
};

export default AboutCompany;
