import { useStyle } from '@assets';
import { Icon, Image, Pressable, SecHeader, Text, View } from '@components';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';
import Signup from './Signup';
import Login from './Login';
// import ProfessionalInfo from './ProfessionalInfo';
import UserTabs from './Tabs';
// import ForgotPassword from './ForgotPassword';
// import Profile from './Profile';
// import Setting from './Setting';
// import About from './About';
// import PrfileDetails from './PrfileDetails';
// import ChangePassword from './ChangePassword';
// import EditProfile from './EditProfile';
// import Editstep2 from './Editstep2';
import Welcome from './Welcome';
import { DrawerTab } from './Drawer';
import ScanDocumentScreen from './ScanDocumentScreen';
import AddDocument from './AddDocument';
import ScanDocumentCameraScreen from './ScanDocumentCameraScreen';
import EditDocument from './EditDocument';
import DocTermsAndCondition from './DocTermsAndCondition';
import BackgroundScreening from './BackgroundScreening';
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
};

const Stack = createStackNavigator<UserStackType>();

export function Root(): React.JSX.Element {
  const [colors] = useStyle(({ colors }) => ({
    appTheme: {
      //@ts-ignore
      background: colors.background,
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
            headerBackImage(props) {
              return (
                <View
                  backgroundColor="translucentBackground"
                  marginLeft
                  padding
                  borderRadius="xl"
                >
                  <Text font="Bold" text={'Back'} />
                </View>
              );
            },

            headerTitle(props) {
              return <Text size="h5" font="Bold" text={props.children} />;
            },
          }}
        >
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

            <Stack.Screen component={UserTabs} name="Tabs" />
            <Stack.Screen component={DrawerTab} name="Drawer" />
            {/* <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
            <Stack.Screen component={Profile} name="Profile" />
            <Stack.Screen component={Setting} name="Setting" />
            <Stack.Screen component={About} name="About" />
          
            <Stack.Screen component={PrfileDetails} name="PrfileDetails" />
            <Stack.Screen component={ChangePassword} name="ChangePassword" />
            <Stack.Screen component={EditProfile} name="EditProfile" />
            <Stack.Screen component={Editstep2} name="Editstep2" /> */}
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
            <Stack.Screen component={AddDocument} name="AddDocument" />
            <Stack.Screen
              component={ScanDocumentScreen}
              name="ScanDocumentScreen"
            />
            <Stack.Screen
              component={ScanDocumentCameraScreen}
              name="ScanDocumentCameraScreen"
            />
            <Stack.Screen component={EditDocument} name="EditDocument" />
            <Stack.Screen
              component={DocTermsAndCondition}
              name="TermsandConditions"
            />
            <Stack.Screen
              component={BackgroundScreening}
              name="BackgroundScreening"
            />
          </Stack.Group>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type UserProps<ScreenName extends keyof UserStackType> =
  StackScreenProps<UserStackType, ScreenName>;
