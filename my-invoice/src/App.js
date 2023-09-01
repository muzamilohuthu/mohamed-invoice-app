
import './App.css';
import Page1 from './pages/Page1';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';


function App() {
  return (
    <div className="App d-flex flex-column align-item-center justify-content-center w-100">
       <Container>
       <Page1 /> 
      </Container>
      
    </div>
  );
}

export default App;
