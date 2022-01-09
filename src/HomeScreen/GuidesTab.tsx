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
import { View, Platform, Linking, Text, BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
import { WindowDimension } from '../Utility/useResponsive';
const guidelist = require('../../database/guides.json');

export default function GuidesIndex({navigation} :any) {
    const [isLoading, setLoading] = React.useState(true);
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
    }

    return (
        <View style={{flex: 1, flexDirection:'column'}}>
            { isLoading && <Text style={{
                width: '80%', marginLeft: '10%', fontSize: 18
            }}
            >Please wait while the guides are loading from the server...</Text> }
            <WebView
                ref={webViewRef}
                onNavigationStateChange={handleURLChange}
                source={{uri: guidelist.homelink}}
                style={{flex: 1, width: WindowDimension.width, height: '100%'}}
                onLoadEnd={() => setLoading(false) }
            />
        </View>
    );
}
