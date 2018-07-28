import React from 'react';
import { Route, Switch } from "react-router-dom";

import Routes from '../../utils/routes';
import SideNav from '../../components/sideNav';

//定义主界面路由
const Home = ()=> (
	<div className="home">
		<SideNav/>
    <div className="main">
      <header></header>
      <section className="container">
      	<Switch>
					{Routes.map((item,index)=>(
						<Route key={index} exact={item.exact} path={item.path} component={item.component} />
					))}
				</Switch>
       </section>
    </div>
	</div>
)

export default Home