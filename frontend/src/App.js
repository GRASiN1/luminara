import './App.css';
import Navbar from './components/navbar/navbar';

let user = {
  name: "GRASiN",
  email: "xyz@test.com"
}

function App() {
  return (
    <div className="App">
      <Navbar user={user} />
    </div>
  );
}

export default App;
