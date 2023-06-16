
import logo from './logo.svg';
// import './App.css';

import MyHeader from './MyHeader';
// import MyFooter from './MyFooter';
import Counter from './Counter';
import Container from './Container';

function App() {
  let  name = "백진영";

  const counterProps = {
    a: 1,
    b:2,
    c:3,
    initialValue:5
  };

  return (
    <Container>
    <div className="App">
      <MyHeader />
      <Counter {...counterProps}></Counter> 

    </div>
    </Container>
  );
}

export default App;
