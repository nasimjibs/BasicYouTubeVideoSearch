import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  render(){
    return(
      <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <p>It Works fine!</p>
              </div>
          </div>
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById('app'));
