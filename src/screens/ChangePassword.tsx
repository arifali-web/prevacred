import {
  BackArrow,
  Text,
  View,
  Form,
  Icon,
  TextInput,
  Button,
} from '@components';
import React from 'react';
import {UserProps} from '.';
import {Platform} from 'react-native';

export default function ChangePassword(props: UserProps<'ChangePassword'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal>
      <BackArrow title="Change Password" navigation={props.navigation} />
      <Form>
        <View gap>
          <TextInput
            id="password"
            type="password"
            // label='Password'
            placeholder="Password"
            left={() => <Icon name="Lock" size="s" />}
            leftDull={() => <Icon name="LockDull" size="s" />}
            rightDull={() => <Icon name="EyeDull" size="s" />}
            right={() => <Icon name="Eye" size="s" />}
          />
          <TextInput
            id="newPassword"
            type="password"
            // label='Password'
            placeholder="New Password"
            left={() => <Icon name="Lock" size="s" />}
            leftDull={() => <Icon name="LockDull" size="s" />}
            rightDull={() => <Icon name="EyeDull" size="s" />}
            right={() => <Icon name="Eye" size="s" />}
          />
          <TextInput
            id="confirmPassword"
            type="password"
            // label='Password'
            placeholder="Confirm Password"
            left={() => <Icon name="Lock" size="s" />}
            leftDull={() => <Icon name="LockDull" size="s" />}
            rightDull={() => <Icon name="EyeDull" size="s" />}
            right={() => <Icon name="Eye" size="s" />}
          />
          <Button
            onPress={() => props.navigation.navigate('Tabs')}
            label="Update"
          />
        </View>
      </Form>
    </View>
  );
}
