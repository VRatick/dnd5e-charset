import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { TextArea } from 'react-native-ui-lib';

function Info(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.info);
  const info = [];
  const description = [];
  
  textForArray.infoText.forEach( (item) => {
    info.push(
      <View key={item} style={{
        height: 150,
        borderWidth: 1,        
        padding: 10,        
      }}>
        <Text>{text[0].character[item]}</Text>        
        <TextArea
          placeholder="Write something.."
          
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})
            props.changeCharacterParams(characterSet, 'info')                   
          }}           
          value={characterSet.item}/> 
      </View>
    )
  })
  textForArray.descriptionText.forEach( (item) => {
    description.push(
      <View key={item} style={{
        height: 150,
        borderWidth: 1,        
        padding: 10,        
      }}>
        <Text>{text[0].character[item]}</Text>        
        <TextArea
          placeholder="Write something.."
          
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})
            props.changeCharacterParams(characterSet, 'info')                              
          }}           
          value={characterSet.item}/> 
      </View>
    )
  })
    return (
      <ScrollView>
        <View>          
          {description}
          {info}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Info);