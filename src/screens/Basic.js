import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, Button} from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        setCharacterSet(JSON.parse(value).basic)     
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
            const charset = {...characterSet};  
            charset.weapon[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'basic')             
          }}      
          value={characterSet.weapon[i]}>            
        </TextInput>
        <Button
          onPress={ () => {
            if (characterSet.weapon_count !== 1) {
              const charset = {...characterSet};  
              charset.weapon.splice(i, 1);
              charset.weapon_count = charset.weapon_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'basic')                  
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
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'basic')   
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
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'basic')                  
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
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'basic')                
          }}      
          value={characterSet[item]}>            
        </TextInput>        
      </View>
    )
  })
  const content = (
    <ScrollView>
      <View>
        <View>
          <Text>{text[0].character.name}</Text>
          <TextInput 
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
            onChangeText={text => {   
              const charset = {...characterSet};  
            charset.name = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'basic')           
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
              const charset = {...characterSet};  
              charset.weapon_count = charset.weapon_count + 1;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'basic') 
            }              
          }}
          title="Add"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        />  
        </View>          
      </View>
    </ScrollView>
    )
  
    return (
      <View>
        {firstLaunch ? null : content}
      </View>
    );
  }


const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Basic);