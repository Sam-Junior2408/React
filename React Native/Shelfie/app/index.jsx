import { StyleSheet, Text, View, Image  } from 'react-native'
import Logo from '../assets/images/monitor.png'
import {Link} from 'expo-router'
const Home = () => {
  return (
    
    <View style={styles.container}>
        <Image source={Logo} style={styles.img}  />
      <Text style={styles.title}>Viewing Home</Text>
      <Text style={{marginTop: 20, fontSize: 16, backgroundColor: 'red'}}>
        Home Sweet Home
        </Text>
        
        {/* <View>
            <Text style={styles.card}>
                This is a card
            </Text>

        </View> */}
        <Link href="/about" style={styles.link}>About Page</Link>
        <Link href="/contact" style={styles.link}>Contact Page</Link>
        

    </View> 

    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ''
    },

    link:{
        marginVertical:10,
        borderBottomWidth:1
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue'},

    img: {
        marginVertical: 20,
        width:100,
        height:100,
    },

    // card: {
    //     marginTop: 20,
    //     backgroundColor: 'grey',
    //     padding: 20,
    //     borderRadius: 10,
    //     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    // }
})