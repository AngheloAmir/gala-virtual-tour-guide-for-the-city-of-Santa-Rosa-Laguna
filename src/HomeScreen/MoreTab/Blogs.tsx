import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Blogs() {

    const styles = StyleSheet.create({
        container: {
            alignSelf: 'center',
            width: '90%',
        },
        title: {
            fontSize: 18,
            textAlign: 'center',
            marginBottom: 12,
        },
        listTitle: {
            marginTop: 8,
            fontWeight: '600',
        }
        
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blogs contains our own personal experience in Santa Rosa</Text>
            <Text>Example title contents were: </Text>

            <View>
                <Text style={styles.listTitle}> My experience as a residence of Santa Rosa </Text>
                <Text>
                    Personal story
                </Text>
            </View>

            <View>
                <Text style={styles.listTitle}> The first time I visit it... </Text>
                <Text>
                    
                </Text>
            </View>

            <View>
                <Text style={styles.listTitle}> the local folklore history (history of a Barangay) </Text>
                <Text>
                    
                </Text>
            </View>

            
        </View>
    )
}