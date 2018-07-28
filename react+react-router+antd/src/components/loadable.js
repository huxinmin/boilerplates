import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div className="loading">Loading...</div>;

//代码分割，懒加载
const Home = Loadable({
  loader: () => import('../views/home'),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import('../views/login'),
  loading: Loading,
});
const View1 = Loadable({
  loader: () => import('../views/view1'),
  loading: Loading,
});
const View2 = Loadable({
  loader: () => import('../views/view2'),
  loading: Loading,
});
const View3 = Loadable({
  loader: () => import('../views/view3'),
  loading: Loading,
});

export { Home, Login, View1, View2, View3 }