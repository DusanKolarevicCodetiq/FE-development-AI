import styled from "styled-components";
import CountryTabs from "./components/CountryTabs";
import { GlobalStyle } from "./GlobalStyles";

export const FullScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center; /* center horizontally only */
  background-color: #f5f7fa;
  overflow: hidden;
`;

function App() {
  return (
    <FullScreenContainer>
      <GlobalStyle />
      <CountryTabs />
    </FullScreenContainer>
  );
}

export default App;
