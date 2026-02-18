import {useStyle} from '@assets';
import {Icon, Image, Pressable, Text, View} from '@components';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator, StackScreenProps} from '@react-navigation/stack';
import Signup from './Signup';
import Login from './Login';
import ProfessionalInfo from './ProfessionalInfo';
import UserTabs from './Tabs';
import ForgotPassword from './ForgotPassword';
import Profile from './Profile';
import Setting from './Setting';
import About from './About';
import PrfileDetails from './PrfileDetails';
import ChangePassword from './ChangePassword';
import EditProfile from './EditProfile';
import Editstep2 from './Editstep2';
import Welcome from './Welcome';
export type UserStackType = {
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  BookDetails: undefined;
  ProfessionalInfo: undefined;
  Tabs: undefined;
  ForgotPassword: undefined;
  Profile: undefined;
  Subscription: undefined;
  Setting: undefined;
  About: undefined;
  FavouriteProperties: undefined;
  PrfileDetails: undefined;
  ChangePassword: undefined;
  EditProfile: undefined;
  Editstep2: undefined;
  SubscriptionHistory: undefined;
  MySubscription: undefined;
  ListingCardDetails: undefined;
  Cities: undefined;
  CitiesInner: undefined;
  AddListing: undefined;
  AgentsProfile: undefined;
  AddListingStep2: undefined;
  Message: undefined;
  Notification: undefined;
  TermsConditions: undefined;
  PrivacyPolicy: undefined;
  Faq: undefined;
  CreatePost: undefined;
  PostInner: undefined;
  GroupInner: undefined;
  Chat: undefined;
};

const Stack = createStackNavigator<UserStackType>();

export function Root(): React.JSX.Element {
  const [colors] = useStyle(({colors}) => ({
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
                  borderRadius="xl">
                  <Text font="Bold" text={'Back'} />
                </View>
              );
            },

            headerTitle(props) {
              return <Text size="h5" font="Bold" text={props.children} />;
            },
          }}>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen component={Welcome} name="Welcome" options={{ headerShown: false }} />
            <Stack.Screen
              component={Login}
              name="Login"
              options={{headerShown: false}}
            />
          </Stack.Group>
          {/* <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen component={Signup} name="Signup" />
            <Stack.Screen
              component={ProfessionalInfo}
              name="ProfessionalInfo"
            />
            <Stack.Screen component={UserTabs} name="Tabs" />
            <Stack.Screen component={ForgotPassword} name="ForgotPassword" />
            <Stack.Screen component={Profile} name="Profile" />
            <Stack.Screen component={Setting} name="Setting" />
            <Stack.Screen component={About} name="About" />
          
            <Stack.Screen component={PrfileDetails} name="PrfileDetails" />
            <Stack.Screen component={ChangePassword} name="ChangePassword" />
            <Stack.Screen component={EditProfile} name="EditProfile" />
            <Stack.Screen component={Editstep2} name="Editstep2" />
          
          </Stack.Group> */}
          {/* <Stack.Group
            screenOptions={{
              headerTintColor: '#fff',
              title: '',
              headerBackImage: () => <Icon name='HeaderArrow' size='m' />,
              headerBackTitleVisible: false,
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
              headerTransparent: true,
              headerRight(props) {
                return (
                  <View row gap marginRight>
                    <Pressable
                    >
                      <Icon
                        name="HeaderShare"
                        size='m'
                      />
                    </Pressable>
                  </View>
                )
              },
            }}
          >
            <Stack.Screen component={BookDetails} name="BookDetails" />

          </Stack.Group> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export type UserProps<ScreenName extends keyof UserStackType> =
  StackScreenProps<UserStackType, ScreenName>;
