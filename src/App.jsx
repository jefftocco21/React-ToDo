import './App.css';
import Header from './components/Header'
import propTypes from 'prop-types'

function App() {

  return (
    <div className="Container">
        <header 
            style={headingStyle}
            className="App-header">
          <Header 

          title="To Do"
          />
        </header>
    </div>
  );
}

//can use javascript to create CSS rules
// const headingStyle = {
//   color:'red', 
//   backgroundColor: 'black'
// }

Header.propTypes = {
  title: propTypes.string.isRequired
}

export default App;
