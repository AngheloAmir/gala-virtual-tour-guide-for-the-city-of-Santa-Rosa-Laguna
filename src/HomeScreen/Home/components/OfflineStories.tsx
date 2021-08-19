/*
    * TYPE
        Fragment of src/HomeScreen/Home/HomeIndex - A fragment is a piece of component that is
            part of a scene

    * DESCRIPTION
        Show the content of the "Top stories to read" part of the home tab

    * VISIBLE WHEN
      When the user is in Home Screen and in the Home Tab
*/
import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { localContextProvider } from '../localstateAPI/state';
import { LocalStateAPI }        from '../localstateAPI/interface';
import { setStoryToRead, setWebviewLink } from '../localstateAPI/actions';

import { Stories }              from '../../../../database/!interfaces/HomeInterface';
import { offlinestories, allstories, website } from '../functions/homejson';

export default function OfflineStories( {navigation} :any ) {
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);

    function handleReadStory(index :number) {
        localDispatch( setStoryToRead(allstories[index]) );
        navigation.navigate('ReadStory');
    }

    function handleReadMore() {
        localDispatch(setWebviewLink(website.morearticles));
        navigation.navigate('WebView');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Top Stories To Read</Text>

            <View style={styles.news}>
                {
                    offlinestories.map((story :Stories, index :number) => {
                        return (
                            <View style={styles.newsContainer} key={index}>
                                <View style={styles.descriptionContainer}>
                                    <Text style={styles.newsTitle}>{story.title}</Text>
                                    <Text style={styles.datePublish}>{story.date}</Text>
                                    <Text style={styles.newsDescription}>{story.text}</Text>
                                    <TouchableOpacity style={styles.readMoreContainer}
                                        onPress={() => handleReadStory(index)}>
                                        <Text style={styles.readMoreText}>Read more...</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </View>

            <TouchableOpacity style={styles.readMoreContainer} onPress={handleReadMore}>
                <Text style={styles.readMoreTextArticle}> Look for more articles online </Text>
            </TouchableOpacity>
        </View>
    )
}

import GlobalStyle from '../../../Utility/GloabalStyles';
const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
        borderColor:  'rgba(115, 170, 220, 1)',
        ...GlobalStyle.defaultBackground,
        borderWidth: 1,
        borderRadius: 8,
        paddingTop: 12,
        paddingBottom: 16,
    },
    headingText: {
        alignSelf: 'center',
        fontSize: 20,
        paddingHorizontal: 32,
        textAlign: 'center',
    },
    news: {
        marginBottom: 16,
        width: '95%', alignSelf: 'center',
    },
    newsContainer: {
        flexDirection: 'row',
        padding: 4,
        marginTop: 8,
        borderColor:  'rgba(115, 170, 220, 1)',
        backgroundColor: '#eee',   
        borderWidth: 1,
        borderRadius: 8,
        textAlign: 'justify',
    },
    descriptionContainer: {
        flex: 1, paddingHorizontal: 8, paddingVertical: 4,
    },
    newsTitle: {
        fontSize: 20, color: 'darkblue' 
    },
    datePublish: {
        fontSize: 18,
        fontWeight: '300',
        color: 'gray',
        marginBottom: 8,
    },
    newsDescription: {
        alignSelf: 'stretch',
        fontSize: 18,
    },
    btnContainer: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 6,
    },
    readMoreContainer: {
        alignSelf: 'center',
        marginTop: 4,
    },
    readMoreText: {
        color: 'blue',
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    readMoreTextArticle: {
        color: 'blue',
        fontSize: 20,
        textDecorationLine: 'underline',
    }

});
