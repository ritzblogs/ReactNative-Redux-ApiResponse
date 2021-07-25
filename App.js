import React from 'react';
import Providers from './navigation';

import { Provider } from "react-redux";
import Store from "./redux/Store";
const App = () => {
  return (
    <Provider store={Store}>
      <Providers />
    </Provider>
  );
}

export default App;



