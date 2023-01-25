import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, ScrollView, TouchableOpacity} from 'react-native';
import { Colors, hp, wp } from '../../common/constants';
import { SuccessLoading, yearData } from '../../common/server';
import OptionButton from './OptionButton';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FilterModal = (props) => { 
    const {visible,
        setFilterVisible,
        launchYear,
        setLaunchYear,
        sLaunch,
        setSLaunch,
        sLoading,
        setSLoading,
        onSubmitFilter
    } = props;
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
         setFilterVisible(false)
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
            <Text style={styles.text}>Filters</Text>
            <TouchableOpacity onPress={()=>setFilterVisible(false)}>
            <AntDesign name="closecircleo" size={25} color={Colors.BLACK} />
            </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
              <Text style={styles.mainText}>Launch Year</Text>
              <View style={styles.lineContainer}/>
              <View style={styles.subListContainer}>
              {
                yearData.map((val,ind)=>{
                    return <OptionButton selected={launchYear} onSelected={(val)=>{
                      if(val != launchYear){
                        setLaunchYear(val)
                      }else{
                        setLaunchYear('')
                      }
                    }} item={val}/>
                })
              }  
              </View>
              <Text style={styles.mainText}>Successful Launch</Text>
              <View style={styles.lineContainer}/>

              <View style={styles.subListContainer}>
              {
                SuccessLoading.map((val,ind)=>{
                    return <OptionButton selected={sLaunch} onSelected={(val)=>{
                     if(val != sLaunch){
                      setSLaunch(val)
                     }else{
                      setSLaunch('')
                     }
                    }}  item={val}/>
                })
              }
              </View>

              <Text style={styles.mainText}>Successful Landing</Text>
              <View style={styles.lineContainer}/>

              <View style={styles.subListContainer}>
              {
                SuccessLoading.map((val,ind)=>{
                    return <OptionButton selected={sLoading} onSelected={(val)=>{
                      if(val != sLoading){
                        setSLoading(val)
                      }else{
                        setSLoading('')
                      }
                    }} item={val}/>
                })
              }
              </View>
              <TouchableOpacity style={styles.submitContainer} onPress={()=> onSubmitFilter()}>
                <Text style={{color:Colors.WHITE}}>Submit</Text>
            </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    width:wp(90),
    // position:'absolute',
    // bottom:0,
    alignSelf:'center',
    paddingHorizontal:wp(5),
    borderRadius:6,
    paddingBottom:hp(4)
  },
  filterContainer: {
    alignItems:'center',
    paddingBottom:hp(2)
  },
  text:{
   paddingVertical:hp(1),
   fontSize:22,
   fontWeight:'800',
   color:Colors.BLACK
  },
  lineContainer:{
    width:wp(40),
    height:2,
    backgroundColor:'gray',
    marginVertical:hp(1)
},
subListContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
    marginHorizontal:wp(5),
    width:wp(70)
},
mainText:{
    fontSize:16,
    fontWeight:'600',
    color:Colors.BLACK
},
submitContainer:{
    width:wp(40),
    height:hp(5),
    backgroundColor:Colors.SUCESS_GREEN,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2,
    marginVertical:hp(2),
    alignSelf:'center',
}
});

export default FilterModal;