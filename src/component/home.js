import React , {useContext}from 'react'
import Context, {Context2} from '../context'
import logo from '../logo.svg';
const Home = ()=>{
    const {state, setState} = useContext(Context2)
console.log({state})
    return(
      
            <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
                <span>{state.content}</span>
        </p>
        <button onClick={()=> setState({content: "Hi"})}> change word </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div> this is a value from context : </div>
      </header>
    </div>
           
    )};
export default Home