import React, { useState } from "react";
import { View, StyleSheet, Text, ImageBackground, ScrollView } from "react-native";
import { Icon ,Avatar} from "react-native-elements";
import colors from "../Config/colors";
import EngText from "../CustomComponents/EngText";
import Heading from "../CustomComponents/Heading";
import SubHeading from "../CustomComponents/SubHeading";
function SpecificFoodDetail(props) {
    const [switchTab,setSwitchTab]=useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.backgroundView}>
        <ImageBackground
          style={{ height: "100%", width: "100%" }}
          source={require("../Assets/background.jpeg")}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 20,
                height: 30,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                name="chevron-back"
                type="ionicon"
                color={colors.tomato}
                size={18}
              />
            </View>
            <View
              style={{
                backgroundColor: colors.white,
                borderRadius: 20,
                height: 30,
                width: 30,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Icon
                name="hearto"
                type="antdesign"
                color={colors.tomato}
                size={18}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.foodHeading}>
<View style={styles.content}>


<Heading style={{fontSize:22,fontWeight:'600',marginTop:20}}>Delics Fruit Salad</Heading>
<SubHeading style={{marginTop:10}}>Fast Food</SubHeading>
<EngText style={{marginTop:10}}>Available at <EngText style={{opacity:0.4}}>6PM - 2PM</EngText></EngText>
<View style={{flexDirection:'row',marginTop:10}}>

              <Icon
                name="star"
                type="font-awesome"
                color={colors.orange}
                size={20}
                style={{marginHorizontal:1.5}}
            
              />
                <Icon
               name="star-o"
               type="font-awesome"
                color={colors.orange}
                size={20}
                style={{marginHorizontal:1.5}}
            
              />
              <Icon
               name="star-o"
               type="font-awesome"
                color={colors.orange}
                size={20}
                style={{marginHorizontal:1.5}}
            
              />
              <Icon
               name="star-o"
               type="font-awesome"
                color={colors.orange}
                size={20}
                style={{marginHorizontal:1.5}}
            
              />
               <Icon
               name="star-o"
               type="font-awesome"
                color={colors.orange}
                size={20}
                style={{marginHorizontal:1.5}}
            
              />
   
  
</View>
</View>
      </View>
      <View style={styles.foodDeatail}>

          <View style={{flexDirection:'row',paddingBottom:10}}>
              <View  style={{width:'33.33%'}}>

              <EngText onPress={()=>setSwitchTab(0)} style={{textAlign:'center',padding:10}}>
              Menu items
              </EngText>
              {
                  switchTab == 0 &&  <View style={{backgroundColor:colors.tomato,height:4,width:'60%',borderRadius:10,alignSelf:'center'}}/>
              }
            
              </View>
              <View   style={{width:'33.33%'}}>

<EngText onPress={()=>setSwitchTab(1)} style={{textAlign:'center',padding:10}}>

<EngText>Review</EngText>

</EngText>
{
                  switchTab == 1 &&  <View style={{backgroundColor:colors.tomato,height:4,width:'60%',borderRadius:10,alignSelf:'center'}}/>
              }
            
</View>
<View  style={{width:'33.33%'}}>

<EngText onPress={()=>setSwitchTab(2)}   style={{textAlign:'center',padding:10}}>
Info
</EngText>
{
                  switchTab == 2 &&  <View style={{backgroundColor:colors.tomato,height:4,width:'60%',borderRadius:10,alignSelf:'center'}}/>
              }
            
</View>

          </View>
          <ScrollView>
              {
                  switchTab == 0 ?
             
<View>
   
          {/* 1 */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingHorizontal: 16,
            }}
          >
            <View style={{ width: "30%", height: 100 }}>
              <View
                style={{
                  backgroundColor: colors.tomato,
                  height: 90,
                  padding: 10,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: colors.orange,
                  marginHorizontal: 10,
                  marginTop: -10,
                  borderRadius: 4,
                }}
              >
                <EngText style={{ textAlign: "center", color: colors.white }}>
                  5 left
                </EngText>
              </View>
            </View>
            <View style={{ width: "50%", paddingHorizontal: 10 }}>
              <EngText style={{ marginVertical: 5 }}> Fruit Salad Mix</EngText>

              <EngText style={{ marginVertical: 5 }}>
                {" " + 100 + "     "}
                <EngText
                  style={{
                    color: colors.black,
                    opacity: 0.8,
                    textDecorationLine: "line-through",
                    textDecorationColor: colors.lightBlack,
                  }}
                >
                  80
                </EngText>
              </EngText>
              <EngText style={{ marginVertical: 5 }}>
                {" "}
                <Icon
                  name="percent"
                  type="feather"
                  color={colors.orange}
                  size={18}
                  style={{ alignSelf: "center" }}
                />
                {"  "}Free Delivery
              </EngText>
            </View>
            <View style={{ width: "20%" }}>
              <Icon
                name="hearto"
                type="antdesign"
                color={colors.tomato}
                size={18}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Icon
                name="pencil"
                type="evilicon"
                color={colors.tomato}
                size={36}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.orange,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>-</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.black }}>1</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.tomato,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>+</EngText>
            </View>
          </View>

          {/* 2 */}


          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingHorizontal: 16,
            }}
          >
            <View style={{ width: "30%", height: 100 }}>
              <View
                style={{
                  backgroundColor: colors.tomato,
                  height: 90,
                  padding: 10,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: colors.orange,
                  marginHorizontal: 10,
                  marginTop: -10,
                  borderRadius: 4,
                }}
              >
                <EngText style={{ textAlign: "center", color: colors.white }}>
                  5 left
                </EngText>
              </View>
            </View>
            <View style={{ width: "50%", paddingHorizontal: 10 }}>
              <EngText style={{ marginVertical: 5 }}> Fruit Salad Mix</EngText>

              <EngText style={{ marginVertical: 5 }}>
                {" " + 100 + "     "}
                <EngText
                  style={{
                    color: colors.black,
                    opacity: 0.8,
                    textDecorationLine: "line-through",
                    textDecorationColor: colors.lightBlack,
                  }}
                >
                  80
                </EngText>
              </EngText>
              <EngText style={{ marginVertical: 5 }}>
                {" "}
                <Icon
                  name="percent"
                  type="feather"
                  color={colors.orange}
                  size={18}
                  style={{ alignSelf: "center" }}
                />
                {"  "}Free Delivery
              </EngText>
            </View>
            <View style={{ width: "20%" }}>
              <Icon
                name="hearto"
                type="antdesign"
                color={colors.tomato}
                size={18}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Icon
                name="pencil"
                type="evilicon"
                color={colors.tomato}
                size={36}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.orange,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>-</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.black }}>1</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.tomato,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>+</EngText>
            </View>
          </View>

          {/* 3 */}
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingHorizontal: 16,
            }}
          >
            <View style={{ width: "30%", height: 100 }}>
              <View
                style={{
                  backgroundColor: colors.tomato,
                  height: 90,
                  padding: 10,
                }}
              ></View>
              <View
                style={{
                  backgroundColor: colors.orange,
                  marginHorizontal: 10,
                  marginTop: -10,
                  borderRadius: 4,
                }}
              >
                <EngText style={{ textAlign: "center", color: colors.white }}>
                  5 left
                </EngText>
              </View>
            </View>
            <View style={{ width: "50%", paddingHorizontal: 10 }}>
              <EngText style={{ marginVertical: 5 }}> Fruit Salad Mix</EngText>

              <EngText style={{ marginVertical: 5 }}>
                {" " + 100 + "     "}
                <EngText
                  style={{
                    color: colors.black,
                    opacity: 0.8,
                    textDecorationLine: "line-through",
                    textDecorationColor: colors.lightBlack,
                  }}
                >
                  80
                </EngText>
              </EngText>
              <EngText style={{ marginVertical: 5 }}>
                {" "}
                <Icon
                  name="percent"
                  type="feather"
                  color={colors.orange}
                  size={18}
                  style={{ alignSelf: "center" }}
                />
                {"  "}Free Delivery
              </EngText>
            </View>
            <View style={{ width: "20%" }}>
              <Icon
                name="hearto"
                type="antdesign"
                color={colors.tomato}
                size={18}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginRight: 20,
            }}
          >
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <Icon
                name="pencil"
                type="evilicon"
                color={colors.tomato}
                size={36}
                style={{ alignSelf: "center", elevation: 4 }}
              />
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.orange,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>-</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.black }}>1</EngText>
            </View>
            <View
              style={{
                height: 30,
                width: 30,
                backgroundColor: colors.tomato,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EngText style={{ color: colors.white }}>+</EngText>
            </View>
          </View>
          </View>
          :
          switchTab == 1 ?
          <View>
       {/* 1 */}
          <View style={{flexDirection:'row',marginVertical:4,
         backgroundColor:colors.white,
marginHorizontal:8,
        padding:10,
         shadowColor: "#000",
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.4,
     shadowRadius: 2,
     elevation: 1
     }}>
             <View style={{width:'20%',alignItems:'center'}}>
             <Avatar
  rounded
  source={{
    uri:
      'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  }}
/>

</View>
<View style={{width:'90%'}}>
    <View>

<EngText>Muhammad Zayn</EngText>
<View style={{flexDirection:'row',marginVertical:4}}>

<Icon
                name="star"
                type="evilicon"
                color={colors.orange}
                size={18}
            
              />
                 <Icon
                name="star"
                type="evilicon"
                color={colors.orange}
                size={18}
            
              />
               <Icon
                name="star"
                type="evilicon"
                color={colors.orange}
                size={18}
            
              />
               <Icon
                name="star"
                type="evilicon"
                color={colors.orange}
                size={18}
            
              />
               <Icon
                name="star"
                type="evilicon"
                color={colors.orange}
                size={18}
            
              />
</View>
<EngText>
Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisi dignissim.
</EngText>
    </View>
              

</View>
          </View>

        {/* //   2 */}

        <View style={{flexDirection:'row',marginVertical:4,
      

        backgroundColor:colors.white,
        marginHorizontal:8,
        padding:10,
         shadowColor: "#000",
     shadowOffset: { width: 0, height: 1 },
     shadowOpacity: 0.4,
     shadowRadius: 2,
     elevation: 1
    }}>
        <View style={{width:'20%',alignItems:'center'}}>
        <Avatar
rounded
source={{
uri:
 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
}}
/>

</View>
<View style={{width:'90%'}}>
<View>

<EngText>Muhammad Zayn</EngText>
<View style={{flexDirection:'row',marginVertical:4}}>

<Icon
           name="star"
           type="evilicon"
           color={colors.orange}
           size={18}
       
         />
            <Icon
           name="star"
           type="evilicon"
           color={colors.orange}
           size={18}
       
         />
          <Icon
           name="star"
           type="evilicon"
           color={colors.orange}
           size={18}
       
         />
          <Icon
           name="star"
           type="evilicon"
           color={colors.orange}
           size={18}
       
         />
          <Icon
           name="star"
           type="evilicon"
           color={colors.orange}
           size={18}
       
         />
</View>
<EngText>
Lorem ipsum dolor sit amet consectetur, adipiscing elit facilisi dignissim.
</EngText>
</View>
         

</View>
     </View>
     </View>
          :
          <View>
          <SubHeading style={{textAlign:'center',color:colors.black,fontWeight:'600'}}>Ingredient's</SubHeading>
      </View>
           }
          </ScrollView>
      </View>
    </View>
  );
}

export default SpecificFoodDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundView: {
    flex: 2.5,
  },
  foodHeading: {
    flex: 1.5,
    

    

  },
  content:{
    alignSelf:'center',
    alignItems:'center',
   
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 2,
    backgroundColor:colors.white,
   width:'92%',
   height:'100%',
   
    marginTop:-63,
    borderRadius:10
  },
  foodDeatail: {
    flex: 3,
   marginTop:-40,
    backgroundColor:colors.white
  },
  reviewView:{
    flexDirection:'row',
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 2,

  }
});
