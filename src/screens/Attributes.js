import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { Checkbox } from 'react-native-ui-lib';
import { style } from '../styles/attributes';
import title from '../assets/images/scroll_list.png'
import list from '../assets/images/background.png'

const styles = StyleSheet.create(style)

function Attributes(props) {  
  const [characterSet, setCharacterSet ] = useState(props.characterSet.attributes)    
  const characteristics = [];
  const saves = [];
  const skills = [];  

  textForArray.characteristicsText.forEach( (item) => {
    characteristics.push(
      <ImageBackground source={list} style={styles.backgroundList}>
        <View key={item} style={styles.box}>
          <Text>{text[0].character.characteristics[item]}</Text>
          <TextInput 
            style={styles.textBox}
            maxLength={3}
            onChangeText={text => {   
              const charset = {...characterSet};  
              charset[item] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'attributes')  
            }}      
            value={characterSet[item]}>            
          </TextInput>
          <TextInput 
            style={styles.textInput}
            maxLength={3}
            onChangeText={text => {
              const charset = {...characterSet};  
              charset[`mod_${item}`] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'attributes')                 
            }}           
            value={characterSet[`mod_${item}`]}>            
          </TextInput>
        </View>
      </ImageBackground>
    )
    saves.push(
      <View key={item} style={styles.flexCenter}>
        <View style={styles.checkbox}>
          <Checkbox 
            color='#917B62' 
            value={characterSet[`save_${item}_chek`]}
            onValueChange={text => {
              const charset = {...characterSet};  
              charset[`save_${item}_chek`] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'attributes')  
            }}/>
        </View>
        <TextInput 
          style={styles.textInput}
          maxLength={3} 
          onChangeText={text => {    
            const charset = {...characterSet};  
            charset[`save_${item}`] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')   
          }}          
          value={characterSet[`save_${item}`]}>            
        </TextInput>
        <Text style={styles.text}>{text[0].character.characteristics[item]}</Text>
      </View>
    )
  })

  textForArray.skillsText.forEach( (item) =>  {
    skills.push(
      <View style={styles.flexCenter}>
        <View style={styles.checkbox}>
          <Checkbox
            color='#917B62'
            iconColor='#F9D4A9' 
            value={characterSet[`${item}_chek`]}
            onValueChange={text => {
              const charset = {...characterSet};  
              charset[`${item}_chek`] = text;         
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'attributes')
            }}/>
        </View>
        <TextInput 
          style={styles.textInput}
          maxLength={3}       
          value={characterSet[item]}
          onChangeText={text => {            
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')                        
          }}>               
        </TextInput>
        <Text style={styles.text}>{text[0].character.skills[item]}</Text>        
      </View>
    )
  })

    return (
      <ScrollView style={styles.background}>
        <View style={styles.container}>
          <View>
            {characteristics}
          </View>
          <View>
            <View>
            <ImageBackground source={title} style={styles.backgroundImageItems}>
              <View style={styles.containerText}>
                <Text style={styles.text}>{text[0].character.inspiration_points}</Text>
                <TextInput 
                  style={styles.textInput}
                  maxLength={3}  
                  onChangeText={text => {
                    const charset = {...characterSet};  
                    charset.inspiration_points = text;         
                    setCharacterSet(charset)            
                    props.changeCharacterParams(charset, 'attributes') 
                  }}      
                  value={characterSet.inspiration_points}>            
                </TextInput>
              </View>
            </ImageBackground>    
            </View>
            <View style={{marginTop: 5}}>
              <ImageBackground source={title} style={styles.backgroundImageItems}>
                <View style={styles.containerText}>
                  <Text style={styles.text}>{text[0].character.skill_bonus}</Text>
                  <TextInput 
                    style={styles.textInput}
                    maxLength={3}  
                    onChangeText={text => {    
                      const charset = {...characterSet};  
                      charset.skill_bonus = text;         
                      setCharacterSet(charset)            
                      props.changeCharacterParams(charset, 'attributes') 
                    }}      
                    value={characterSet.skill_bonus}>            
                  </TextInput>  
                </View>
              </ImageBackground>          
            </View>
            <View style={{marginTop: 5}}>
              <ImageBackground source={title} style={styles.backgroundImageItems}>
                <Text style={styles.title}>{text[0].character.save}</Text>
              </ImageBackground>
              {saves}
            </View>
            <View style={{marginTop: 5}}>
              <ImageBackground source={title} style={styles.backgroundImageItems}>
                <Text style={styles.title}>{text[0].character.skill}</Text>
              </ImageBackground>
              {skills}
            </View>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Attributes);