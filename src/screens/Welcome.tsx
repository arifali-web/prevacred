import React from 'react'
import { Button, Image, ImageBackground, Text, View } from '@components'
import { UserProps } from '.'

const AlfredWelcome = (props: UserProps<"Welcome">) => {
    return (
        <ImageBackground src='BackgroundImage' height={"100%"} >
            <View padding margin flex gap='l' align='middle'>
                <Image src='Logo' height={120} width={'100%'} resizeMode='contain' />
                <Text size="h1" textAlign='center' font="PopinsBold" color="onPrimary" >Read your favourite book from here.</Text>
                <Text textAlign='center' font='PopinsRegular' size="h6" color="onPrimary" >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                <View >
                <Button type='Outline' label="Get Started" onPress={() => props.navigation.navigate("Login")} />
                </View>
            </View>
        </ImageBackground>
    )
}

export default AlfredWelcome