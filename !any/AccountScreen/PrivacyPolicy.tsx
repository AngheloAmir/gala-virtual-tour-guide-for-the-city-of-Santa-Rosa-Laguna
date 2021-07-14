import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Responsive, useResponsive } from '../Utility/useResponsive';

export default function PrivacyPolicy({navigation} :any) {
    const responsive :Responsive = useResponsive();

    const styles = StyleSheet.create({
        container: {
            alignSelf: 'center',
            marginTop: 24,
            width: responsive.containerWidth
        },
        header: {
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
        },
        textContainer: {
            marginVertical: 24,
        },
        text: {
            fontSize: 16,
        }
    })

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Privacy Policy and the Terms and Condition</Text>

            <ScrollView style={styles.textContainer}>
                <Text>
                    All information that you provided in this app grant us (the Gala developer) and the community to use it in anyway without your consent.
                </Text>
                <Text>
                    Therefore, we advise you that do not give any very important and critical information such as birthday, address, email, phone number, password etc...
                </Text>
                <Text>
                    The Gala developer do not collect your email, real name etc and the messages that you sent were only used as part of the community
                </Text>
                <Text>
                    Disclaimer: The software is provided without waranty of any kind.
                </Text>
            </ScrollView>

            <Button title='ok' onPress={() => navigation.navigate('Account')} />
        </View>
    )
}