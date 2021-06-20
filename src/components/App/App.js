
import React from "react"
import './App.css'
import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
class App extends React.Component
{
  constructor()
  {
    super();
    this.state ={
      headerText:'Name Engine!'
    }
  }
  handleInputChange=()=>
  {
    alert('I am called')
  }
  render(){
     return (
    <div>
     <Header headTitle={this.state.headerText}/>
     <SearchBox onInputChange={this.handleInputChange}/>
     </div>
  );
     
  }
  
}

export default App;
/*
class App extends React.Component{
  render(){
    return <div> 
          </div>;
  }
}

*/

