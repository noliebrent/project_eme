import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function MainTab({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.HeadingText}>Lost&Found</Text>
        <View style={styles.NavigationSearch}>
          <TouchableOpacity>
            <Text style={styles.NavigationText}>FOR YOU</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="search" size={35} style={styles.SearchIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.NavigationText}>YOUR POSTS</Text>
          </TouchableOpacity>
        </View>
          <View>
            <Text>Olivia Rodrigo</Text>
          </View>
        <ScrollView style={styles.scrollcontainer}>
          <Text style={styles.example}>Nice</Text>
        </ScrollView>
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
    backgroundColor: 'white',
    height: 900,
  },
  SearchIconStyle: {
    alignItems: 'center',
  },
  SearchIcon: {
    fontSize: 35,
  },
  NavigationSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 40,
    marginRight: 40,
  },
  NavigationText: {
    fontSize: 22,
  },
  example: {
    fontSize: 18,
  },
  HeadingText: {
    marginTop: 60,
  },
  rectangle: {
    width: 'auto',
    height:55,
    backgroundColor: '#485E6E',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
