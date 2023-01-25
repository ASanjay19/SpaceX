import { View, Text, StyleSheet,Image } from 'react-native'
import React from 'react'
import { Colors, hp, images, wp } from '../../common/constants'

export default function SpaceItemCard(props) {
  const {item,index} = props;
  return (
    <View style={styles.container} key={index.toString()}>
      <View style={styles.imageContainer}>
        <Image source={images[index % 4]} resizeMode='contain' style={{height:hp(30),width:wp(50)}}/>
      </View>
      <Text style={styles.textName}>{`${item.mission_name}#${item.flight_number}`}</Text>
      <View style={styles.missionIdContainer}>
        <Text style={styles.textBold}>Mission Ids:</Text>
        {
          item.mission_id.map((item,ind)=>{
            return  <Text style={styles.listIdsText}>{`\u25CF ${item}`}</Text>
          })
        }
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.textBold}>Launch Year:</Text>
        <Text style={styles.normalText}>{item.launch_year}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.textBold}>Successfull Launch:</Text>
        <Text style={styles.normalText}>{item.launch_success ? 'True' : 'False'}</Text>
      </View>
      <View style={styles.subContainer}>
      <Text style={styles.textBold}>Successfull Loading:</Text>
        <Text style={styles.normalText}>{item.rocket?.first_stage?.cores[0]?.landing_intent ? 'launch_loading' : 'launch_notLoading'}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.WHITE,
    padding:wp(5),
    marginVertical:hp(1),
    marginHorizontal:wp(5),
    borderRadius:10,
    elevation:2
  },
  imageContainer:{
    backgroundColor:Colors.GRAY,
    justifyContent:'center',
    alignItems:'center'
  },
  textName:{
    fontSize:16,
    fontWeight:'800',
    color:Colors.LIGHT_BLUE,
    marginVertical:hp(1)
  },
  missionIdContainer:{
    marginVertical:hp(1)
  },
  textBold:{
    fontSize:16,
    fontWeight:'800',
    color:Colors.BLACK,
    width:wp(50)
  },
  listIdsText:{
    fontSize:14,
    color:Colors.LIGHT_BLUE,
    marginLeft:wp(5),
    marginTop:hp(1)
  },
  subContainer:{
    flexDirection:'row',
    marginVertical:hp(1)
  },
  normalText:{
    color:Colors.LIGHT_BLUE,
    marginLeft:wp(1)
  }
})