import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
//@ts-ignore
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface propsReceive {
    navigation :any;
    title      :string
}

export default function Topbar(props :propsReceive) {
  function handleMenuClick() :void {
    props.navigation.openDrawer();
  }

  return (
    <View style={styles.topbar}>
        <TouchableOpacity  onPress={handleMenuClick}>
            <MaterialIcons name='menu' size={48} color='black' />
        </TouchableOpacity>
        <Text style={styles.topbarText}>
            { props.title }
        </Text>
    </View>
  );
}
      
const styles = StyleSheet.create({
  topbar: {
    alignSelf:       'stretch',
    backgroundColor: 'rgba(115, 170, 220, 1)',
    flexDirection:   'row',
    height:          50,
    paddingLeft:     8,
  },
  topbarText: {
    fontSize:         26,
    fontWeight:       "600",
    marginLeft:      24,
    marginTop:       8,
  },
});
