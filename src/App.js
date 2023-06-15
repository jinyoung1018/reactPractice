
import logo from './logo.svg';
// import './App.css';

import MyHeader from './MyHeader';
// import MyFooter from './MyFooter';
import Counter from './Counter';

function App() {
  let  name = "백진영";

  // const style ={
  //   App: {
  //     backgroudColor: "black",
  //   },
  //   h2: {
  //     color: "red",
  //   },
  //   bold_text:{
  //     color: "green",
  //   },
  // };

  return (
    <div className="App">
      <MyHeader />
      <Counter></Counter>

    </div>
  );
}

export default App;
