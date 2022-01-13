/*
    * TYPES
        Scene - A screen is a component that occupies a large part of the screen
        Index - A component that does not display itself

    * DESCRIPTION
        Show the content of the Home > Guide tab by using a webview

    * VISIBLE WHEN
        When the user is in Home Screen and in the Guide Tab
*/
//@ts-nocheck
import React from 'react';
import { View, Platform, Linking, Text, BackHandler, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { WindowDimension } from '../Utility/useResponsive';

const guidelist = require('../../database/guides.json');

//another tricky operation here.
//when the bottom tab of the guide is pressed, the guide should return to the home page
//as the default behavoir. However, the web view does not allow this by default
//a work arround will implemented for this
export let webview;
//the webview contains the reference from the webview ref for it to be accessed by
//the index.tsx of the home screen

export default function GuidesIndex({navigation} :any) {
    const [isLoading, setLoading] = React.useState(true);
    const [isIgniton, setIgnito] = React.useState(true);
    const [isDBShow, setShow]    = React.useState(false);
    const webViewRef = React.useRef(null);

    //this ref is quite tricky to use. it was created to enable backbutton even on webview
    //because if backbutton does not capture webview history back, it back on the previous screen
    //so b default, use webview for a single page website.
    const backrate = React.useRef(0);

    if(Platform.OS == 'web') {
        Linking.canOpenURL(guidelist.homelink).then((supported :any) => {
            if (supported) {
                Linking.openURL(guidelist.homelink);
            }
        });
    }

    function backpress() {
        //enable the back button as the "back from prevoius url" behavoir
        //since the back button is absorb by the React Navigation
        if(navigation.isFocused()) {
            if(backrate.current == 0)
                return false;
            backrate.current = backrate.current - 1;
            webViewRef.current.goBack();
            return true;
        }
        return false;
    }

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', backpress);
        webview = webViewRef;
        return () => {
            try {
                removeEventListener("hardwareBackPress", backpress);
            }
            catch(err) {
            }
        }
      }, []);
    
    function handleURLChange(url) {
        //check if the current browser link is at home
        if(url.url.length <= guidelist.homelink.length + 1)
            return;
        backrate.current = 1;

        //After first load, cache everything
        setIgnito(false);
        setShow( !isDBShow);
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            { isLoading &&
                <Text style={styles.textInfo}>
                    Please wait while the guides are loading from the server...</Text>
            }

            { isDBShow &&
                <Text style={styles.textInfo}>Loading from the server...</Text>
            }

            <WebView
                ref={webViewRef}
                onNavigationStateChange={handleURLChange}
                source={{uri: guidelist.homelink}}
                onLoadEnd={() => setLoading(false) }
                incognito={isIgniton}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    textInfo: {
        width: '100%',
        paddingHorizontal: '10%',
        paddingVertical: 16,
        fontSize: 18,
        backgroundColor: 'orange',
        position: 'absolute',
        zIndex: 20,
        fontSize: 16,
        textAlign: 'center'
    }
})