import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from ".";
import Feature from "../src/screens/Feature";
import Feature1 from "../src/screens/Feature1";
import Feature2 from "../src/screens/Feature2";
import Login from "../src/screens/auth/Login";
import Register from "../src/screens/auth/Register";
import VerifyEmail from "../src/screens/auth/VerifyEmail";
import EmailVerified from "../src/screens/auth/EmailVerified";
import PhoneNumber from "../src/screens/auth/PhoneNumber";
import VerifyPhoneNumber from "../src/screens/auth/VerifyPhoneNumber";
import VerifiedPhoneNumber from "../src/screens/auth/VerifiedPhoneNumber";
import NewPassword from "../src/screens/auth/NewPassword";
import PasswordVerified from "../src/screens/auth/PasswordVerified";
import UpdateProfile from "../src/screens/auth/UpdateProfile";
import UpdateEmail from "../src/screens/auth/UpdateEmail";
import UpdatePassword from "../src/screens/auth/UpdatePassword";
import WinnersScreen from "../src/screens/Dashboard/Winners";
import BasicTriviaQuiz from "../src/screens/Dashboard/PlayGame";
import FirstQuestion from "../src/screens/Dashboard/PlayGame/FirstQuestion";
import Finish from "../src/screens/Dashboard/Finish";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Feature' component={Feature} />
      <Stack.Screen name='Feature1' component={Feature1} />
      <Stack.Screen name='Feature2' component={Feature2} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='VerifyEmail' component={VerifyEmail} />
      <Stack.Screen name='EmailVerified' component={EmailVerified} />
      <Stack.Screen name='PhoneNumber' component={PhoneNumber} />
      <Stack.Screen name='VerifyPhoneNumber' component={VerifyPhoneNumber} />
      <Stack.Screen
        name='VerifiedPhoneNumber'
        component={VerifiedPhoneNumber}
      />
      <Stack.Screen name='NewPassword' component={NewPassword} />
      <Stack.Screen name='PasswordVerified' component={PasswordVerified} />

      <Stack.Screen name='Main' component={BottomNavigation} />
      <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
      <Stack.Screen name='UpdateEmail' component={UpdateEmail} />
      <Stack.Screen name='UpdatePassword' component={UpdatePassword} />
      <Stack.Screen name='WinnersScreen' component={WinnersScreen} />
      <Stack.Screen name='BasicTriviaQuiz' component={BasicTriviaQuiz} />
      <Stack.Screen name='FirstQuestion' component={FirstQuestion} />
      <Stack.Screen name='Finish' component={Finish} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
