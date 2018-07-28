import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon, Button } from 'antd';

import Routes from '../utils/routes';

export default class SideNav extends Component{
	state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
	render(){
		return(
			<aside style={{position:'fixed',left:0,top:0,height:'100%',width:'100px'}}>
				<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
         <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
					{ Routes.slice(1).map( 
							(item, index)=> (
								<Menu.Item key={index}>
									<Icon type="pie-chart" />
									<Link replace  to={item.path}>{item.name}</Link> 
								</Menu.Item>
						)) 
					}
				</Menu>
    	</aside>
    )
	}
}