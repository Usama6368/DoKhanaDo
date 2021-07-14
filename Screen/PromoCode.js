import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import EngText from "../CustomComponents/EngText";
import colors from "../Config/colors";

let data = [
  {
    discount: 10,
    code: "SMGH10",
    detail: " You will get 10% discount on your entire order",
    minorder: "Min Order Required Rs. 300",
    date: "28/7/2021",
  },
  {
    discount: 20,
    code: "SMGH20",
    detail: " You will get 20% discount on your entire order",
    minorder: "Min Order Required Rs. 500",
    date: "18/8/2021",
  },
  {
    discount: 40,
    code: "SMGH40",
    detail: " You will get 40% discount on your entire order",
    minorder: "Min Order Required Rs. 800",
    date: "04/9/2021",
  },
  {
    discount: 5,
    code: "SMGH05",
    detail: " You will get 05% discount on your entire order",
    minorder: "Min Order Required Rs. 1000",
    date: "14/7/2021",
  },
  {
    discount: 15,
    code: "SMGH10",
    detail: " You will get 15% discount on your entire order",
    minorder: "Min Order Required Rs. 400",
    date: "28/7/2021",
  },
];

export default function PromoCode() {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
        {data.map((d, index) => (
          <View key={index} style={styles.mainView}>
            <View
              style={[
                styles.leftView,
                {
                  backgroundColor:
                    d.discount <= 10
                      ? colors.lightBlue
                      : d.discount <= 20 && d.discount > 10
                      ? colors.orange
                      : colors.tomato,
                },
              ]}
            >
              <EngText style={styles.leftVewText}>
                Discount{`\n`}
                {d.discount} %
              </EngText>
            </View>
            <View
              style={[
                styles.rightView,
                {
                  borderColor:
                    d.discount <= 10
                      ? colors.lightBlue
                      : d.discount <= 20 && d.discount > 10
                      ? colors.orange
                      : colors.tomato,
                },
              ]}
            >
              <EngText
                style={[
                  styles.promo,
                  {
                    color:
                      d.discount <= 10
                        ? colors.lightBlue
                        : d.discount <= 20 && d.discount > 10
                        ? colors.orange
                        : colors.tomato,
                  },
                ]}
              >
                {d.code}
              </EngText>
              <EngText style={styles.detail}>{d.detail}</EngText>
              <EngText style={styles.minorder}>{d.minorder}</EngText>
              <View style={styles.valid}>
                <View>
                  <EngText style={{ fontSize: 12 }}>Valid Till</EngText>
                  <EngText style={{ color: colors.grey, fontSize: 12 }}>
                    {d.date}
                  </EngText>
                </View>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      backgroundColor:
                        d.discount <= 10
                          ? colors.lightBlue
                          : d.discount <= 20 && d.discount > 10
                          ? colors.orange
                          : colors.tomato,
                    },
                  ]}
                  activeOpacity={0.8}
                >
                  <EngText style={styles.btnText}>Apply</EngText>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flexDirection: "row",
    height: "auto",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  leftView: {
    width: "15%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  leftVewText: {
    transform: [{ rotate: "270deg" }],
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
    fontSize: 13,
    fontWeight: "bold",
  },
  rightView: {
    width: "80%",
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    flex: 1,
    justifyContent: "center",
  },
  promo: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.tomato,
  },
  detail: {
    paddingHorizontal: 10,
    fontSize: 12,
    color: colors.black,
    maxWidth: "90%",
  },
  minorder: {
    fontSize: 10,
    padding: 10,
    color: colors.grey,
    alignSelf: "flex-end",
  },
  valid: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  button: {
    height: 30,
    width: 80,
    borderRadius: 4,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
    textAlignVertical: "center",
    flex: 1,
  },
});
