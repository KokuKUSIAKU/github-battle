var React = require('react')
var ReactDOM = require('react-dom')

class HelloWorld extends React.Component{

  render(){
    return (
      <div> github Battle Project </div>
    )
  }
}
ReactDOM.render(<HelloWorld />, document.getElementById('app'));
