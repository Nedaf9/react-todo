import {lazy} from "react";

const Home = lazy(() => import( '../pages/Home'));
const User = lazy(() => import( '../pages/User'));
const Info = lazy(() => import( '../pages/Info'));
const Person = lazy(() => import( '../pages/Person'));


export const routes = [
  {
    path : '/home',    //  一级路由path
    meta : '主页',     //  导航名称
    // 所用组件
    component: lazy(() => import( '@/pages/Home')),
  },
  {
    path : '/user',
    meta : '用户',
    component: lazy(() => import( '@/pages/User')),
  },
  {
    path : '/info',
    meta : '信息',
    component: lazy(() => import( '@/pages/Info')),
  },
  {
    path : '/person',
    meta : '人员',
    component: lazy(() => import( '@/pages/Person')),
  },
  {
    path : '/util/first',
    meta : '工具一',
    component: lazy(() => import( '@/pages/utils/first')),
  },
  {
    path : '/util/second',
    meta : '工具二',
    component: lazy(() => import( '@/pages/utils/second')),
  },
  {
    path : '/util/third',
    meta : '工具三',
    component: lazy(() => import( '@/pages/utils/third')),
  }

]
