import styled from "@emotion/styled";
import LoadingIcon from "./LoadingIcon";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    min-height: 50vh;
    text-align: center;
`
const H1 = styled.h1`
margin-top: 5vh;
margin-bottom: 5vh;
font-size: var(--fs-xl);
`
const LoadingPage = () => {
    return ( 
        <Wrapper>
            <H1>Loading Users</H1>
            <LoadingIcon/>
        </Wrapper>
     );
}
 
export default LoadingPage;