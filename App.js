import React, { useEffect } from "react";
import { useState } from "react";
import { Provider } from "react-redux";
import { Splash } from "./src/components/Splash";
import RouteNavigation from "./src/navigation";

import { PersistGate } from "redux-persist/integration/react";
import { Text } from "react-native";
import { store, persistor } from "./src/store/store";
//import store from './src/store/store';

// import SplashScreen from 'react-native-splash-screen';

export default function App() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <RouteNavigation />
      </PersistGate>
    </Provider>
  );
}
