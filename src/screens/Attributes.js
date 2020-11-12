import React, { useState } from 'react';
import { Text, View, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { Checkbox } from 'react-native-ui-lib';

function Attributes(props) {  
  const [characterSet, setCharacterSet ] = useState(props.characterSet.attributes)    
  const characteristics = [];
  const saves = [];
  const skills = [];  

  textForArray.characteristicsText.forEach( (item) => {
    characteristics.push(
      <View key={item}>
        <Text>{text[0].character.characteristics[item]}</Text>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
          onChangeText={text => {   
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')  
          }}      
          value={characterSet[item]}>            
        </TextInput>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {
            const charset = {...characterSet};  
            charset[`mod_${item}`] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')                 
          }}           
          value={characterSet[`mod_${item}`]}>            
        </TextInput>
      </View>
    )
    saves.push(
      <View key={item} style={{
        flexDirection: "row"        
      }}>
        <Checkbox 
          value={characterSet[`save_${item}_chek`]}
          onValueChange={text => {
            const charset = {...characterSet};  
            charset[`save_${item}_chek`] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')  
          }}/>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => {    
            const charset = {...characterSet};  
            charset[`save_${item}`] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')   
          }}          
          value={characterSet[`save_${item}`]}>            
        </TextInput>
        <Text>{text[0].character.characteristics[item]}</Text>
      </View>
    )
  })

  textForArray.skillsText.forEach( (item) =>  {
    skills.push(
      <View key={item} style={{
        flexDirection: "row"        
      }}>
        <Checkbox 
          value={characterSet[`${item}_chek`]}
          onValueChange={text => {
            const charset = {...characterSet};  
            charset[`${item}_chek`] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')
          }}/>
        <TextInput 
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}        
          value={characterSet[item]}
          onChangeText={text => {            
            const charset = {...characterSet};  
            charset[item] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'attributes')                        
          }}>               
        </TextInput>
        <Text>{text[0].character.skills[item]}</Text>        
      </View>
    )
  })

    return (
      <ScrollView>
        <View  style={{
          flexDirection: "row"        
        }}>
          <View>
            <View>
              <Text>{text[0].character.inspiration_points}</Text>
              <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
                onChangeText={text => {
                  const charset = {...characterSet};  
                  charset.inspiration_points = text;         
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'attributes') 
                }}      
                value={characterSet.inspiration_points}>            
              </TextInput>            
            </View>
            <View>
              <Text>{text[0].character.skill_bonus}</Text>
              <TextInput 
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
                onChangeText={text => {    
                  const charset = {...characterSet};  
                  charset.skill_bonus = text;         
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'attributes') 
                }}      
                value={characterSet.skill_bonus}>            
              </TextInput>            
            </View>
            {characteristics}
          </View>
          <View>
            {saves}
            {skills}
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