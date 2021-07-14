import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Card } from "react-native-elements";
import colors from "../Config/colors";
import EngText from "../CustomComponents/EngText";

export default function NotificationsDetail() {
  return (
    <>
      <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
      <Card>
        <Card.Title>
          <EngText style={styles.title}>Notifications Title</EngText>
        </Card.Title>
        <Card.Divider />
        <EngText style={styles.detail}>
          A notification is simply information that is sent to a human agent
          when a step in the process executes. Notifications manifest themselves
          as alerts in a user's inbox or as emails. The details that are
          displayed to the user in the alert or email are specified as part of
          the notification metadata. .
        </EngText>
        <View style={styles.footer}>
          <EngText>status</EngText>
          <EngText>date</EngText>
        </View>
      </Card>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 12,
    color: colors.tomato,
  },
  detail: {
    fontSize: 14,
    textAlign: "justify",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
