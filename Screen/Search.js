import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";
import colors from "../Config/colors";
import Heading from "../CustomComponents/Heading";
import Carousel from "react-native-snap-carousel";
import EngText from "../CustomComponents/EngText";
import SubHeading from "../CustomComponents/SubHeading";

function Search(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      title: "Filter",
      icon_name: "sliders",
      type: "font-awesome",
      size: 25,
    },
    {
      title: "Above 4.5",
      icon_name: "star-o",
      type: "font-awesome",
      size: 20,
    },
    {
      title: "Cheap",
      icon_name: "tago",
      type: "antdesign",
      size: 20,
    },
    {
      title: "Nearby",
      icon_name: "near-me",
      type: "material",
      size: 20,
    },
  ];

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
          <Heading style={styles.headerText}>Today's Promo</Heading>
          <View />
        </View>

        <View style={styles.carouselView}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {carouselItems.map((data, index) => (
              <View key={index} style={styles.carouselItemView}>
                <Icon
                  name={data.icon_name}
                  type={data.type}
                  color={colors.tomato}
                  size={data.size}
                />
                <EngText>{"   " + data.title}</EngText>
              </View>
            ))}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.tabView}>
          <View style={{ marginHorizontal: 6 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 20,
                paddingHorizontal: 16,
              }}
            >
              <View>
                <Heading style={{ fontWeight: "600", fontSize: 18 }}>
                  Delics Fruit Salad
                </Heading>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "flex-end" }}
              >
                <Icon
                  name="star-o"
                  type="font-awesome"
                  color={colors.orange}
                  size={18}
                />
                <EngText> 5.0</EngText>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <SubHeading>Jaya katwang no 4, Ngasem</SubHeading>
              <EngText>1kM </EngText>
            </View>
          </View>
          <View
            style={{
              alignSelf: "center",
              width: "80%",
              height: 3.5,
              width: "80%",
              backgroundColor: colors.lightBlack,
              opacity: 0.3,
              borderRadius: 30,
              marginVertical: 14,
            }}
          />
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

          {/* 4 */}
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
        </ScrollView>
      </View>
      <View style={styles.addToCartView}>
        <View style={styles.addToCartItemView}>
          <EngText style={{ color: colors.white }}>1 Item</EngText>
          <EngText style={{ color: colors.white, fontWeight: "600" }}>
            Chectout
          </EngText>
          <EngText style={{ color: colors.white }}>RS:100</EngText>
        </View>
      </View>
    </View>
  );
}

export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
  carouselView: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingVertical: 20,
    alignItems: "center",
  },
  carouselItemView: {
    flexDirection: "row",
    backgroundColor: colors.white,
    height: 50,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 6,
    marginHorizontal: 8,
    marginBottom: 6,
    marginTop: 10,
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
});
