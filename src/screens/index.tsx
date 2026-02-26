import { useStyle } from '@assets';
import { SecHeader, Text, View } from '@components';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import Signup from './signup/Signup';
import Login from './Login';
import Welcome from './Welcome';
import QrInner from './QrInner';
import DrawerNavigator from './navigation/DrawerNavigator';
import UserTabs from './navigation/TabNavigator';
import TakePicture from './signup/TakePicture';
import UploadGovernmentIdScreen from './signup/UploadGovernmentIdScreen';
import Otp from './signup/Otp';
import VerificationCode from './signup/VerificationCode';

export type UserStackType = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  BookDetails: undefined;
  ProfessionalInfo: undefined;
  Tabs: undefined;
  Drawer?: NavigatorScreenParams<any>;
  AddDocument: undefined;
  ScanDocumentScreen: undefined;
  ScanDocumentCameraScreen: undefined;
  EditDocument: undefined;
  TermsandConditions: undefined;
  BackgroundScreening: undefined;
  CustomerSupport: undefined;
  Contact: undefined;
  QrInner: undefined;
  TakePicture: undefined;
  IdScreen: undefined;
  Otp: undefined;
  VerificationCode: undefined;
};

const Stack = createStackNavigator<UserStackType>();

export function Root(): React.JSX.Element {
  const [colors] = useStyle(({ colors }) => ({
    appTheme: {
      //@ts-ignore
      background: colors.white,
      border: colors.background,
      card: colors.background,
      notification: colors.error,
      primary: colors.primary,
      text: colors.onBackground,
    },
  }));
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            component={Welcome}
            name="Welcome"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            component={Login}
            name="Login"
            options={{ headerShown: false }}
          />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen component={Signup} name="Signup" />
          <Stack.Screen component={TakePicture} name="TakePicture" />
          <Stack.Screen component={UploadGovernmentIdScreen} name="IdScreen" />
          <Stack.Screen component={Otp} name="Otp" />
          <Stack.Screen component={VerificationCode} name="VerificationCode" />
          <Stack.Screen component={UserTabs} name="Tabs" />
          <Stack.Screen component={DrawerNavigator} name="Drawer" />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: true,
            header(props: any) {
              return <SecHeader {...props} />;
            },
            // title: '',
            // headerBackImage: () => (
            //   <Icon
            //     name="ArrowRight"
            //     size="s"
            //     color="primary"
            //     style={{ transform: [{ rotate: '180deg' }] }}
            //   />
            // ),
            // headerBackTitleVisible: false,
            // headerLeftContainerStyle: {
            //   paddingLeft: 20,
            // },
            // headerTransparent: false,
            // headerStyle: {
            //   // backgroundColor: '#000',
            //   // borderBottomColor: '#fff',
            //   borderWidth: 0,
            //   borderColor: 'transparent',
            // },
            // headerRight(props) {
            //   return (
            //     <View row gap marginRight>
            //       <Pressable>
            //         <Icon name="HeaderShare" size="m" />
            //       </Pressable>
            //     </View>
            //   );
            // },
          }}
        >
          {/* <Stack.Screen component={AddDocument} name="AddDocument" /> */}
          <Stack.Screen component={QrInner} name="QrInner" />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type UserProps<ScreenName extends keyof UserStackType> =
  StackScreenProps<UserStackType, ScreenName>;
