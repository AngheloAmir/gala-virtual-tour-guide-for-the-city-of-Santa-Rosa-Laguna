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
import { setWebviewLink }       from '../localstateAPI/actions';
import { Stories }              from '../../../../database/!interfaces/HomeInterface';
import { storiesLink }          from '../functions/homejson';

export default function OfflineStories( {navigation} :any ) {
    const { localDispatch } :LocalStateAPI = React.useContext(localContextProvider);
    const [stories, setstories] = React.useState([]);

    function handleReadArticle(link :string) {
        localDispatch(setWebviewLink(link));
        navigation.navigate('WebView');
    }

    async function reloadArticles() {
        try {
            const result = await fetch(storiesLink);
            const res = await result.json();
            setstories(res.articles);
        }
        catch(err) { 
        }
    }

    React.useEffect(() => {
        reloadArticles();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.headingText}>Featured Stories</Text>
                { stories.length <= 0 ?
                    <View style={styles.news}>
                        <View style={styles.newsContainer}>
                            <View style={styles.descriptionContainer}>
                                <Text style={styles.newsDescription}>No stories are loaded. Check internet connection</Text>
                                <TouchableOpacity style={styles.readMoreContainer}>
                                    <Text style={styles.readMoreText}>..Reload..</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                :
                    <View>
                    <View style={styles.news}>
                    {
                        stories.map((story :Stories, index :number) => {
                            return (
                                <View style={styles.newsContainer} key={index}>
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.newsTitle}>{story.title}</Text>
                                        <Text style={styles.datePublish}>{story.date}</Text>
                                        <Text style={styles.newsDescription}>{story.text}</Text>
                                        <TouchableOpacity style={styles.readMoreContainer}
                                            onPress={() => handleReadArticle(story.link)}>
                                            <Text style={styles.readMoreText}>Read more...</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })
                    }
                    </View>
                    <TouchableOpacity style={styles.readMoreContainer} onPress={reloadArticles}>
                        <Text style={styles.readMoreTextArticle}> Refresh Articles </Text>
                    </TouchableOpacity>
                    </View>
                }
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

/*


function handleReadStory(index :number) {
        localDispatch( setStoryToRead(allstories[index]) );
        navigation.navigate('ReadStory');
    }

            <TouchableOpacity style={styles.readMoreContainer} onPress={handleReadMore}>
                <Text style={styles.readMoreTextArticle}> Look for more articles online </Text>
            </TouchableOpacity>
*/
