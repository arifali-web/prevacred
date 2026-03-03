import { useStyle } from '@assets';
import { Icon, SecHeader, Text, View } from '@components';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Welcome from './Welcome';
import QrInner from './QrInner';
import DrawerNavigator from './navigation/DrawerNavigator';
import UserTabs from './navigation/TabNavigator';
import TakePicture from './auth/TakePicture';
import UploadGovernmentIdScreen from './auth/UploadGovernmentIdScreen';
import Otp from './auth/Otp';
import VerificationCode from './auth/VerificationCode';
import EditProfile from './EditProfile';
import PaymentCardsScreen from './PaymentCardsScreen';
import ScanDocumentCameraScreen from './home/ScanDocumentCameraScreen';

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
  EditProfile: undefined;
  PaymentScreen: undefined;
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
          <Stack.Screen component={Signup} name="Signup" />
          <Stack.Screen component={UserTabs} name="Tabs" />
          <Stack.Screen component={DrawerNavigator} name="Drawer" />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: true,
            title: '',
            headerBackImage: () => (
              <Icon
                name="ArrowRight"
                size="s"
                color="primary"
                style={{ transform: [{ rotate: '180deg' }] }}
              />
            ),
            headerBackTitle: '',
            headerTransparent: true,
            headerLeftContainerStyle: {
              paddingLeft: 20,
            },
          }}
        >
          <Stack.Screen component={TakePicture} name="TakePicture" />
          <Stack.Screen component={UploadGovernmentIdScreen} name="IdScreen" />
          <Stack.Screen component={Otp} name="Otp" />
          <Stack.Screen component={VerificationCode} name="VerificationCode" />
        </Stack.Group>
        <Stack.Group
          screenOptions={{
            headerShown: true,
            header(props: any) {
              return <SecHeader {...props} />;
            },
          }}
        >
          <Stack.Screen
            component={QrInner}
            name="QrInner"
            options={{
              title: '',
            }}
          />
          <Stack.Screen
            component={EditProfile}
            options={{
              headerShown: false,
            }}
            name="EditProfile"
          />
          <Stack.Screen component={PaymentCardsScreen} name="PaymentScreen" />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type UserProps<ScreenName extends keyof UserStackType> =
  StackScreenProps<UserStackType, ScreenName>;
