import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = { data:[
      {id: 1, name: 'Simon Bailey'}, {id: 2, name: 'Thomas Burleson'},
      {id: 17, name: 'Lucas'}, {id: 18, name: 'Brett'}
    ]};
  }
  render() {
    let rows = this.state.data.map( person => {
      return <PersonRow key={person.id} data={person} />
    });
    return ( <table>
      <tbody>{rows}</tbody>
    </table>
    );
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
}

export default App;
