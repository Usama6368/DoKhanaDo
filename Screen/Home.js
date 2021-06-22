import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable,
  Platform,
  ImageBackground
} from "react-native";
import { Icon } from "react-native-elements";
import colors from "../Config/colors";
import Carousel from "react-native-snap-carousel";
import Heading from "../CustomComponents/Heading";
import SubHeading from "../CustomComponents/SubHeading";
import EngText from "../CustomComponents/EngText";

function Home(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      icon_title: "Favourite",
      icon_name: "hearto",
      icon_type: "antdesign",
    },
    {
      icon_title: "Cheap",
      icon_name: "tago",
      icon_type: "antdesign",
    },
    {
      icon_title: "Trend",
      icon_name: "trending-up",
      icon_type: "feather",
    },
    {
      icon_title: "More",
      icon_name: "dropbox",
      icon_type: "antdesign",
    },
  ];
  const data1 = [
    {
      icon_title: "Home",
      icon_name: "home",
      icon_type: "antdesign",
    },
    {
      icon_title: "Cart",
      icon_name: "shoppingcart",
      icon_type: "antdesign",
    },
    {
      icon_title: "Search",
      icon_name: "search1",
      icon_type: "antdesign",
    },
    {
      icon_title: "Profile",
      icon_name: "user",
      icon_type: "antdesign",
    },
  ];

  const carouselItems = [
    {
      title: "Fruit salad mix",
      text: "Delics Fruit salad, Ngasem",
      price: "50",
      discount: "20%",
      left: "5",
      image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Fruktsallad_%28Fruit_salad%29.jpg/1200px-Fruktsallad_%28Fruit_salad%29.jpg'
    },
    {
      title: "Chinese Dish",
      text: "Rice with Curry",
      price: "100",
      discount: "20%",
      left: "2",
      image:'https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.jpg'
    },
    {
      title: "Fast Food",
      text: "Burger,Pizza",
      price: "250",
      discount: "20%",
      left: "1",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1emxpNB3wTBjNIMyd2j8yIu43_76-_DkAQ&usqp=CAU'
    },
    {
      title: "Desi Food",
      text: "Karahi,Salan",
      price: "200",
      discount: "10%",
      left: "3",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMsaeZgdlEjVOWIUjwKx7P3QVtH7VBHSaDlQ&usqp=CAU'
    },
  ];

  const _renderItem = ({ item, index }) => {
    return (
      <ImageBackground source={{uri:item.image}} style={styles.mainSliderBox}>
        <View style={{ alignItems: "flex-end", margin: 10 }}>
          <View
            style={{
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: colors.white,
              justifyContent: "center",
            }}
          >
            <Icon
              name="hearto"
              type="antdesign"
              color={colors.tomato}
              size={18}
              style={{ alignSelf: "center", elevation: 4 }}
            />
          </View>
        </View>
        <View style={styles.sliderBox}>
          <View style={styles.sliderDetailBox}>
            <EngText style={{ fontSize: 20 }}>{item.title}</EngText>
            <SubHeading>{item.text}</SubHeading>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <EngText>
                {item.price + "     "}
                <EngText
                  style={{
                    color: colors.black,
                    opacity: 0.8,
                    textDecorationLine: "line-through",
                    textDecorationColor: colors.lightBlack,
                  }}
                >
                  {item.discount}
                </EngText>
              </EngText>
              <EngText
                style={{
                  backgroundColor: colors.orange,
                  paddingHorizontal: 12,
                  paddingVertical: 4,
                  color: colors.white,
                }}
              >
                {item.left + " Left"}
              </EngText>
            </View>
          </View>
        </View>

        {/* <EngText style={{color:colors.white,textAlign:'center'}}>{item.title}</EngText> */}
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 40,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "75%",
              borderRadius: 60,
              backgroundColor: "#F7E7E5",
              paddingHorizontal: 4,
              borderColor: colors.black,
            }}
          >
            <TextInput
              placeholder="Search food you want to eat ?"
              placeholderTextColor={colors.lightBlack}
              style={{ padding: 15 }}
            />

            <Icon
              name="search"
              type="evilicon"
              color="#517fa4"
              size={30}
              //   style={{marginTop:10}}
            />
          </View>

          <View style={{ width: "25%", justifyContent: "center" }}>
            <View style={styles.bellContainer}>
              <Icon
                name="bell"
                type="material-community"
                color={colors.white}
                size={22}
              />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Heading>Hello Yahyaa</Heading>
          <SubHeading>What do you want to eat?</SubHeading>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 30,
          }}
        >
          {data.map((data, index) => (
            <Pressable onPress={() => console.log(data)} key={index}>
              <View style={styles.categoryBox}>
                <Icon
                  name={data.icon_name}
                  type={data.icon_type}
                  color={colors.tomato}
                  size={30}
                />
              </View>
              <EngText
                style={{
                  textAlign: "center",
                  color: colors.lightBlack,
                  marginTop: 6,
                  fontWeight: "400",
                }}
              >
                {data.icon_title}
              </EngText>
            </Pressable>
          ))}
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 8,
            marginVertical: 10,
          }}
        >
          <EngText style={{ fontWeight: "500", fontSize: 16 }}>
            {" "}
            Today's Promo
          </EngText>
          <EngText style={{ color: colors.tomato }}>See All</EngText>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Carousel
            layout={"default"}
            //   ref={ref => this.carousel = ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={_renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
      </ScrollView>
      <View
        style={{ justifyContent: "flex-end", backgroundColor: colors.white }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 8,
          }}
        >
          {data1.map((data, index) => (
            <Pressable onPress={() => console.log(data)} key={index}>
              <View style={Platform.OS == "ios" && styles.categoryBox1}>
                <Icon
                  name={data.icon_name}
                  type={data.icon_type}
                  color={colors.tomato}
                  size={30}
                />
              </View>
              <EngText
                style={{
                  textAlign: "center",
                  color: colors.lightBlack,
                  marginTop: 6,
                  fontWeight: "400",
                }}
              >
                {data.icon_title}
              </EngText>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 4,
    backgroundColor: colors.background,
  },
  mainSliderBox: {
    backgroundColor: colors.tomato,
  },
  sliderBox: {
    justifyContent: "flex-end",
    borderRadius: 5,
    height: 250,
    marginHorizontal: 1,
  },
  sliderDetailBox: {
    backgroundColor: colors.white,
    marginVertical: 20,
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 10,
    shadowColor: colors.white,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryBox: {
    height: 85,
    width: 85,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  categoryBox1: {
    // height:85,
    // width:85,
    // backgroundColor:colors.white,
    // justifyContent:'center',
    // alignItems:'center',
    // borderRadius:8,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 1,
  },
  bellContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.tomato,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 1,
  },
});
