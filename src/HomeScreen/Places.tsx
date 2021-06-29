import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Responsive, useResponsive } from '../Utility/useResponsive';

export default function Places() {
  const responsive :Responsive = useResponsive(); 

  const styles = StyleSheet.create({
    headingText: {
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 4,
      marginTop: 12,
    },
    cardsContainer: {
      alignSelf: 'center',
      borderColor: 'rgba(115, 170, 220, 1)',
      borderRadius: 2,
      borderWidth: 1,
      marginTop: 12,
      width: responsive.width * 0.9,
    },
    cardsImage: {
      width: '100%',
      height: 150,
    },
    cardText: {
      fontSize: 18,
      fontWeight: '600',
      padding: 4,
    }

  });

  return (
    <ScrollView style={{marginBottom: 12}}>
      <Text style={styles.headingText}>Select Category</Text>

      <TouchableOpacity style={styles.cardsContainer}>
        <Image source={require('../../assets/landmark.jpg')} style={styles.cardsImage} />
        <Text style={styles.cardText}>Tourist Spot</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.cardsContainer}>
        <Image source={require('../../assets/establishment.jpg')} style={styles.cardsImage}  />
        <Text style={styles.cardText}>Establishments</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardsContainer}>
        <Image source={require('../../assets/bus-stop.jpg')} style={styles.cardsImage}  />
        <Text style={styles.cardText}>Terminals</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}