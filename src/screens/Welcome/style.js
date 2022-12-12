import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/color';

//Constants

const styles = StyleSheet.create({
    viewContainer:{
        flex:1 , 
        backgroundColor : COLORS.PRIMARY.MAIN,
        alignItems:"center",
       padding:"15%"
    },
    logoView:{
        width:80,
        height:80,
        borderRadius:80/2,
        marginBottom:10
    },logoStyle:{
        width:70,
        height:70, 
    },
    welcomeText:{
        fontSize:30,
        color:COLORS.WHITE[100],
        fontWeight:"300"
    },
    unlockView:{
     width:"100%",
     alignItems:"center",
     marginTop:"10%"

    },
    unlocktext:{
        textAlign:"center",
        fontSize:17,
        color:COLORS.WHITE[200],
        fontWeight:"300"
    },
    bottomView:{
        position:"absolute",
        bottom:"12%",
        width:"100%",
        alignItems:"flex-start"
    },
    selecttext:{
        textAlign:"center",
        fontSize:17,
        color:COLORS.WHITE[200],
        fontWeight:"900"
    },
    buttonView:{
        backgroundColor:COLORS.WHITE[100],
        borderRadius:25,
        flexDirection:"row",
        marginTop:"10%",
    },
    buttontextview:{
        width:"70%",
        marginLeft:15,
        
    },
    buttontext:{
        fontSize:16,
        color:COLORS.PRIMARY.MAIN,
        fontWeight:"800"
    },
 
});
export default styles;
