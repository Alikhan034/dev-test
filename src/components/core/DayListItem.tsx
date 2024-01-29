import { Inter_900Black } from "@expo-google-fonts/inter";
import { Text,View,StyleSheet } from "react-native";
type DayListItem={
    day:number;
}

export default function DayListItem({day}){
    return(

        <View style={styles.box}>
        <Text style={styles.txt}>{day}</Text>
      </View>
    )

}

const styles = StyleSheet.create({
   
    box:{
      backgroundColor:'#f9EDE3',
      /* width:100,
      height:100, */
      flex:1,
      aspectRatio:1,
    
      justifyContent:'center',
      alignItems:'center',
      borderWidth:StyleSheet.hairlineWidth,
      borderColor: '#9b4521',
      borderRadius:20,
      
    },
    
    txt:{
      color:'#9b4521',
      fontSize: 75,
      fontFamily:'AmaticBold',
    }
  });
  