import React from "react";
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <Header>This is the header</Header>
      <MainSection>
        Here we have the main Section
      </MainSection>
      <Footer>This is the footer</Footer>
    </div>
  );
}

export default App;