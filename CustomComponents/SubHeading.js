import React from 'react';
import { Text } from 'react-native';
import colors from '../Config/colors';


function SubHeading({children,style,onPress}) {
    return (
       <Text style={[{fontFamily:'Poppins',color:colors.lightBlack},style]} onPress={onPress}>{children}</Text>
    );
}

export default SubHeading;