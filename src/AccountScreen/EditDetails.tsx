import React from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import {contextProvider, StateAPI} from '../StateAPI/State';
import { updateInfo } from '../StateAPI/Actions';
import { Responsive, useResponsive } from '../Utility/useResponsive';

import AvatarIcon from '../Utility/AvatarIcon';

export default function EditDetails( {navigation} :any ) {
    const { dispatch, state } :StateAPI = React.useContext(contextProvider);
    const responsive :Responsive = useResponsive();
    const [form, setform] = React.useState({
        avatar: state.user.avatar, name: state.user.name, status: state.user.status, about: state.user.about
    })

    function avatarIconStyle(id :number) {
        if(id === form.avatar)
            return styles.avatarActive;
        return styles.avatarNonActive;
    };

    function setAvatar(id :number) {
        setform({...form, avatar: id});
    }

    function handleNameChange(name :string) {
        setform({...form, name});
    }

    function handleStatusChange(name :string) {

    }

    function handleAboutChange(about :string) {
        setform({...form, about});
    }

    function updateUserInfo() {
        if(form.name.length < 2) {
            Alert.alert('Name to short', 'The name cannot be less than 2 letters or empty');
            console.log('Name cannot be too small');
            return;
        }
        dispatch(updateInfo(form.name, form.about, form.avatar));
        navigation.navigate('Account');
    }

    const styles = StyleSheet.create({
        container: {
            alignSelf: 'center',
            justifyContent: 'center',
            width: responsive.containerWidth + 20,
        },
        formContainer: {
            flexDirection: 'column',
            height: responsive.height - 250,
            paddingHorizontal: 4,
            width: '100%',
        },
        formText: {
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 6,
        },
        formTextAvatar: {
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 6,
        },
        formInput: {
            backgroundColor:    'white',
            borderRadius:       8,
            fontSize:           14,
            height:             26,
            paddingLeft:        12,
        },
        formInputDesc: {
            backgroundColor:    'white',
            borderRadius:       8,
            fontSize:           14,
            height:             26 * 5,
            paddingLeft:        12,
        },
        avatarRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
        },
        avatarActive: {
            borderColor: 'blue',
            borderRadius: 8,
            borderWidth: 2,
        },
        avatarNonActive: {
            padding: 2,
        },
        notice: {
            alignSelf: 'center',
            color: 'gray',
            fontSize: 10,
        },
        buttonContainer: {
            alignSelf: 'center',
            marginTop: 21,
            width: responsive.containerWidth,
        },
    });

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.formText}>Name:</Text>
                <TextInput style={styles.formInput} placeholder='Name' value={form.name} maxLength={24} onChangeText={handleNameChange}/>
                <Text style={styles.formText}>Status:</Text>
                <TextInput style={styles.formInput} placeholder='status' value={form.status} maxLength={24} onChangeText={handleStatusChange}/>
                <Text style={styles.formText}>Info:</Text>
                <TextInput style={styles.formInputDesc}  multiline={true} numberOfLines={5} maxLength={256} placeholder='Short description of yourself for the community' value={form.about} onChangeText={handleAboutChange}/>
                
                <Text style={styles.formTextAvatar}> Choose Avatar </Text>
                <View style={styles.avatarRow}>
                    <TouchableOpacity style={avatarIconStyle(0)} onPress={() => setAvatar(0)}>
                        <AvatarIcon avatar={0} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(1)} onPress={() => setAvatar(1)}>
                        <AvatarIcon avatar={1} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(2)} onPress={() => setAvatar(2)}>
                        <AvatarIcon avatar={2} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(3)} onPress={() => setAvatar(3)}>
                        <AvatarIcon avatar={3} width={48} height={48} />
                    </TouchableOpacity>
                </View>
                <View style={styles.avatarRow}>
                    <TouchableOpacity style={avatarIconStyle(4)} onPress={() => setAvatar(4)}>
                        <AvatarIcon avatar={4} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(5)} onPress={() => setAvatar(5)}>
                        <AvatarIcon avatar={5} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(6)} onPress={() => setAvatar(6)}>
                        <AvatarIcon avatar={6} width={48} height={48} />
                    </TouchableOpacity>
                    <TouchableOpacity style={avatarIconStyle(7)} onPress={() => setAvatar(7)}>
                        <AvatarIcon avatar={7} width={48} height={48} />
                    </TouchableOpacity>
                </View>
            </View>
        
            <Text style={styles.notice}>Please dont not provide and give important information about you.</Text>

            <View style={styles.buttonContainer}>
                <Button title='Update info' onPress={updateUserInfo} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title='Cancel' onPress={() => navigation.navigate('Account')} />
            </View>
        </View>
    )
}