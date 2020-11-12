import React, { useState, useCallback } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import { TextArea } from 'react-native-ui-lib';

function History(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.history)  

    return (
      <View style={{
        height: '100%',
        borderWidth: 1,        
        padding: 10,        
      }}>
        <Text>{text[0].character.history}</Text>
        <TextArea placeholder="Write something.." 
        value={characterSet.history} 
        onChangeText={ 
          (text) => {                   
            const charset = {...characterSet};
            charset.history = text;                       
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'history')      
        }}        
        />
      </View>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(History);