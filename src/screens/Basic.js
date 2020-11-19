import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet, ImageBackground} from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { style } from '../styles/basic';
import title from '../assets/images/scroll_list.png'
import list from '../assets/images/background_sq.png'
import { Button, TextArea } from 'react-native-ui-lib';

const styles = StyleSheet.create(style)

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
      <View key={i+1} style={styles.flex}>
        <TextInput 
          style={styles.textInput}  
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
          label="X"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />       
      </View> 
    )
  }
  textForArray.classText.forEach( (item) => {
    classes.push(
      <ImageBackground key={item} source={title} style={styles.backgroundImageItems}>
        <View style={styles.flex}>
          <Text style={{marginTop: 5}}>{text[0].character[item]}</Text>
          <TextInput 
            style={styles.textInput}  
            onChangeText={text => {
              const charset = {...characterSet};  
              charset[item] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'basic')   
            }}      
            value={characterSet[item]}>            
          </TextInput>        
        </View>
      </ImageBackground>
    )
  })
  textForArray.armorText.forEach( (item) => {
    armor.push(
      <ImageBackground key={item} source={list} style={styles.backgroundArmor}>
        <View style={styles.containerArmor}>
          <Text>{text[0].character[item]}</Text>
          <TextInput 
            style={{ height: 60, fontSize: 30}}  
            onChangeText={text => {            
              const charset = {...characterSet};  
              charset[item] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'basic')                  
            }}      
            value={characterSet[item]}>            
          </TextInput>        
        </View>
      </ImageBackground>
    )
  })
  textForArray.hpText.forEach( (item) => {
    hp.push(
      <ImageBackground key={item} source={list} style={styles.backgroundHP}>
        <View style={styles.containerHP}>
          <Text style={{textAlign: 'center'}}>{text[0].character[item]}</Text>
          <TextInput 
            style={{ height: 40}}  
            onChangeText={text => {            
              const charset = {...characterSet};  
              charset[item] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'basic')                
            }}      
            value={characterSet[item]}>            
          </TextInput>        
        </View>
      </ImageBackground>
    )
  })
  const content = (
    <ScrollView >
      <View style={styles.background}>
        <ImageBackground source={title} style={styles.backgroundImageItems}>
          <View style={styles.flex}>
            <Text style={{marginTop: 5}}>{text[0].character.name}</Text>
            <TextInput 
              style={styles.textInput}  
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
        </ImageBackground>
        <View>
          {classes}
        </View>
        <View style={styles.container}>
          {armor}
        </View>
        <View style={styles.container}>
          {hp}
        </View>
        <View>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <Text style={styles.text}>{text[0].character.equipment}</Text>    
          </ImageBackground>    
          <TextArea
            placeholder="Write something.."
            style={styles.text}
            onChangeText={text => {            
              const charset = {...characterSet};
              charset.features_and_abilities = text;                       
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'info')                            
            }}           
            value={characterSet.features_and_abilities}/> 
        </View>
        <View style={{marginTop: 5, alignItems: 'center'}}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <Text style={{textAlign: 'center', marginTop: 7}}>{text[0].character.weapon}</Text>
          </ImageBackground>
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
          label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
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