import React, { useContext } from 'react';
import { TestContext } from "./index";

function Tabbar(props) {
  const { userName } = useContext(TestContext);
  return (<div>通过context获取到的值：{userName}</div>);
}

export default Tabbar;
