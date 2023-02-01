import styled from "@emotion/styled";
import img from "../assets/rightSideImg.png";

const Main: React.FC = () => {
  const MainContainer = styled.main`
    display: flex;
    min-height: 30vh;

    justify-content: space-around;
    justify-items: center;
    flex-wrap: wrap;
    @media (max-width: 1690px) {
      margin-top: 10vh;
      flex-direction: row-reverse;
      flex-wrap: wrap;
      margin-bottom: 10vh;
    }
  `;
  const LeftSideContainer = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 30vw;
    justify-content: center;
    align-items: center;
  `;
  const P = styled.p`
    font-size: var(--fs-s);
    font-weight: 500;
    font-family: var(--font-family);
    align-self: center;
    color: var(--color-text);
    @media (max-width: 560px) {
      margin-left: 5%;
      margin-right: 5%;
    }
  `;

  const Heading = styled.h1`
    font-size: clamp(var(--fs-xl), var(--fs-l), var(--fs-m));

    padding-bottom: 2rem;

    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;

    @media (max-width: 395px) {
      font-size: 2rem;
    }
  `;

  const RightSideContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Img = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75%;
    width: 75%;
    border-radius: 5px;
    object-fit: cover;
    animation: scaleImg 7s infinite linear ;
    box-shadow: -75px -81px 77px -28px rgba(9, 21, 32, 0.58);
    -webkit-box-shadow: -75px -81px 77px -28px rgba(9, 21, 32, 0.58);
    -moz-box-shadow: -75px -81px 77px -28px rgba(9, 21, 32, 0.58);
    box-shadow: -130px 123px 158px 59px rgba(60, 123, 140, 0.35);
    -webkit-box-shadow: -130px 123px 158px 59px rgba(60, 123, 140, 0.35);
    -moz-box-shadow: -130px 123px 158px 59px rgba(60, 123, 140, 0.35);

    @keyframes scaleImg {
        0%{
            transform: scale(1);
        }
        50%{
            transform: scale(1.1);
        }
        100%{
            transform: scale(1);
        }
    }
  `;
  const InputWrapper = styled.div`
    width: 100%;
    margin: 2rem 0 1rem;

    display: flex;
    flex-direction: row;
  `;
  const Input = styled.input`
    flex: 2;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: var(--color-footer);
    border: 2px solid var(--color-footer);
    padding: 0 1rem;
    outline: none;
    color: #fff;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `;
  const InputButton = styled.button`
    flex: 0.6;
    width: 100%;
    min-height: 50px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    background: #ff4820;
    border: 2px solid #ff4820;
    padding: 0 1rem;
    color: #fff;
    cursor: pointer;
    outline: none;

    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `;
  return (
    <MainContainer>
      <LeftSideContainer>
        <Heading>Leading provider of services </Heading>
        <P>
          Explore our extensive resource center for valuable insights and
          information
        </P>
        <P>Trusted by top companies, Partner with us to achieve more</P>
        <InputWrapper>
          <Input type="email" placeholder="Your Email Address" />
          <InputButton type="button">Get Started</InputButton>
        </InputWrapper>
      </LeftSideContainer>
      <RightSideContainer>
        <Img src={img} />
      </RightSideContainer>
    </MainContainer>
  );
};

export default Main;
