import React, { Component } from "react";
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';

// const App = () => {
//   return (
//     <div>
//       <Header></Header>
//       <MainSection>
//       </MainSection>
//     </div>
//   );
// }

class App extends Component {
  render() {
    //If you have any code that determines the display logic or something that determines the style of the elements, then that logic should happen here inside the render method
    return(
      <div>
        <Header></Header>
        <MainSection>
        </MainSection>
      </div>
    );
  }
}

export default App;