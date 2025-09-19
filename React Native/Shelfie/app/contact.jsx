import { StyleSheet, Text, View, Image  } from 'react-native'
import Logo from '../assets/images/monitor.png'
import {Link} from 'expo-router'
const Contact = () => {
  return (
    
    <View style= {styles.container}>
        <Text style={styles.title}>Contact Page</Text>
        <Link href="/" style={styles.link}>Back to Home</Link>
        <Link href="/about" style={styles.link}>Back to About</Link>

    </View> 

    
  )
}

export default Contact

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ''
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue'},

    link:{
        marginVertical:10,
        borderBottomWidth:1
    }
})