import React, { useState } from 'react';
import { Text, View, Picker, ScrollView, TouchableHighlight, Modal, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import spells from '../assets/spells.json';
import { style } from '../styles/spells';
import title from '../assets/images/scroll_list.png'
import { Button } from 'react-native-ui-lib';

const styles = StyleSheet.create(style)

function Spells(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet.spells);
  const [content, setContent] = useState({
    "casting_time" : null,
    "components" : null,
    "description" : null,
    "duration" : null,
    "level" : null,
    "range" : null,
    "school" : null
  });  
  const [showModal, setShowModal] = useState(false)
  const conspiracies = [], 
        spell_lvl_1 = [], 
        spell_lvl_2 = [], 
        spell_lvl_3 = [], 
        spell_lvl_4 = [], 
        spell_lvl_5 = [], 
        spell_lvl_6 = [], 
        spell_lvl_7 = [], 
        spell_lvl_8 = [], 
        spell_lvl_9 = [],
        options_conspiracies = [],
        options_spell_lvl_1 = [],
        options_spell_lvl_2 = [],
        options_spell_lvl_3 = [],
        options_spell_lvl_4 = [],
        options_spell_lvl_5 = [],
        options_spell_lvl_6 = [],
        options_spell_lvl_7 = [],
        options_spell_lvl_8 = [],
        options_spell_lvl_9 = [],
        spellList = []
  for (var key in spells[0].spells) {    
    var spell = {
    name: key,
    casting_time:  spells[0].spells[key].casting_time,
    components:  spells[0].spells[key].components,
    description: spells[0].spells[key].description,
    duration: spells[0].spells[key].duration,
    level: spells[0].spells[key].level,
    range:  spells[0].spells[key].range,
    school: spells[0].spells[key].school
    }
    spellList.push(spell);
  } 

  spellList.forEach( (item, index) => {
    if (item.level === 0) {
      options_conspiracies.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 1) {
      options_spell_lvl_1.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 2) {
      options_spell_lvl_2.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 3) {
      options_spell_lvl_3.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 4) {
      options_spell_lvl_4.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 5) {
      options_spell_lvl_5.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 6) {
      options_spell_lvl_6.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 7) {
      options_spell_lvl_7.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 8) {
      options_spell_lvl_8.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
    if (item.level === 9) {
      options_spell_lvl_9.push(<Picker.Item key={index} label={item.name} value={index} />)
    }
  })  

  for (let i = 0; i < characterSet.conspiracies_count; i++) {
    conspiracies.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.conspiracies[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.conspiracies[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')  
          }}
        >
          {options_conspiracies}
        </Picker>
        <View style={styles.flex}>
          <Button
            onPress={ () => {            
              setContent({...content, 
                "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
                "components" : spellList[characterSet.conspiracies[i]].components,
                "description" : spellList[characterSet.conspiracies[i]].description,
                "duration" : spellList[characterSet.conspiracies[i]].duration,
                "level" : spellList[characterSet.conspiracies[i]].level,
                "range" : spellList[characterSet.conspiracies[i]].range,
                "school" : spellList[characterSet.conspiracies[i]].school
              })
              setShowModal(true)            
            }}                   
            label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
          />    
          <Button
            onPress={ () => {
              if (characterSet.conspiracies_count !== 1) {
                const charset = {...characterSet};  
                charset.conspiracies.splice(i, 1);
                charset.conspiracies_count = charset.conspiracies_count - 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')
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
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_1_count; i++) {
    spell_lvl_1.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_1[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_1[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')             
          }}
        >
          {options_spell_lvl_1}
        </Picker>
        <Button
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                              
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_1_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_1.splice(i, 1);
              charset.spell_lvl_1_count = charset.spell_lvl_1_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                            
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

  for (let i = 0; i < characterSet.spell_lvl_2_count; i++) {
    spell_lvl_2.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_2[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_2[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells') 
          }}
        >
          {options_spell_lvl_2}
        </Picker>
        <Button
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                              
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_2_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_2.splice(i, 1);
              charset.spell_lvl_2_count = charset.spell_lvl_2_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                 
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

  for (let i = 0; i < characterSet.spell_lvl_3_count; i++) {
    spell_lvl_3.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_3[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_3[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')   
          }}
        >
          {options_spell_lvl_3}
        </Picker>
        <Button 
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                             
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_3_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_3.splice(i, 1);
              charset.spell_lvl_3_count = charset.spell_lvl_3_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                
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

  for (let i = 0; i < characterSet.spell_lvl_4_count; i++) {
    spell_lvl_4.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_4[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_4[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')    
          }}
        >
          {options_spell_lvl_4}
        </Picker>
        <Button 
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                             
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_4_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_4.splice(i, 1);
              charset.spell_lvl_4_count = charset.spell_lvl_4_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                   
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

  for (let i = 0; i < characterSet.spell_lvl_5_count; i++) {
    spell_lvl_5.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_5[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_5[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')    
          }}
        >
          {options_spell_lvl_5}
        </Picker>
        <Button  
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                            
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_5_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_5.splice(i, 1);
              charset.spell_lvl_5_count = charset.spell_lvl_5_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                 
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

  for (let i = 0; i < characterSet.spell_lvl_6_count; i++) {
    spell_lvl_6.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_6[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_6[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')    
          }}
        >
          {options_spell_lvl_6}
        </Picker>
        <Button 
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                             
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_6_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_6.splice(i, 1);
              charset.spell_lvl_6_count = charset.spell_lvl_6_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                 
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

  for (let i = 0; i < characterSet.spell_lvl_7_count; i++) {
    spell_lvl_7.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_7[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_7[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')    
          }}
        >
          {options_spell_lvl_7}
        </Picker>
        <Button 
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                             
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_7_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_7.splice(i, 1);
              charset.spell_lvl_7_count = charset.spell_lvl_7_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                   
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

  for (let i = 0; i < characterSet.spell_lvl_8_count; i++) {
    spell_lvl_8.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_8[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_8[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells') 
          }}
        >
          {options_spell_lvl_8}
        </Picker>
        <Button
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                              
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_8_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_8.splice(i, 1);
              charset.spell_lvl_8_count = charset.spell_lvl_8_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                  
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

  for (let i = 0; i < characterSet.spell_lvl_9_count; i++) {
    spell_lvl_9.push(
      <View key={i+1} style={styles.flex}>
        <Picker
          selectedValue={characterSet.spell_lvl_9[i]}
          style={styles.picker}
          onValueChange={ ( text ) => {
            const charset = {...characterSet};  
            charset.spell_lvl_9[i] = text;         
            setCharacterSet(charset)            
            props.changeCharacterParams(charset, 'spells')        
          }}
        >
          {options_spell_lvl_9}
        </Picker>
        <Button 
          onPress={ () => {            
            setContent({...content, 
              "casting_time": spellList[characterSet.conspiracies[i]].casting_time,
              "components" : spellList[characterSet.conspiracies[i]].components,
              "description" : spellList[characterSet.conspiracies[i]].description,
              "duration" : spellList[characterSet.conspiracies[i]].duration,
              "level" : spellList[characterSet.conspiracies[i]].level,
              "range" : spellList[characterSet.conspiracies[i]].range,
              "school" : spellList[characterSet.conspiracies[i]].school
            })
            setShowModal(true)            
          }}                             
          label="!"
            backgroundColor="#A99073"
            color="black"            
            labelStyle={{fontWeight: '700'}}
            size='xSmall'
            style={{borderWidth: 1}}
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_9_count !== 1) {
              const charset = {...characterSet};  
              charset.spell_lvl_9.splice(i, 1);
              charset.spell_lvl_9_count = charset.spell_lvl_9_count - 1
              setCharacterSet(charset)            
              props.changeCharacterParams(charset, 'spells')                      
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

    return (
      <ScrollView style={styles.background}>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Conspiracies</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8}  
                onChangeText={text => {    
                  const charset = {...characterSet}; 
                  charset.conspiracies_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')  
                }}      
                value={characterSet.conspiracies_text}>            
              </TextInput>
            </View>
          </ImageBackground> 
          {conspiracies}
          <Button
            onPress={() => {
              if (characterSet.conspiracies_count !== 10) {
                const charset = {...characterSet}; 
                charset.conspiracies.push(0);
                charset.conspiracies_count = charset.conspiracies_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells') 
              }              
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 1</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => { 
                  const charset = {...characterSet}; 
                  charset.spell_lvl_1_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                  
                }}      
                value={characterSet.spell_lvl_1_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_1}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_1_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_1.push(9);
                charset.spell_lvl_1_count = charset.spell_lvl_1_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells') 
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 2</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_2_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                  
                }}      
                value={characterSet.spell_lvl_2_text}>            
              </TextInput> 
            </View>
          </ImageBackground> 
          {spell_lvl_2}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_2_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_2.push(1);
                charset.spell_lvl_2_count = charset.spell_lvl_2_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')  
              }             
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 3</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_3_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                  
                }}      
                value={characterSet.spell_lvl_3_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_3}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_3_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_3.push(7);
                charset.spell_lvl_3_count = charset.spell_lvl_3_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')   
              }              
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 4</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_4_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')               
                }}      
                value={characterSet.spell_lvl_4_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_4}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_4_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_4.push(3);
                charset.spell_lvl_4_count = charset.spell_lvl_4_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells') 
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 5</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_5_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')               
                }}      
                value={characterSet.spell_lvl_5_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_5}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_5_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_5.push(15);
                charset.spell_lvl_5_count = charset.spell_lvl_5_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 6</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_6_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                
                }}      
                value={characterSet.spell_lvl_6_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_6}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_6_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_6.push(8);
                charset.spell_lvl_6_count = charset.spell_lvl_6_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')    
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 7</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_7_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                  
                }}      
                value={characterSet.spell_lvl_7_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_7}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_7_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_7.push(23);
                charset.spell_lvl_7_count = charset.spell_lvl_7_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')    
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text>Spell lvl 8</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_8_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                 
                }}      
                value={characterSet.spell_lvl_8_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_8}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_8_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_8.push(2);
                charset.spell_lvl_8_count = charset.spell_lvl_8_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')   
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <View style={styles.marginBottom}>
          <ImageBackground source={title} style={styles.backgroundImageItems}>
            <View style={styles.title}>
              <Text >Spell lvl 9</Text>
              <TextInput 
                style={ styles.textInput }
                maxLength={8} 
                onChangeText={text => {            
                  const charset = {...characterSet}; 
                  charset.spell_lvl_9_text = text
                  setCharacterSet(charset)            
                  props.changeCharacterParams(charset, 'spells')                
                }}      
                value={characterSet.spell_lvl_9_text}>            
              </TextInput> 
            </View>
          </ImageBackground>
          {spell_lvl_9}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_9_count !== 10) {
                const charset = {...characterSet}; 
                charset.spell_lvl_9.push(5);
                charset.spell_lvl_9_count = charset.spell_lvl_9_count + 1
                setCharacterSet(charset)            
                props.changeCharacterParams(charset, 'spells')
              }               
            }}
            label="Add"
            backgroundColor="#E7C49D"
            color="black"            
            labelStyle={{fontWeight: '700'}}            
            style={{borderWidth: 1, width: 250, marginTop: 5}}
          />  
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.marginBottom}>Casting time: {content.casting_time}</Text>
              <Text style={styles.marginBottom}>Components: {content.components}</Text>
              <Text style={styles.marginBottom}>Description: {content.description}</Text>
              <Text style={styles.marginBottom}>Duration: {content.duration}</Text>
              <Text style={styles.marginBottom}>Level: {content.level}</Text>
              <Text style={styles.marginBottom}>Range: {content.range}</Text>
              <Text style={styles.marginBottom}>School: {content.school}</Text>

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <Text>Hide information</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </ScrollView>
    );
  }

const mapStateToProps = ( state ) => ({
    characterSet: state.characterSet.characterSet,    
  });

const mapDispatchToProps = (dispatch) => ({    
    changeCharacterParams: (charSet, screen) => dispatch(changeParams(charSet, screen)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Spells);