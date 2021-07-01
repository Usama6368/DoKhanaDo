import React from "react";
import { Icon } from "react-native-elements";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import EngText from "../CustomComponents/EngText";
import Heading from "../CustomComponents/Heading";
import SubHeading from "../CustomComponents/SubHeading";
import colors from "../Config/colors";

function ProfileDetail() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, marginBottom: -60 }}>
        <View
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
            activeOpacity={0.9}
            style={{
              marginLeft: 95,
              marginTop: -35,
            }}
          >
            <View
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
                color={colors.orange}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 20,
          }}
        >
          <View style={styles.statusItemView}>
            <Heading
              style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}
            >
              2
            </Heading>
            <EngText style={{ color: colors.white }}>Pending</EngText>
          </View>
          <View style={styles.statusItemView}>
            <Heading
              style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}
            >
              2
            </Heading>
            <EngText style={{ color: colors.white }}>Completed</EngText>
          </View>
          <View style={styles.statusItemView}>
            <Heading
              style={{ color: colors.white, fontSize: 18, fontWeight: "600" }}
            >
              4
            </Heading>
            <EngText style={{ color: colors.white }}>Total</EngText>
          </View>
        </View>
      </View>
      <View style={styles.container3}>
        <SubHeading
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Profile Detail
        </SubHeading>
        <View
          style={{
            borderWidth: 1.4,
            width: "30%",
            alignSelf: "center",
            borderRadius: 10,
            borderColor: colors.orange,
            marginTop: 4,
          }}
        />
        <View style={{ marginTop: 30, paddingHorizontal: 20 }}>
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
        </View>
      </View>
    </View>
  );
}

export default ProfileDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container1: {
    flex: 1,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
  container2: {
    flex: 3,
    marginVertical: 20,
    backgroundColor: colors.orange,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  container3: {
    flex: 5,
    marginTop: -70,
    backgroundColor: colors.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  statusItemView: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: colors.lightBlack,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 4,
    marginTop: 40,
  },
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
    textAlign: "right",
    color: colors.black,
    fontWeight: "600",
  },
  img: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 1,
    borderColor: colors.orange,
  },
});
