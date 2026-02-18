import {
  AgentCard,
  FlatList,
  Icon,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from '@components';
import {UserProps} from '..';
import {Platform} from 'react-native';

const data = [
  {
    id: 1,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User1',
  },
  {
    id: 2,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User2',
  },
  {
    id: 3,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User3',
  },
  {
    id: 4,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User4',
  },
  {
    id: 1,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User1',
  },
  {
    id: 2,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User2',
  },
  {
    id: 3,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User3',
  },
  {
    id: 4,
    name: 'Matthew Vargas',
    state: 'New York',
    img: 'User4',
  },
];
const Agents = (props: UserProps<'Tabs'>) => {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <Text size="h1" font="SemiBold">
        Agents
      </Text>
      <TextInput
        id="search"
        type="text"
        placeholder="Search"
        left={() => <Icon name="Search" size="s" />}
        leftDull={() => <Icon name="Search" size="s" />}
        right={() => <Icon name="Gallery" size="s" />}
        rightDull={() => <Icon name="Gallery" size="s" />}
      />
      <FlatList
        data={data}
        gap="s"
        renderItem={({item}) => (
          <AgentCard {...item} navigation={props.navigation} />
        )}
      />
    </View>
  );
};

export default Agents;
