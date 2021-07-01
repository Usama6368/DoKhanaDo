import React from "react";
import Home from "./Screen/Home";
import colors from "./Config/colors";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Platform, SafeAreaView } from "react-native";
import Search from "./Screen/Search";
import SpecificFoodDetail from "./Screen/SpecificFoodDetail";
import Checkouts from "./Screen/Checkouts";
import OrderStatus from "./Screen/OrderStatus";
import Tracking from "./Screen/Tracking";
import DeliveryTracking from "./Screen/DeliverTracking";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import Profile from "./Screen/Profile";
import ProfileDetail from "./Screen/ProfileDetail";

function App(props) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        marginTop: Platform.OS == "ios" ? getStatusBarHeight() : 0,
      }}
    >
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <Profile /> */}
      <ProfileDetail />
      {/* <Tracking/> */}
      {/* <SpecificFoodDetail /> */}
      {/* <Home/> */}
      {/* {/* <Search/> */}
      {/* <Checkouts /> */}
      {/* <OrderStatus /> */}
      {/* <DeliveryTracking/> */}
    </SafeAreaView>
  );
}

export default App;
