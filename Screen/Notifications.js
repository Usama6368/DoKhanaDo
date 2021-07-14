import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import EngText from "../CustomComponents/EngText";
import colors from "../Config/colors";

export default function Notifications() {
  return (
    <>
      <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => Alert.alert("pressed")}
      >
        <Card containerStyle={styles.card}>
          <View style={styles.cardMainView}>
            <View style={styles.infoIcon}>
              <Icon
                type="entypo"
                name="info-with-circle"
                size={20}
                color={colors.tomato}
              />
            </View>
            <View style={styles.notificationArea}>
              <EngText>Notification</EngText>
              <EngText style={styles.notificationDetail}>
                Notification Detail Notification Detail Notification Detail
              </EngText>
            </View>
            <View style={styles.nextIcon}>
              <Icon
                type="ant-design"
                name="right"
                size={16}
                color={colors.tomato}
              />
            </View>
          </View>
        </Card>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 0,
    elevation: 4,
  },
  cardMainView: {
    flexDirection: "row",
    alignItems: "center",
    borderLeftWidth: 3,
    borderLeftColor: colors.tomato,
  },
  infoIcon: {
    width: "15%",
  },
  notificationArea: {
    width: "80%",
    paddingHorizontal: 5,
  },
  notificationDetail: {
    color: colors.grey,
    fontSize: 11,
  },
  nextIcon: {
    width: "5%",
  },
});
