import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import EngText from "../CustomComponents/EngText";
import colors from "../Config/colors";
import SubHeading from "../CustomComponents/SubHeading";
import Heading from "../CustomComponents/Heading";

export default function ProfileDetail() {
  return (
    <>
      <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
      <View style={{ flex: 1, marginTop: 30 }}>
        <View
          onPress={() => console.log("hjajhjh")}
          style={{
            alignSelf: "center",
            marginTop: 30,
            backgroundColor: colors.white,
            shadowColor: "#000000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 1,
            shadowRadius: 10,
            elevation: 10,
            borderRadius: 70,
            height: 140,
            width: 140,
            zIndex: 9999,
          }}
        >
          <Image
            style={styles.img}
            source={{
              uri: "https://www.niemanlab.org/images/Greg-Emerson-edit-2.jpg",
            }}
          />

          <TouchableOpacity
            style={{
              marginLeft: 95,
              marginTop: -35,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: colors.tomato,
                width: 40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
              onPress={() => console.log("han jee")}
            >
              <Icon
                name="camera"
                type="ant-design"
                size={24}
                raised={true}
                color={colors.tomato}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <Card containerStyle={{ borderRadius: 10, marginTop: -80 }}>
          <View style={{ marginTop: 80 }}></View>
          <View style={styles.input}>
            <EngText style={styles.title}>Username</EngText>
            <Heading style={styles.description}>Cameron Cook</Heading>
          </View>

          <View style={styles.input}>
            <EngText style={styles.title}>Email</EngText>
            <Heading style={styles.description}>
              darrell_bailey@gmail.com
            </Heading>
          </View>
          <View style={styles.input}>
            <EngText style={styles.title}>Address</EngText>
            <Heading style={styles.description}>
              H-3 Block, Johar Town, Lahore #54000, H-3 Block, Johar Town,
              Lahore #54000
            </Heading>
          </View>
        </Card>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  title: {
    color: colors.grey,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    width: "70%",
    textAlign: "center",
    color: colors.black,
    fontWeight: "600",
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: colors.tomato,
  },
});
