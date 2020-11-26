import React,{ Component } from "react";
import CardList from './components/card-list/card-list.component.jsx';
import Searchbox from './components/search-box-component/searchbox-component.jsx'
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
      const {monster,searchFeild} = this.state;
      const filtermonster = monster.filter(
        monster => monster.name.toLowerCase().includes(searchFeild.toLowerCase())
      )
    
  return (
  
   
    <div className="App">

      <Searchbox  placeholder="Search Monsters" onfilter={e => this.setState({searchFeild:e.target.value})}></Searchbox>
        
      <CardList monster= {filtermonster}> </CardList>
    </div>
  );
}
}

export default App;
