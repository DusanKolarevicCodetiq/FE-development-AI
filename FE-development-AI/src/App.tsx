import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { CountryTabs } from "./components/CountryTabs";

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
