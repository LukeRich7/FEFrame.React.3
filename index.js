import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const App = props => {
    const favoriteCars = [
      {name:'Honda CR-V'},
      {name:'Toyota Highlander'},
      {name:'Ford F-150'},
      {name:'BMW X3'},
      {name:'Subaru Crosstrek'}
    
    ];
  
    return (
      <div>
        <List favoriteCars ={favoriteCars}/>
      </div>
    )
  };
  
  const List = props => {
    const listItems = props.favoriteCars.map((item, index) => (<li key={index}>{item.name}</li>));
  
    return (
      <ol>
        {listItems}
      </ol>
    );
  }
  

  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );