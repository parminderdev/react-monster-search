import React from 'react';
import './card-list.style.css';

import Card from './../card/card.component';

 const  CardList = props => { 

return <div className="card-list">


{props.monster.map(
    monster =>(
      <Card key={monster.key} monster={monster}></Card>
    )
  )}


</div>;

};
export default CardList;


