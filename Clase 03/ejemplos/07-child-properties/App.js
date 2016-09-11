import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (<Button><Heart /> React</Button>
    );
  }
}

class Button extends React.Component{
  render(){
    return(<button>{this.props.children}</button>);
  }
}

const Heart = ()=> <span className="glyphicon glyphicon-heart"><3</span>

export default App;
