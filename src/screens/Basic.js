import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Button, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';

function Basic(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.basic);
  const classes = [];
  const armor = [];
  const hp = [];
  const weapons = [];
  const [firstLaunch, setFirstLaunch] = useState(true)

  async function retrieveData () {
    try {
      const value = await AsyncStorage.getItem('CHARSET');
      if (value !== null) {
        props.changeCharacterParams(JSON.parse(value), false)
        setFirstLaunch(false);            
      }
    } catch (error) {
      console.log(error)
    }
  };

  if (firstLaunch) {
    retrieveData();  
  } 

  for (let i = 0; i < characterSet.weapon_count; i++) {
    weapons.push(
      <View key={i+1}>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
          onChangeText={text => {   
            const weapon = [...characterSet.weapon]
            weapon[i] = text;         
            setCharacterSet({...characterSet, weapon: weapon})
            props.changeCharacterParams(characterSet, 'basic')                 
          }}      
          value={characterSet.weapon[i]}>            
        </TextInput>
        <Button
          onPress={ () => {
            if (characterSet.weapon_count !== 1) {
              const weapon = [...characterSet.weapon]
              weapon.splice(i, 1);
              setCharacterSet({...characterSet, weapon_count: characterSet.weapon_count - 1, weapon: weapon})
              props.changeCharacterParams(characterSet, 'basic')                  
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />       
      </View> 
    )
  }
  textForArray.classText.forEach( (item) => {
    classes.push(
      <View key={item}>
        <Text>{text[0].character[item]}</Text>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})
            props.changeCharacterParams(characterSet, 'basic')                   
          }}      
          value={characterSet[item]}>            
        </TextInput>        
      </View>
    )
  })
  textForArray.armorText.forEach( (item) => {
    armor.push(
      <View key={item}>
        <Text>{text[0].character[item]}</Text>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})
            props.changeCharacterParams(characterSet, 'basic')                   
          }}      
          value={characterSet[item]}>            
        </TextInput>        
      </View>
    )
  })
  textForArray.hpText.forEach( (item) => {
    hp.push(
      <View key={item}>
        <Text>{text[0].character[item]}</Text>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})
            props.changeCharacterParams(characterSet, 'basic')                   
          }}      
          value={characterSet[item]}>            
        </TextInput>        
      </View>
    )
  })      
    return (
      <ScrollView>
        <View>
          <View>
            <Text>{text[0].character.name}</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, name: text})
                props.changeCharacterParams(characterSet, 'basic')                   
              }}      
              value={characterSet.name}>            
            </TextInput>
          </View>
          <View>
            {classes}
          </View>
          <View style={{
          flexDirection: "row"        
        }}>
            {armor}
          </View>
          <View>
            {hp}
          </View>
          <View>
            <Text>{text[0].character.weapon}</Text>
            {weapons}
            <Button
            onPress={() => {
              if (characterSet.weapon_count !== 5) {
              setCharacterSet({...characterSet, weapon_count: characterSet.weapon_count + 1})
              props.changeCharacterParams(characterSet, 'basic')    
              }              
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
          </View>          
        </View>
      </ScrollView>
    );
  }


const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Basic);