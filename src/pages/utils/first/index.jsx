import React, {useContext, useState} from 'react';
// 引入tabbar组件
import Tabbar from "./tabbar";

export const TestContext= React.createContext({});

function First(props) {
  const [state, setState] = useState(50);

  const {title} = props?.location?.state;
  return (
    <>
      <div>First{title}</div>
      <button onClick={()=> setState(state+1)}>修改state</button>
      <TestContext.Provider value={{userName: state}}>
        <Tabbar />
      </TestContext.Provider>

    </>
  );
}

export default First;
