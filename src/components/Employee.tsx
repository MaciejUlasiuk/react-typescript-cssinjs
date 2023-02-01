import styled from "@emotion/styled";
import { Address, Employment } from "../types/Types";
interface IProps {
  key: number;
  id: number;
  uid?: string;
  first_name: string;
  last_name: string;
  username: string;
  avatar: string;
  employment: Employment;
  address: Address;
}
const MovieWrapper = styled.div`
  width: 310px;
  min-height: 460px;
  margin: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);

  position: relative;
  border-radius: 12px;
  border: 10px;
  overflow: hidden;
  border: none;

  display: flex;
  justify-content: center;

  flex-direction: column;
  border-radius: 5%;
  padding: 10px;
  max-width: 310px;
`;
const Img = styled.img`
  position: relative;
  border-radius: 5px;
  width: 100%;
  height: 100%;
`;
const Header = styled.h1`
  text-align: center;
  z-index: 1;
  padding: 0.2rem;

  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: var(--font-family);
`;
const Span = styled.span`
  width: 100%;
  z-index: 1;
  font-size: var(--fs-s);
  font-weight: 500;
  font-family: var(--font-family);
  align-self: center;
  color: var(--color-text);
  text-align: center;
`;
const NickName = styled.p`
  text-align: center;
  z-index: 1;
  padding-bottom: 1rem;
  font-family: var(--font-family);
  background: var(--gradient-text);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Employee: React.FC<IProps> = ({
  avatar,
  username,
  first_name,
  last_name,
  employment,
  address,
}) => {
  return (
    <MovieWrapper>
      <Img src={avatar} alt={username} />
      <Header>
        {first_name} {last_name}
      </Header>
      <NickName>{username}</NickName>
      <Span>
        {employment.title}, {employment.key_skill}
      </Span>
      <Span>From: {address.country}</Span>
    </MovieWrapper>
  );
};

export default Employee;
