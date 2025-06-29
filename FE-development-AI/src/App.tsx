import { GlobalStyle } from "./GlobalStyle";
import { CountryTabs } from "./components/CountryTabs/CountryTabs";
import { 
  FullScreenContainer, 
  Header, 
  HeaderContent,
  Title, 
  MainContent 
} from "./App.styles";
import RefactoredCountryDashboard from "./legacy/RefactoredCountryDashboard";
import RefactoredCountryList from "./flawed/RefactoredCountryList";
import Chart from "./figma/Chart/Chart";

function App() {
  return (
    <FullScreenContainer>
      <GlobalStyle />
      <Header>
        <HeaderContent>
          <Title>Countries Explorer</Title>
        </HeaderContent>
      </Header>
      <MainContent>
        {/* <CountryTabs /> */}
        <Chart />
      </MainContent>
    </FullScreenContainer>
  );
}

export default App;
