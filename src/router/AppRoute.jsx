import React, {lazy, Suspense} from 'react';
import {Route, Switch, } from "react-router-dom";
import {routes} from './index'
function AppRoute(props) {
  return (
    <>
      <Suspense fallback={<>loading ...</>}>
        <Switch>
          { routes.map(r => (
              <Route path={r.path}  key={r.meta} render={(props)=>{
                console.log('props', props);
                return <r.component {...props} />
                }
              }>
              </Route>))
          }
          <Route path='*' render={()=> <h1>404找不到页面</h1>}/>
        </Switch>
        {/*<Switch>*/}
        {/*  <Route path="/user" component={lazy(() => import( '../pages/User'))}/>*/}
        {/*  <Route path="/home" component={lazy(() => import( '../pages/Home'))}/>*/}
        {/*  <Route path="/info" component={lazy(() => import( '../pages/Info'))}/>*/}
        {/*  <Route path="/person" component={lazy(() => import( '../pages/Person'))}/>*/}
        {/*</Switch>*/}
      </Suspense>
    </>
  );
}

export default AppRoute;
