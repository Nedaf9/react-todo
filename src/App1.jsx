import React, {useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import { Button } from 'antd';
import 'antd/dist/reset.css';
const App = (props) => {

  const value = useSelector(state => state.num)
  const dispatch = useDispatch();
  console.log('props',props);

  return (
    <div>
      <div>{value}</div>
      <Button type="primary">Primary</Button>
      <button onClick={()=>dispatch({ type: 'increment' }) }>点我++</button>
    </div>
  );
};

const mapStateToProps = (state) => {
   return { num: state.num };
};

const mapDispatchToProps = (dispatch) => ({
  jia: ()=> dispatch({ type: 'increment' }) // 这里是函数返回
});

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
