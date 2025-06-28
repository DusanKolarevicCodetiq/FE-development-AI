import styled from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

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
    </FullScreenContainer>
  );
}

export default App;
