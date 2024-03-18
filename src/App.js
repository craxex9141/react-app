import Header from './components/Header';
//import React from 'react'

/*
function App() {
 /*
 // 1.App component & jsx.   
  const name = 'Brad'
  const x = true
  return (
    <div className="App">
      <h1>Hello from React!!!</h1> 
 // 2.Expression in jsx.
      <h2>Hello {name}</h2>
      <h2>Hello {1+1}</h2>
      <h2>Hell {x? 'yes':'no'}</h2>
    </div>
  );
 }
 */
const App=()=>{
  // 3.Creating components.
  // 4.Creating props
  return(
    <div className='container'>
      <header/>
    </div>
  )
  /*class App extends React.Component{
    render(){
      return <h1>Hello from class!!!</h1> //By using class app 
    }
  }
  */
}
export default App; 