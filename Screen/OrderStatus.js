import React, { useState } from "react";
import { Icon, Avatar, Tooltip } from "react-native-elements";
import { View, StyleSheet, ScrollView } from "react-native";
import SubHeading from "../CustomComponents/SubHeading";
import EngText from "../CustomComponents/EngText";
import Heading from "../CustomComponents/Heading";
import colors from "../Config/colors";

function OrderStatus(props) {
  const [switchTab, setSwitchTab] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="chevron-back"
          type="ionicon"
          color={colors.tomato}
          size={30}
        />
        <Heading style={styles.headerText}>Order Status</Heading>
        <View />
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1.5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Avatar
          rounded
          size="medium"
          source={{
            uri: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          }}
        />
        <Heading
          style={{ color: colors.black, fontSize: 20, fontWeight: "600" }}
        >
          {"   "}Muhammad Usama{"\n"}
          <SubHeading style={{ fontSize: 15, fontWeight: "500" }}>
            {"    "}Silver
          </SubHeading>
        </Heading>
      </View>

      <View style={styles.container2}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 8,
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
        <View style={{ flexDirection: "row", padding: 10 }}>
          <View style={{ width: "50%" }}>
            <EngText
              onPress={() => setSwitchTab(0)}
              style={{ textAlign: "center", padding: 10 }}
            >
              Pending
            </EngText>
            {switchTab == 0 && (
              <View
                style={{
                  backgroundColor: colors.tomato,
                  height: 4,
                  width: "60%",
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              />
            )}
          </View>
          <View style={{ width: "50%" }}>
            <EngText
              onPress={() => setSwitchTab(1)}
              style={{ textAlign: "center", padding: 10 }}
            >
              <EngText>Completed</EngText>
            </EngText>
            {switchTab == 1 && (
              <View
                style={{
                  backgroundColor: colors.green,
                  height: 4,
                  width: "60%",
                  borderRadius: 10,
                  alignSelf: "center",
                }}
              />
            )}
          </View>
        </View>
        <ScrollView>
          {switchTab == 0 ? (
            <View>
              {/* //   1 */}
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 4,

                  backgroundColor: colors.white,
                  justifyContent: "space-between",
                  marginHorizontal: 8,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.4,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.black,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EngText style={{ color: colors.white, fontWeight: "bold" }}>
                    1
                  </EngText>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <EngText style={{ fontWeight: "500" }}>16 Jun 2021</EngText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <EngText style={{ color: colors.black }}>
                    Status:{"  "}
                  </EngText>
                  <Tooltip
                    containerStyle={{ backgroundColor: colors.orange }}
                    popover={
                      <EngText style={{ color: colors.white }}>
                        In Progress
                      </EngText>
                    }
                  >
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: colors.orange,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: colors.orange,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    />
                  </Tooltip>
                </View>
              </View>

              {/* // 2 */}

              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 4,

                  backgroundColor: colors.white,
                  justifyContent: "space-between",
                  marginHorizontal: 8,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.4,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.black,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EngText style={{ color: colors.white, fontWeight: "bold" }}>
                    2
                  </EngText>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <EngText style={{ fontWeight: "500" }}>16 Jun 2021</EngText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <EngText style={{ color: colors.black }}>
                    Status:{"  "}
                  </EngText>
                  <Tooltip
                    containerStyle={{ backgroundColor: colors.tomato }}
                    popover={
                      <EngText style={{ color: colors.white }}>
                        Accepted
                      </EngText>
                    }
                  >
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: colors.tomato,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: colors.tomato,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    />
                  </Tooltip>
                </View>
              </View>
            </View>
          ) : (
            <View>
              {/* //   1 */}
              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 4,

                  backgroundColor: colors.white,
                  justifyContent: "space-between",
                  marginHorizontal: 8,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.4,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.black,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EngText style={{ color: colors.white, fontWeight: "bold" }}>
                    1
                  </EngText>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <EngText style={{ fontWeight: "500" }}>16 Jun 2021</EngText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <EngText style={{ color: colors.black }}>
                    Status:{"  "}
                  </EngText>
                  <Tooltip
                    containerStyle={{ backgroundColor: colors.green }}
                    popover={
                      <EngText style={{ color: colors.white }}>
                        Delivered
                      </EngText>
                    }
                  >
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: colors.green,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: colors.green,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    />
                  </Tooltip>
                </View>
              </View>

              {/* // 2 */}

              <View
                style={{
                  flexDirection: "row",
                  marginVertical: 4,

                  backgroundColor: colors.white,
                  justifyContent: "space-between",
                  marginHorizontal: 8,
                  padding: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.4,
                  shadowRadius: 2,
                  elevation: 1,
                }}
              >
                <View
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 10,
                    backgroundColor: colors.black,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <EngText style={{ color: colors.white, fontWeight: "bold" }}>
                    2
                  </EngText>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <EngText style={{ fontWeight: "500" }}>16 Jun 2021</EngText>
                </View>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <EngText style={{ color: colors.black }}>
                    Status:{"  "}
                  </EngText>
                  <Tooltip
                    containerStyle={{ backgroundColor: colors.tomato }}
                    popover={
                      <EngText style={{ color: colors.white }}>
                        Cancelled
                      </EngText>
                    }
                  >
                    <View
                      style={{
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                        backgroundColor: colors.tomato,
                        justifyContent: "center",
                        alignItems: "center",
                        shadowColor: colors.tomato,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.5,
                        shadowRadius: 2,
                        elevation: 2,
                      }}
                    />
                  </Tooltip>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

export default OrderStatus;
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
    flex: 8,

    marginTop: -70,
    backgroundColor: colors.white,
    borderRadius: 40,
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
  },
});
