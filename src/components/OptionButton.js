import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '../../common/constants'

export default function OptionButton(props) {
    const {item,selected,onSelected} = props;
  return (
    <TouchableOpacity onPress={()=> onSelected(item.value)} style={[styles.container,{backgroundColor: selected == item.value ? Colors.SUCESS_GREEN : Colors.LIGHT_GREEN,}]}>
      <Text style={styles.text}>{item.value}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        height:hp(5),
        width:wp(30),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:6,
        marginVertical:hp(1)
    },
    text:{
        color:'black',
        fontWeight:'400'
    }
})
