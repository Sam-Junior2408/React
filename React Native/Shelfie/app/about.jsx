import { StyleSheet, Text, View, Image  } from 'react-native'
import Logo from '../assets/images/monitor.png'
import {Link} from 'expo-router'
const About = () => {
  return (
    
    <View style= {styles.container}>
        <Text style={styles.title}>About Page</Text>
        <Link href="/" style={styles.link}>Back to Home</Link>
        <Link href="/contact" style={styles.link}>Contact Page</Link>

    </View> 

    
  )
}

export default About

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