import React, { useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import textForArray from '../assets/textForArray.json';
import { TextArea } from 'react-native-ui-lib';

function Inventory(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet)
  const coins = [];

  textForArray.coinsText.forEach( (item) => {
    coins.push(
      <View key={item} style={{
        height: 100,
        borderWidth: 1,        
        padding: 10,        
      }}>
        <Text>{text[0].character[item]}</Text>        
        <TextArea
          placeholder="Write something.."
          
          onChangeText={text => {            
            setCharacterSet({...characterSet, [item]: text})               
          }}           
          value={characterSet.item}/> 
      </View>
    )
  })

    return (
      <ScrollView>
        {coins}
        <View style={{
          height: 500,
          borderWidth: 1,        
          padding: 10,        
        }}>
          <Text>{text[0].character.items}</Text>
          <TextArea placeholder="Write something.." value={characterSet.items} onChangeText={ (value) => {
              setCharacterSet({...characterSet, items: value}) 
              console.log(characterSet.items);         
            }
          }/>
        </View>
      </ScrollView>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet) => dispatch(changeParams(charSet)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);