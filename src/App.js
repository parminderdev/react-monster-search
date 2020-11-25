import React,{ Component } from "react";
import CardList from './components/card-list/card-list.component.jsx';

import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
     monster :  [   ],
     key : '',
     searchFeild : ""

    }
  }
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json()    )
    .then(users => this.setState({monster : users}))
    .then(id => this.setState( { key : id  }))

  }
  render(){
  return (

   
    <div className="App">

        <input type="search" placeholder="Search Monsters" onChange={e => this.setState({
          searchFeild : e.target.value

        })}></input>
      <CardList monster= {this.state.monster}> </CardList>
    </div>
  );
}
}

export default App;
