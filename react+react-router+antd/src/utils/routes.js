import { View1, View2, View3 } from '../components/loadable';

//路由信息
const Routes = [
	{ path:'/home', exact:true, name:'view1', component:View1 },
	{ path:'/home/view1', name:'view1', component:View1 },
	{ path:'/home/view2', name:'view2', component:View2},
	{ path:'/home/view3', name:'view3', component:View3 },
]

export default Routes