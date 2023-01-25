import { View, Text,ScrollView,StyleSheet, TouchableOpacity,ActivityIndicator } from 'react-native'
import React,{useState,useEffect} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import OptionButton from '../src/components/OptionButton'
import SpaceItemCard from '../src/components/SpaceItemCard'
import { Colors, hp } from '../common/constants';
import FilterModal from '../src/components/FilterModal'
import { Api } from '../common/api';
export default function MainScreen() {
    const [filterVisible,setFilterVisible] = useState(false);
    const [launchYear,setLaunchYear] = useState('');
    const [sLaunch,setSLaunch] = useState('');
    const [sLoading,setSLoading] = useState('');
    const [listData,setListData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);

    useEffect(()=>{
      setIsLoading(true)  
      Api({}).then((res)=>{
        setListData(res);
        setIsLoading(false)
      })
    },[])

const onHandlewSubmit = () => {
    setIsLoading(true)
    let obj = {
        launch_success: sLaunch == 'True' ? true : false,
        land_success: sLoading == 'True' ? true : false,
        launch_year: launchYear
    }
    Api(obj).then((res)=>{
        console.log('response',res)
        setListData(res);
        setFilterVisible(false)
        setIsLoading(false)
    })
}

if(isLoading){
    return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>    
    <ActivityIndicator size="large" color={Colors.SUCESS_GREEN} />
    </View>
    )
}

  return (
    <View style={styles.maincontainer}>
    <View style={styles.mainSubContainer}>
     <Text style={styles.mainTitleText}>SpaceX Launch</Text>   
     <TouchableOpacity onPress={()=> setFilterVisible(true)} style={styles.filterContainer}> 
     <AntDesign name="filter" size={30} color={Colors.BLACK} />
     </TouchableOpacity>
    </View>
    <ScrollView>
     {
        listData.length > 0 ?
        <View>           
        {
            listData.map((val,ind)=>{
                return  <SpaceItemCard index={ind} item={val}/>
            })
        }
        </View> : 
        <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(30)}}>
            <Text style={{fontSize:18,fontWeight:'600',color:Colors.BLACK}}>No Space Launcher Found</Text>
        </View>
     }   
   
    <FilterModal 
    launchYear={launchYear} 
    setLaunchYear={setLaunchYear}  
    visible ={filterVisible} 
    setFilterVisible={setFilterVisible}
    sLaunch={sLaunch}
    setSLaunch={setSLaunch}
    sLoading={sLoading}
    setSLoading={setSLoading}
    onSubmitFilter={()=> onHandlewSubmit()}
    />
    </ScrollView>
   </View>
  )
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1
    },
    mainTitleText:{
        fontSize:28,
        color:Colors.BLACK,
        fontWeight:'600'
    },
    mainSubContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        marginVertical:hp(1)
    },
    filterContainer:{
        backgroundColor:Colors.WHITE,
        elevation:2,
        padding:5
    }
})