import {
  Button,
  Form,
  Icon,
  Image,
  MediaPicker,
  Page,
  Pressable,
  Text,
  TextInput,
  View,
  Checkbox,
  SignUpheader,
  OptionPicker,
} from '@components';
import {UserProps} from '.';
import {RadioButton} from '../components/form/controls/Radio';
import {Platform} from 'react-native';

function ProfessionalInfo(props: UserProps<'ProfessionalInfo'>) {
  return (
    <View
      paddingTop={Platform.OS === 'ios' ? 'xl' : 's'}
      flex
      gap="b"
      paddingHorizontal
      backgroundColor="onPrimary">
      <Form>
        <SignUpheader step={2} {...props} />
        <Page backgroundColor="onPrimary">
          <View flex gap>
            <View marginTop="l">
              <Text size="h3" font="SemiBold" text="Professional Info" />
              <Text
                color="subHeading"
                font="Regular"
                size="h6"
                text="Register yourself here to continue.."
              />
            </View>

            <RadioButton
              id="broker"
              label="Profession Type"
              optional
              options={[
                {
                  value: 'broker',
                  label: 'Real State Broker',
                },
                {
                  value: 'lender',
                  label: 'Lender/ mtg Broker',
                },
              ]}
            />
            <RadioButton
              id="broker"
              label="Multi state License"
              optional
              options={[
                {
                  value: 'yes',
                  label: 'Yes',
                },
                {
                  value: 'no',
                  label: 'No',
                },
              ]}
            />
            <Text size="h5" marginTop="s" font="Medium" text="Location" />
            <View row gap>
              <OptionPicker
                id="city"
                next="state"
                style={{backgroundColor: '#000'}}
                placeholder="City"
                options={[
                  {title: 'New York', id: 1},
                  {title: 'Los Angeles', id: 2},
                  {title: 'Chicago', id: 3},
                  {title: 'Houston', id: 4},
                  {title: 'Phoenix', id: 5},
                ]}
                width={165}
                editable={true}
                right={() => <Icon name="DownArrow" size="s" />}
                rightDull={() => <Icon name="DownArrow" size="s" />}
              />
              <OptionPicker
                id="state"
                next="city"
                placeholder="State"
                options={[
                  {title: 'Alabama', id: 'Alabama'},
                  {title: 'Alaska', id: 'Alaska'},
                  {title: 'Arizona', id: 'Arizona'},
                  {title: 'Arkansas', id: 'Arkansas'},
                  {title: 'California', id: 'California'},
                  // Add more states here...
                ]}
                width={165}
                editable={true}
                right={() => <Icon name="DownArrow" size="s" />}
                rightDull={() => <Icon name="DownArrow" size="s" />}
              />
            </View>
            <Text
              size="h5"
              marginTop="s"
              font="Medium"
              text="State License Image"
            />
            <MediaPicker
              id="profile"
              type="image"
              max={1}
              children={({firstImage, Error, images, openPicker}) => (
                <View>
                  {firstImage?.path ? (
                    <Pressable onPress={() => openPicker({override: true})}>
                      <Image
                        source={{uri: firstImage?.path}}
                        height={123}
                        width={343}
                        borderRadius="s"
                      />
                    </Pressable>
                  ) : (
                    <Pressable
                      onPress={() => openPicker({override: true})}
                      align="center"
                      gap
                      backgroundColor="background"
                      borderRadius="s"
                      padding="l">
                      <Icon name="Upload" size="s" />
                      <Text size="small" font="Regular" text="Upload Image" />
                    </Pressable>
                  )}
                </View>
              )}
            />
            <Button
              onPress={() => props.navigation.navigate('Tabs')}
              label="Register"
            />
            <Pressable
              onPress={() => props.navigation.navigate('Login')}
              row
              gap="xs"
              flex
              align="mid">
              <Text size="h6" font="Regular" text="Already have an account? " />
              <Text color="primary" size="h6" font="Regular" text="Sign in" />
            </Pressable>
          </View>
        </Page>
      </Form>
    </View>
  );
}

export default ProfessionalInfo;
