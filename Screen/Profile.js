import React from "react";
import { StyleSheet, View, StatusBar, Image } from "react-native";
import { Icon } from "react-native-elements";
import EngText from "../CustomComponents/EngText";
import colors from "../Config/colors";

let data = [
  {
    title: "Notifications",
    iconType: "entypo",
    iconName: "bell",
    backgroundColor: colors.tomato,
    screenName: "Notifications",
  },
  {
    title: "My Promo Code",
    iconType: "feather",
    iconName: "percent",
    backgroundColor: "#FFA500",
    screenName: "PromoCode",
  },
  {
    title: "Settings",
    iconType: "ant-design",
    iconName: "setting",
    backgroundColor: "#2bc23a",
    screenName: "Settings",
  },
  {
    title: "Help Center",
    iconType: "entypo",
    iconName: "help-with-circle",
    backgroundColor: "#2bbdc2",
    screenName: "HelpCenter",
  },
  {
    title: "About Us",
    iconType: "entypo",
    iconName: "info-with-circle",
    backgroundColor: "#902cc9",
    screenName: "AboutUs",
  },
];

export default function Profile({ navigation }) {
  return (
    <>
      <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
      <View style={styles.user}>
        <View>
          <Image
            style={styles.img}
            source={{
              uri: "https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg",
            }}
            width={120}
            height={120}
            resizeMode="contain"
          />
        </View>
        <View>
          <View style={styles.nameView}>
            <EngText style={styles.name}>Cameron Cook</EngText>
            <Icon
              name="chevron-small-right"
              type="entypo"
              size={24}
              color={colors.tomato}
            />
          </View>
          <View style={styles.member}>
            <Icon
              name="crown"
              type="font-awesome-5"
              size={10}
              color={colors.white}
            />
            <EngText
              style={{
                color: colors.white,
                fontSize: 12,
                paddingHorizontal: 5,
              }}
            >
              VIP Member
            </EngText>
          </View>
        </View>
      </View>
      <View style={styles.options}>
        <View style={{ marginTop: 25, padding: 5 }}>
          {data.map((d, index) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 15,
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    backgroundColor: d.backgroundColor,
                    marginRight: 10,
                    borderRadius: 4,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 5,
                  }}
                >
                  <Icon
                    onPress={() => navigation.navigate(d.screenName)}
                    style={{
                      padding: 4,
                      borderRadius: 6,
                    }}
                    color={colors.white}
                    size={20}
                    name={d.iconName}
                    type={d.iconType}
                  />
                </View>
                <EngText>{d.title}</EngText>
              </View>
              <View>
                <Icon
                  name="chevron-small-right"
                  type="entypo"
                  size={24}
                  color={colors.lightBlack}
                />
              </View>
            </View>
          ))}
        </View>
        <View style={styles.version}>
          <EngText>Version 1.0.0</EngText>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  user: {
    flex: 0.8,
    width: "100%",
    // height: 200,
    backgroundColor: colors.background,
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 120,
    marginHorizontal: 15,
  },
  nameView: {
    flexDirection: "row",
    alignItems: "center",
    width: 150,
    justifyContent: "space-around",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 10,
  },
  member: {
    backgroundColor: colors.tomato,
    padding: 5,
    borderRadius: 5,
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    width: 100,
    height: 30,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  options: {
    flex: 2,
    backgroundColor: colors.white,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  version: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },
});
