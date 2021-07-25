import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackScreens from './StackScreens';

const Routes = () => {


  return (
    <React.Fragment>
    <NavigationContainer>
     <StackScreens />
    </NavigationContainer>

    </React.Fragment>
  );
};

export default Routes;