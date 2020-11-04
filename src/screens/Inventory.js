import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import { TextArea } from 'react-native-ui-lib';

function Inventory(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet)

    return (
      <View style={{
        height: '100%',
        borderWidth: 1,        
        padding: 10,        
      }}>
        <Text>{text[0].character.items}</Text>
        <TextArea placeholder="Write something.." value={characterSet.items} onChangeText={ (value) => {
            setCharacterSet({...characterSet, items: value})          
          }
        }/>
      </View>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet) => dispatch(changeParams(charSet)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Inventory);