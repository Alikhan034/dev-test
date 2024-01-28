import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,FlatList} from 'react-native';
const days=[1,2,3,4,5,6,7];
export default function App() {

  return (
    <View style={styles.container}>
      <FlatList
      data={days}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      numColumns={2}
      renderItem={({item})=>(
        <View style={styles.box}>
        <Text style={styles.txt}>{item}</Text>
      </View>

      )}
   
      />

      


      




      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
    
  },
  content:{
    

  },
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
  column:{
    gap:10,
    padding:10,
  
  },
  txt:{
    color:'#9b4521',
    fontSize: 50,
  }
});
