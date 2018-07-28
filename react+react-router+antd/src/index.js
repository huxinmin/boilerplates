import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from "react-router-dom";

import './index.less';
import { getLoggedIn, history } from './utils';
import { Home, Login } from './components/loadable';

class App extends Component {
	componentWillMount(){
		//已经登录过
		if( !getLoggedIn() ){
			history.replace('/home');
		}else{
			history.replace('/login');
		}
	}

  render() {
    return (
    	<Router history={history}>
      	<div className="App">
      		<Route exact path="/" component={Login} />
					<Route  path="/login" component={Login} />
					<Route  path="/home" component={Home} />
      	</div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
