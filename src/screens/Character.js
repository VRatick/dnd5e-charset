import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';

function Character(props) {
    return (
      <View>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
        <Text>{props.characterSet.spell_lvl_8_count}</Text>
      </View>
    );
  }


const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet) => dispatch(changeParams(charSet)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Character);