import { GlobalStyle } from "./GlobalStyle";
import { CountryTabs } from "./components/CountryTabs";
import {
  FullScreenContainer,
  Header,
  Title,
  Subtitle,
} from "./App.styles";

function App() {
  return (
    <FullScreenContainer>
      <GlobalStyle />
      <Header>
        <Title>Countries of the World</Title>
        <Subtitle>Fetched using RTK Query from REST Countries API</Subtitle>
      </Header>
       <CountryTabs /> 
    </FullScreenContainer>
  );
}

export default App;
