import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Tab5({ navigation }) {
return (
    <View style={styles.container}>
        <View style={styles.scrollcontainer}>
            <Text style={styles.example}>Nice</Text>
            <View style={styles.logoutcontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.logoutext}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={styles.rectangle}>
            <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
                <AntDesign name="tagso" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tab2')}>
                <MaterialIcons name="post-add" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tab3')}>
            <AntDesign name="home" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tab4')}>
                <Feather name="bell" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Tab5')}>
                <Feather name="user" size={50} color="black" />
            </TouchableOpacity>
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    scrollcontainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    rectangle: {
        width: 'auto',
        height:55,
        backgroundColor: '#485E6E',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoutcontainer: {
        backgroundColor: '#EAD83B',
        padding: 5,
        marginLeft: 130,
        marginRight: 130,
        marginTop: 660,
    },
    logoutext: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    }
});