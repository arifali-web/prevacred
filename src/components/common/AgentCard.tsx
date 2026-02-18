
import React from 'react'
import { Icon, Image, Pressable, Text, View } from '@components'
export function AgentCard({ ...props }: any) {
    return (
        <Pressable onPress={() => props.navigation.navigate('AgentsProfile')} row space='between' align='center' backgroundColor="background" padding='s' borderRadius='b'>
            <View row gap='b' align='center'>
                <Image src={props.img} width={50} aspectRatio={1} resizeMode='contain' borderRadius='s' />
                <View>
                    <Text marginBottom='xs' size='h6' font='Medium' text={props.name} />
                    <Text style={{ opacity: 0.6 }} color='subHeading' size='small' font='Regular' text={props.state} />
                </View>
            </View>
            <View row gap='s' align='center'>
                <Pressable style={{ backgroundColor: '#EEF6E6' }} borderRadius='s' padding='xs' >
                    <Icon name='Call' size='xxs' />
                </Pressable>
                <Pressable style={{ backgroundColor: '#E6EDF6' }} borderRadius='s' padding='xs' >
                    <Icon name='MessageBlue' size='xxs' />
                </Pressable>
            </View>
        </Pressable>
    )
}