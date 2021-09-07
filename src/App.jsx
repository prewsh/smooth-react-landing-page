import styled, { css } from "styled-components"
import Feature from "./components/Feature";
import Landing from "./components/Landing-area";
import { Navbar } from "./components/Navbar"
import Service from "./components/Service";


const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`

const IntroShape = styled.div`
  ${Shape}
  background-color: crimson;
  clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
`;

const FeatureShape = styled.div`
  ${Shape}
  background-color: pink;
  clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
`;

const ServiceShape = styled.div `
  ${Shape}
  background-color: pink;
  clip-path: inset(0 67% 0 0);
`

const App = () => {
  return ( 
<>
  <Container>
    <Navbar/>
    <Landing/>
    <IntroShape/>
  </Container> 
  <Container>
    <Feature/>
    <FeatureShape/>
  </Container>
  <Container>
    <Service/>
    <ServiceShape/>
  </Container>
</>  
  );
};

export default App;