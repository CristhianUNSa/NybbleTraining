import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let result = this.props.result;
    return <h1>{txt} - {result}</h1>
  }
}
App.propTypes = {
  txt: React.PropTypes.string,
  result: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'Texto del componente',
  result: 'Result text',
}

ReactDOM.render(
  <App cat={5} />,
  document.getElementById('app')
);

export default App;
