import React, { useState } from 'react';
import { Text, View, Picker, ScrollView, Button, TouchableHighlight, Modal, TextInput  } from 'react-native';
import { connect } from 'react-redux';
import { changeParams } from '../redux/actions/charset';
import text from '../assets/text.json';
import spells from '../assets/spells.json';

function Spells(props) {
  const [characterSet, setCharacterSet ] = useState(props.characterSet);
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
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.conspiracies[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const conspiraciesList = [...characterSet.conspiracies]
            conspiraciesList[i] = item;
            setCharacterSet({...characterSet, conspiracies: conspiraciesList})
          }}
        >
          {options_conspiracies}
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.conspiracies_count !== 1) {
              const conspiraciesList = [...characterSet.conspiracies]
              conspiraciesList.splice(i, 1);
              setCharacterSet({...characterSet, conspiracies_count: characterSet.conspiracies_count - 1, conspiracies: conspiraciesList})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_1_count; i++) {
    spell_lvl_1.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_1[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_1]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_1: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_1_count !== 1) {
              const list = [...characterSet.spell_lvl_1]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_1_count: characterSet.spell_lvl_1_count - 1, spell_lvl_1: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_2_count; i++) {
    spell_lvl_2.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_2[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_2]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_2: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_2_count !== 1) {
              const list = [...characterSet.spell_lvl_2]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_2_count: characterSet.spell_lvl_2_count - 1, spell_lvl_2: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_3_count; i++) {
    spell_lvl_3.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_3[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_3]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_3: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_3_count !== 1) {
              const list = [...characterSet.spell_lvl_3]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_3_count: characterSet.spell_lvl_3_count - 1, spell_lvl_3: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_4_count; i++) {
    spell_lvl_4.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_4[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_4]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_4: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_4_count !== 1) {
              const list = [...characterSet.spell_lvl_4]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_4_count: characterSet.spell_lvl_4_count - 1, spell_lvl_4: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_5_count; i++) {
    spell_lvl_5.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_5[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_5]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_5: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_5_count !== 1) {
              const list = [...characterSet.spell_lvl_5]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_5_count: characterSet.spell_lvl_5_count - 1, spell_lvl_5: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_6_count; i++) {
    spell_lvl_6.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_6[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_6]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_6: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_6_count !== 1) {
              const list = [...characterSet.spell_lvl_6]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_6_count: characterSet.spell_lvl_6_count - 1, spell_lvl_6: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_7_count; i++) {
    spell_lvl_7.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_7[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_7]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_7: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_7_count !== 1) {
              const list = [...characterSet.spell_lvl_7]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_7_count: characterSet.spell_lvl_7_count - 1, spell_lvl_7: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_8_count; i++) {
    spell_lvl_8.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_8[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_8]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_8: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_8_count !== 1) {
              const list = [...characterSet.spell_lvl_8]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_8_count: characterSet.spell_lvl_8_count - 1, spell_lvl_8: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

  for (let i = 0; i < characterSet.spell_lvl_9_count; i++) {
    spell_lvl_9.push(
      <View key={i+1}>
        <Picker
          selectedValue={characterSet.spell_lvl_9[i]}
          style={{ height: 50, width: 150 }}
          onValueChange={ ( item ) => {
            const list = [...characterSet.spell_lvl_9]
            list[i] = item;
            setCharacterSet({...characterSet, spell_lvl_9: list})
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
          title="Info"
          color="yellow"
          accessibilityLabel="Learn more about this purple button"
        />    
        <Button
          onPress={ () => {
            if (characterSet.spell_lvl_9_count !== 1) {
              const list = [...characterSet.spell_lvl_9]
              list.splice(i, 1);
              setCharacterSet({...characterSet, spell_lvl_9_count: characterSet.spell_lvl_9_count - 1, spell_lvl_9: list})              
              }  
          }}          
          title="Delete"
          color="red"
          accessibilityLabel="Learn more about this purple button"
        />    
      </View>
    )
  }

    return (
      <ScrollView>
        <View>
          <View>
            <Text>Conspiracies</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, conspiracies_text: text})               
              }}      
              value={characterSet.conspiracies_text}>            
            </TextInput> 
          </View>
          {conspiracies}
          <Button
            onPress={() => {
              if (characterSet.conspiracies_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(0);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }              
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 1</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_1_text: text})               
              }}      
              value={characterSet.spell_lvl_1_text}>            
            </TextInput> 
          </View>
          {spell_lvl_1}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_1_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(9);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 2</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_2_text: text})               
              }}      
              value={characterSet.spell_lvl_2_text}>            
            </TextInput> 
          </View>
          {spell_lvl_2}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_2_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(1);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }             
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 3</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_3_text: text})               
              }}      
              value={characterSet.spell_lvl_3_text}>            
            </TextInput> 
          </View>
          {spell_lvl_3}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_3_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(7);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }              
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 4</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_4_text: text})               
              }}      
              value={characterSet.spell_lvl_4_text}>            
            </TextInput> 
          </View>
          {spell_lvl_4}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_4_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(3);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 5</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_5_text: text})               
              }}      
              value={characterSet.spell_lvl_5_text}>            
            </TextInput> 
          </View>
          {spell_lvl_5}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_5_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(15);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 6</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_6_text: text})               
              }}      
              value={characterSet.spell_lvl_6_text}>            
            </TextInput> 
          </View>
          {spell_lvl_6}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_6_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(8);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 7</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_7_text: text})               
              }}      
              value={characterSet.spell_lvl_7_text}>            
            </TextInput> 
          </View>
          {spell_lvl_7}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_7_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(23);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 8</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_8_text: text})               
              }}      
              value={characterSet.spell_lvl_8_text}>            
            </TextInput> 
          </View>
          {spell_lvl_8}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_8_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(2);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <View>
          <View>
            <Text>Spell lvl 9</Text>
            <TextInput 
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}  
              onChangeText={text => {            
                setCharacterSet({...characterSet, spell_lvl_9_text: text})               
              }}      
              value={characterSet.spell_lvl_9_text}>            
            </TextInput> 
          </View>
          {spell_lvl_9}
          <Button
            onPress={() => {
              if (characterSet.spell_lvl_9_count !== 10) {
                const list = [...characterSet.conspiracies];
                list.push(5);
                setCharacterSet({...characterSet,conspiracies_count: characterSet.conspiracies_count + 1, conspiracies: list})
              }               
            }}
            title="Add"
            color="green"
            accessibilityLabel="Learn more about this purple button"
          />  
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}          
        >
          <View >
            <View>
              <Text>Casting time: {content.casting_time}</Text>
              <Text>Components: {content.components}</Text>
              <Text>Description: {content.description}</Text>
              <Text>Duration: {content.duration}</Text>
              <Text>Level: {content.level}</Text>
              <Text>Range: {content.range}</Text>
              <Text>School: {content.school}</Text>

              <TouchableHighlight
                style={{backgroundColor: "#2196F3" }}
                onPress={() => {
                  setShowModal(!showModal);
                }}
              >
                <Text>Hide Modal</Text>
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
    changeCharacterParams: (charSet) => dispatch(changeParams(charSet)),    
    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Spells);