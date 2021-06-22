import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../Config/colors";
import Heading from "../CustomComponents/Heading";
import EngText from "../CustomComponents/EngText";
import SubHeading from "../CustomComponents/SubHeading";
import { Switch, Input } from "react-native-elements";
function Checkouts(props) {
  const [switchButton, setSwitchButton] = useState(false);
  const [current, setCurrent] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <View style={styles.header}>
          <Icon
            name="chevron-back"
            type="ionicon"
            color={colors.tomato}
            size={30}
            />
          <Heading style={styles.headerText}>Check Outs</Heading>
          <View />
        </View>
            <ScrollView>
        <View
          style={{
            height: "15%",
            width: "90%",
            alignSelf: "center",
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <View style={{ width: "80%", padding: 10, marginVertical: 10 }}>
            <EngText style={{ fontWeight: "500" }}>
              Keep Social Distancing
            </EngText>
            <SubHeading style={{ marginVertical: 10 }}>
              Leave your order on the doorstep
            </SubHeading>
          </View>
          <View style={{ width: "20%" }}>
            <Switch
              onChange={() => setSwitchButton(!switchButton)}
              value={switchButton}
              color={colors.orange}
            />
          </View>
        </View>

        <View
          style={{
            height: "15%",
            width: "90%",
            alignSelf: "center",
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <View style={{ width: "80%", padding: 10, marginVertical: 10 }}>
            <EngText style={{ fontWeight: "500" }}>Deliver to</EngText>
              {
                  current ?
            <SubHeading style={{ marginVertical: 10 }}>
              House 4,Block 3 ,Johar Town Lahore
            </SubHeading>
            :
            <Input
              inputContainerStyle={{ height: 40,marginTop:20 }}
              style={{ fontSize: 13, marginLeft: 4 }}
              placeholder="Add a note of delivery address"
              leftIcon={{
                type: "entypo",
                name: "address",
                size: 14,
                color: colors.lightBlack,
              }}
            />
              }
          </View>
          <View
            style={{
              width: "20%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setCurrent(!current);
              }}
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderColor: current ? colors.orange : colors.lightBlack,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
              }}
            >
              {current && (
                <View
                  style={{
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    backgroundColor: colors.orange,
                  }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: colors.white,
            padding: 10,
            width: "90%",
            alignSelf: "center",
            borderRadius: 10,
            marginVertical: 10,
          }}
        >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Heading style={[styles.headerText, { fontSize: 16 }]}>
                My Bucket <EngText style={{color:colors.tomato,fontSize:14}}> ( 2 )</EngText>
              </Heading>
              <EngText style={{ color: colors.tomato }}>+ Add Item</EngText>
            </View>
          <ScrollView showsVerticalScrollIndicator={false}  >

            <View
              style={{
                flexDirection: "row",
                paddingTop: 20,
                paddingHorizontal: 16,
              }}
            >
              <View style={{ width: "30%", height: 100 }}>
               
                    <Image style={{height:90,width:'100%'}} source={{uri:'https://www.seriouseats.com/thmb/KXvug5Cahjo8uY_grTZJgEv4HJ0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg'}}/>
              
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
                <EngText style={{ marginVertical: 5 }}>
                  {" "}
                  Fruit Salad Mix
                </EngText>

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
              <View
                style={
                    styles.deleteView
                 
                }
              >
               <View style={styles.deleteItemView}>

<Icon
  name="delete-outline"
  type="materialicon"
  color={colors.tomato}
  size={20}
  style={{ alignSelf: "center", elevation: 4 }}
/>
  </View>
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
              <Image style={{height:90,width:'100%'}} source={{uri:'https://littlefaifo.com/wp-content/uploads/2021/03/ourstory_012-6.jpg'}}/>
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
                <EngText style={{ marginVertical: 5 }}>
                  {" "}
                  Fruit Salad Mix
                </EngText>

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
              <View
                style={styles.deleteView}
              >
                 <View style={styles.deleteItemView}>

<Icon
  name="delete-outline"
  type="materialicon"
  color={colors.tomato}
  size={20}
  style={{ alignSelf: "center", elevation: 4 }}
/>
  </View>
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
              <Image style={{height:90,width:'100%'}} source={{uri:'https://fryingpanadventures.com/wp-content/uploads/2020/10/image-132.jpeg'}}/>
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
                <EngText style={{ marginVertical: 5 }}>
                  {" "}
                  Fruit Salad Mix
                </EngText>

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
              <View style={styles.deleteView}>
                  <View style={styles.deleteItemView}>

                <Icon
                  name="delete-outline"
                  type="materialicon"
                  color={colors.tomato}
                  size={20}
                  style={{ alignSelf: "center", elevation: 4 }}
                />
                  </View>
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
          </ScrollView>
        </View>
          <View
          style={{
            height: "15%",
            width: "90%",
            alignSelf: "center",
            backgroundColor: colors.white,
            marginTop: 10,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 6,
          }}
        >
          <View style={{ width: "100%", padding: 10, marginBottom: 20 }}>
            <EngText style={{ fontWeight: "700" }}>
             Payment
            </EngText>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

            <EngText style={{ marginVertical: 10 }}>
             Total
            </EngText>
            <SubHeading style={{ marginVertical: 10 }}>
           RS:1500
            </SubHeading>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>

<EngText style={{ marginVertical: 10 }}>
Deliver Fee
</EngText>
<SubHeading style={{ marginVertical: 10 }}>
RS:200
</SubHeading>
</View>
            
          </View>
         
          
        </View>
        </ScrollView>
      </View>

      <View style={styles.addToCartView}>
        <View style={styles.addToCartItemView}>
          <EngText style={{ color: colors.white }}>3 Item</EngText>
          <EngText style={{ color: colors.white, fontWeight: "600" }}>
            Chectout
          </EngText>
          <EngText style={{ color: colors.white }}>RS:1700</EngText>
        </View>
      </View>
    </View>
  );
}

export default Checkouts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingVertical: 20,

  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },

  addToCartView: {
    backgroundColor: colors.white,
    flex: 1,
   
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  addToCartItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.tomato,
    width: "80%",
    height: "60%",
    padding: 10,
  },
  tabView: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  deleteView: {
    
    width: "20%",
    alignItems:'flex-end'
  
    
    
  },
  deleteItemView:{
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  }
});
