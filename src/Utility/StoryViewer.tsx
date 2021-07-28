/*
    Show an article

Example usage =======================================================
export default App() {
    const article = {
        title:          "temp story",
        date:           "2021",
        headerImage:    require('./assets/mypic.png'),
        contents: [
            {
                headingText:  "The title of a paragraph (heading text)",
                image:        require('./assets/mypic.png'),
                paragraph:    "A paragraph here",
                link:         "https://google.com",
                linkText:     "this link appear in the bottom of the paragraph",
                links:        {
                    link: "https://google.com",
                    text: "the link appear in the image (attribution)"
                }
            },
        ]
    };

    return (
        <StoryViewer story={article} />
    )
}
*/

import React from 'react';
import { View, ImageSourcePropType, ScrollView, Linking, Dimensions,
        Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface propsReceive {
    story :Story;
}

export interface Story {
    title?        :string;
    date?         :string;
    headerImage?  :ImageSourcePropType | any;
    contents?     :Array<StoryContent>;
    accordion?    :Array<StoryContent>;
}

export interface StoryContent {
    headingText?    :string;
    image?          :ImageSourcePropType;
    paragraph?      :string;
    link?           :string;
    linkText?       :string;
    links?          :{ //which appear only in an image
        link :string;
        text :string; 
    };
}

/*==========================================================================*/
/*==========================================================================*/
/*==========================================================================*/
const { height, width } = Dimensions.get('screen');
const WindowDimension = { height, width };

export default function StoryViewer(props :propsReceive) {
    const styles = StyleSheet.create({
        guideContainer: {
            paddingBottom: 24,
        },
        textContainer: {
            width: '90%', marginLeft: '5%',
        },
        title: {
            fontSize:    21,
            fontWeight:  '700',
            marginTop:   8,
        },
        paragraphContainer: {
            textAlign: 'justify',
            marginVertical: 12,
        },
        heading: {
            fontSize: 24,
            alignContent: 'stretch',
        },
        datePublish: {
            fontSize: 18,
            fontWeight: '300',
            color: 'gray',
        },
        headingImage: {
            width: WindowDimension.width,
            height: WindowDimension.width * 0.7,
        },
    });

    const story = props.story;

    return (
    <ScrollView style={styles.guideContainer}>
        { story.headerImage && <Image source={ story.headerImage } style={styles.headingImage} resizeMode='cover' /> }
        <View style={styles.textContainer}>
            { story.title && <Text style={styles.title}>{story.title}</Text> }
            { story.date  && <Text style={styles.datePublish}>{story.date} </Text> }
            { story.contents && story.contents.map((value :StoryContent, index :number ) => {
                    return <Paragraph key={index} value={value} />
                })
            }
            { story.accordion && story.accordion && <Accordion value={story.accordion} /> }
        </View>
    </ScrollView>
    )
};

/*==========================================================================*/
interface ParagraphProps {
    value                :StoryContent;
    isNotRenderTitle?    :boolean;
}

function Paragraph( props :ParagraphProps) {
    const styles = StyleSheet.create({
        paragraphContainer: {
            textAlign: 'justify',
            marginVertical: 12,
        },
        heading: {
            fontSize: 21,
            textAlign: 'left',
        },
        paragraph: {
            fontSize: 18, lineHeight: 28, marginBottom: 0, marginTop: 4,
        },
        contentImage: {
            width:      WindowDimension.width * 0.85,
            height:     (WindowDimension.width * 0.85) * 0.7,
            alignSelf: 'center',
        },
        attributionContainer: {

        },
        link: {
            color: 'blue',
            fontStyle: 'italic',
            textDecorationLine: 'underline'
        },
    });

    function handleVisitLink(link :string | any) {
        Linking.openURL(link).catch(err => console.error("Couldn't load page", err));
    }

    return (
        <View style={styles.paragraphContainer}>
            { props.value.headingText && !props.isNotRenderTitle && <Text style={styles.heading}>{props.value.headingText} </Text> }
            { props.value.image       && <ParagraphImage value={props.value} /> }
            { props.value.paragraph   &&
                <Text style={styles.paragraph}>{props.value.paragraph}
                    { props.value.link && props.value.linkText &&
                        <TouchableOpacity onPress={() => handleVisitLink(props.value.link)}>
                            <Text style={styles.link}> { props.value.linkText } </Text>
                        </TouchableOpacity>
                    }
                </Text>
            }
        </View>
    );
}

function ParagraphImage(props :ParagraphProps) {
    const styles = StyleSheet.create({
        contentImage: {
            width:      WindowDimension.width * 0.85,
            height:     (WindowDimension.width * 0.85) * 0.7,
            alignSelf: 'center',
        },
        attributionContainer: {
            position: 'absolute', bottom: 1, left: 8,
            width: '100%',
            
        },
        link: {
            color: 'blue', fontSize: 14,
            textDecorationLine: 'underline',
        },
    });

    function handleLinkView() {
        props.value.links       &&
        props.value.links.link  &&
        Linking.openURL(props.value.links.link).catch(err => console.error("Couldn't load page", err));
    }

    return (
        <View>
            { props.value.image && <Image source={ props.value.image } style={styles.contentImage} resizeMode='cover' /> }
            <View style={styles.attributionContainer}>
            {
                props.value.links &&
                    <TouchableOpacity style={styles.attributionContainer} onPress={handleLinkView}>
                        <Text style={styles.link}>{props.value.links.text}</Text>
                    </TouchableOpacity>
            }
            </View>
        </View>
    );
}

/*==========================================================================*/
interface AccordionProps {
    value :Array<StoryContent> 
}

function Accordion(props :AccordionProps ) {
    const [currentOpenList, setOpenedList] = React.useState(-1);

    const styles = StyleSheet.create({
        accordionItem: {
            textAlign: 'justify',
            marginVertical: 5,
        },
        accordionHeading: {
            fontSize: 21,
            alignContent: 'stretch',
            padding: 6,
            paddingLeft: 8,
        },
        accordionSelected: {
            fontSize: 21,
            alignContent: 'stretch',
            borderRadius: 8,
            backgroundColor: '#ddd',
            padding: 4,
            paddingLeft: 8,
        }
    });

    return(
    <View>
    {
        props.value.map((item :StoryContent, itemindex :number) => {
        return (
            <View key={itemindex} style={styles.accordionItem}>
                <View style={{flexDirection: 'row', alignContent: 'space-between'}}>
                    <TouchableOpacity style={{flexDirection: 'row', alignContent: 'space-between', width: '100%'}}
                        onPress={() => {
                            if(itemindex === currentOpenList) setOpenedList(-1);
                            else setOpenedList(itemindex);
                    }}>
                        <View style={{width: '90%'}}>
                            <Text style={currentOpenList === itemindex ? styles.accordionSelected : styles.accordionHeading}>{item.headingText}</Text>
                        </View>
                        <View>
                        { currentOpenList === itemindex ?
                            <MaterialIcons name='arrow-drop-up' size={32} color={'black'} /> :
                            <MaterialIcons name='arrow-drop-down' size={32} color={'black'} />
                        }
                        </View>
                    </TouchableOpacity>
                </View>
                { currentOpenList === itemindex && <Paragraph value={props.value[itemindex]} isNotRenderTitle={true} /> }
            </View>
        )})
    }
    </View>
    );
}
