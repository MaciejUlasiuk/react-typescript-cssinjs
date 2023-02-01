import { useEffect, useState } from "react";
import { ITeam } from "../types/Types";
import { fetchTeam } from "../fetchers/fetchTeam";
import styled from "@emotion/styled";
import TeamUsers from "./TeamUsers";
import LoadingPage from "./LoadingPage";
const Team = () => {
  const [team, setTeam] = useState<ITeam[] | null>(null);

  const handleFetchTeam = async () => {
    const fetchedTeam = await fetchTeam();
    console.log(fetchedTeam);
    setTeam(fetchedTeam);
  };

  useEffect(() => {
    handleFetchTeam();
  }, []);

  const Wrapper = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 10vh;
  `;
  const TeamWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  `;

  const Heading = styled.h1`
    font-size: clamp(var(--fs-xl), var(--fs-l), var(--fs-m));

    padding-bottom: 2rem;

    background: var(--gradient-text);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 333px)
  {
    
    text-align: center;

  }
  `;
  const P = styled.p`
    font-size: var(--fs-s);
    font-weight: 500;
    font-family: var(--font-family);
    align-self: center;
    color: var(--color-text);
    
    @media (max-width: 529px)
  {
    margin-left: 5%;
    margin-right: 5%;
    text-align: center;
  }
    
  
  `;
  return (
    <Wrapper id="Team">
      <Heading>Meet our team</Heading>
      <P>
        Experience the difference of a truly dedicated customer service team
      </P>
      <TeamWrapper>
        {team === null ? <LoadingPage/> : <TeamUsers team={team} />}
      </TeamWrapper>
    </Wrapper>
  );
};

export default Team;
