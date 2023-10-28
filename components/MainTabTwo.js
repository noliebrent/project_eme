import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TextInput, Modal} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MainTabTwo({ navigation }) {
  return (
      <View style={styles.container}>
        <Text style={styles.HeadingText}>Lost&Found</Text>
            <View style={styles.searchcontainer}>
              <TextInput
                style={styles.TextInput}
                placeholder="Let's find your things!"
              />
                <TouchableOpacity>
                  <Ionicons name="search" style={styles.SearchIcon} />
                </TouchableOpacity>
            </View>
          <View style={styles.NavigationSearch}>
          <TouchableOpacity onPress={() => navigation.navigate('MainTab')}>
            <Text style={styles.NavigationText}>Claimed</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MainTabTwo')}>
            <Text style={styles.NavigationText}>Unclaimed</Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={styles.scrollcontainer}>
            <View>
              <Text>Olivia Rodrigo</Text>
            </View>
            <View style={styles.kunwari}>
              <Text style={styles.commenttext}>piktur</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.commentcontainer}>
                  <FontAwesome5 name="comment" size={24} style={{ transform: [{ scaleX: -1 }] }} />
                  <Text style={styles.commenttext}>Comment</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text>Olivia Rodrigo</Text>
            </View>
            <View style={styles.kunwari}>
              <Text style={styles.commenttext}>piktur 1</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.commentcontainer}>
                  <FontAwesome5 name="comment" size={24} style={{ transform: [{ scaleX: -1 }] }} />
                  <Text style={styles.commenttext}>Comment</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text>Rodrigo</Text>
            </View>
            <View style={styles.kunwari}>
              <Text style={styles.commenttext}>piktur 2</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.commentcontainer}>
                  <FontAwesome5 name="comment" size={24} style={{ transform: [{ scaleX: -1 }] }} />
                  <Text style={styles.commenttext}>Comment</Text>
              </View>
            </TouchableOpacity>
            <View>
              <Text>Olivia</Text>
            </View>
            <View style={styles.kunwari}>
              <Text style={styles.commenttext}>piktur 3</Text>
            </View>
            <TouchableOpacity>
              <View style={styles.commentcontainer}>
                  <FontAwesome5 name="comment" size={24} style={{ transform: [{ scaleX: -1 }] }} />
                  <Text style={styles.commenttext}>Comment</Text>
              </View>
            </TouchableOpacity>
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
    marginTop: 10,
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
  searchcontainer: {
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 4,
    alignItems: 'center',
    marginRight: 40,
    marginLeft: 40,
  },
  TextInput: {
    fontSize: 19,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center'
},
commentcontainer: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#D9D9D9',
  marginLeft: 130,
  marginRight: 130,
  padding: 4,
  justifyContent: 'space-between',
},
commenttext: {
  fontSize: 20,
  textAlign: 'center'
},
kunwari: {
  backgroundColor: '#D9D9D9',
  marginTop: 10,
  marginLeft: 40,
  marginRight: 40,
  padding: 100,
  marginBottom: 10,
}
});
