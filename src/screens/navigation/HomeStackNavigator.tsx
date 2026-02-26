import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home/Home';
import AddDocument from '../home/AddDocument';
import EditDocument from '../home/EditDocument';
import ScanDocumentCameraScreen from '../home/ScanDocumentCameraScreen';
import DocTermsAndCondition from '../home/DocTermsAndCondition';
import BackgroundScreening from '../home/BackgroundScreening';
import { Header, SecHeader } from '@components';
import CustomerSupport from '../home/CustomerSupport';
import Contact from '../home/Contact';
// const HomeStack = createNativeStackNavigator();

const HomeStack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        header(props: any) {
          return <SecHeader {...props} />;
        },
        title: 'Add Documents',
      }}
    >
      <HomeStack.Screen
        name="HomeMain"
        component={Home}
        options={{
          header(props: any) {
            return <Header {...props} />;
          },
        }}
        // options={{ title: 'Home' }}
      />
      <HomeStack.Screen name="AddDocument" component={AddDocument} />
      <HomeStack.Screen name="EditDocument" component={EditDocument} />
      <HomeStack.Screen
        name="Scan Document Camera"
        component={ScanDocumentCameraScreen}
      />
      <HomeStack.Screen
        name="DocTermsAndCondition"
        component={DocTermsAndCondition}
      />
      <HomeStack.Screen
        name="Background Screening"
        component={BackgroundScreening}
      />
      <HomeStack.Screen
        name="CustomerSupport"
        component={CustomerSupport}
        options={{
          title: 'Customer Support',
        }}
      />
      <HomeStack.Screen
        name="Contact"
        component={Contact}
        options={{
          title: 'Customer Support',
        }}
      />
    </HomeStack.Navigator>
  );
}
