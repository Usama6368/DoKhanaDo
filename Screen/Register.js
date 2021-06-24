import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { Icon, SocialIcon } from "react-native-elements";
import { Formik } from "formik";
import EngText from "../CustomComponents/EngText";
import colors from "../Config/colors";
import * as yup from "yup";

export default function Register() {
  const [hidePass, setHidePass] = useState(true);
  const [hideConfirmPass, setHideConfirmPass] = useState(true);

  const showPassword = () => {
    setHidePass(!hidePass);
  };
  const showConfirmPassword = () => {
    setHideConfirmPass(!hideConfirmPass);
  };

  return (
    <>
      <StatusBar backgroundColor={colors.tomato} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../Assets/logo1.png")}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.form}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmpassword: "",
                address: "",
              }}
              onSubmit={(values)=>{
                console.log(values)
              }}
              validationSchema={yup.object().shape({
                username: yup
                  .string()
                  .min(6)
                  .max(10)
                  .required()
                  .label("Username"),
                email: yup.string().email().required().label("Email"),
                password: yup
                  .string()
                  .min(6)
                  .max(10)
                  .required()
                  .label('Password'),
                confirmpassword: yup
                  .string()
                  .required()
                  .oneOf([yup.ref("password")], "Password is not match")
                  .label('Confirm Password'),
              })}
            >
              {({
                values,
                handleChange,
                errors,
                setFieldTouched,
                touched,
                isValid,
                handleSubmit,
              }) => (
                <>
                  <View
                    style={[
                      styles.fields,
                      {
                        borderColor:
                          touched.username && errors.username
                            ? colors.tomato
                            : colors.lightBlack,
                      },
                    ]}
                  >
                    <Icon
                      name="user"
                      type="ant-design"
                      size={18}
                      style={styles.icon}
                      color={colors.tomato}
                    />
                    <TextInput
                      placeholder="User Name"
                      placeholderTextColor={colors.grey}
                      value={values.username}
                      onChangeText={handleChange("username")}
                      autoCapitalize="none"
                      onBlur={() => setFieldTouched("username")}
                      style={styles.textInput}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <EngText style={styles.error}>{errors.username}</EngText>
                  )}

                  <View
                    style={[
                      styles.fields,
                      {
                        borderColor:
                          touched.email && errors.email
                            ? colors.tomato
                            : colors.lightBlack,
                      },
                    ]}
                  >
                    <Icon
                      name="mail"
                      type="ant-design"
                      size={18}
                      style={styles.icon}
                      color={colors.tomato}
                    />
                    <TextInput
                      placeholder="Email"
                      placeholderTextColor={colors.grey}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      onBlur={() => setFieldTouched("email")}
                      style={styles.textInput}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <EngText style={styles.error}>{errors.email}</EngText>
                  )}

                  <View
                    style={[
                      styles.fields,
                      {
                        borderColor:
                          touched.password && errors.password
                            ? colors.tomato
                            : colors.lightBlack,
                      },
                    ]}
                  >
                    <Icon
                      name="lock"
                      type="ant-design"
                      size={20}
                      style={styles.icon}
                      color={colors.tomato}
                    />
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor={colors.grey}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      secureTextEntry={hidePass}
                      onBlur={() => setFieldTouched("password")}
                      style={styles.textInput}
                    />

                    <Icon
                      name={hidePass ? "eye" : "eye-off"}
                      type="feather"
                      size={18}
                      color={colors.tomato}
                      onPress={() => showPassword()}
                    />
                  </View>
                  {touched.password && errors.password && (
                    <EngText style={styles.error}>{errors.password}</EngText>
                  )}

                  <View
                    style={[
                      styles.fields,
                      {
                        borderColor:
                          touched.confirmpassword && errors.confirmpassword
                            ? colors.tomato
                            : colors.lightBlack,
                      },
                    ]}
                  >
                    <Icon
                      name="lock"
                      type="ant-design"
                      size={20}
                      style={styles.icon}
                      color={colors.tomato}
                    />
                    <TextInput
                      placeholder="Confirm Password"
                      placeholderTextColor={colors.grey}
                      value={values.confirmpassword}
                      onChangeText={handleChange("confirmpassword")}
                      autoCapitalize="none"
                      secureTextEntry={hideConfirmPass}
                      onBlur={() => setFieldTouched("confirmpassword")}
                      style={styles.textInput}
                    />

                    <Icon
                      name={hideConfirmPass ? "eye" : "eye-off"}
                      type="feather"
                      size={18}
                      color={colors.tomato}
                      onPress={() => showConfirmPassword()}
                    />
                  </View>
                  {touched.confirmpassword && errors.confirmpassword && (
                    <EngText style={styles.error}>
                      {errors.confirmpassword}
                    </EngText>
                  )}

                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={handleSubmit}
                    activeOpacity={0.5}
                    style={[
                      styles.button,
                      {
                        backgroundColor: !isValid ? colors.grey : colors.tomato,
                        borderColor: !isValid ? colors.grey : colors.tomato,
                      },
                    ]}
                  >
                    <EngText style={styles.btnText}>Register</EngText>
                  </TouchableOpacity>
                  <View style={styles.registered}>
                    <EngText style={{ color: colors.lightBlack }}>
                      Already registered? Please,
                    </EngText>
                    <EngText>&nbsp;&nbsp;Sign In</EngText>
                  </View>

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80%",
                      alignSelf: "center",
                      marginVertical: 20,
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: colors.grey,
                      }}
                    />
                    <View>
                      <EngText style={{ width: 50, textAlign: "center" }}>
                        OR
                      </EngText>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        height: 1,
                        backgroundColor: colors.grey,
                      }}
                    />
                  </View>
                  <View style={styles.socialIcon}>
                    <SocialIcon type="facebook" />
                    <SocialIcon type="google" />
                    <SocialIcon type="instagram" />
                  </View>
                </>
              )}
            </Formik>
          </ScrollView>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  form: {
    flex: 2,
    alignSelf: "center",
    width: "100%",
  },
  fields: {
    flexDirection: "row",
    borderWidth: 0.5,
    width: "80%",
    height:50,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 4,
    //borderColor: colors.lightBlack,
  },
  textInput: {
    width: "75%",
  },
  error: {
    color: colors.danger,
    alignSelf: "center",
    paddingVertical: 2,
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  button: {
    borderWidth: 1,
    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    backgroundColor: colors.tomato,
    borderColor: colors.tomato,
    elevation: 2,
    marginVertical: 20,
  },
  btnText: {
    textAlign: "center",
    color: colors.white,
  },
  registered: {
    flexDirection: "row",
    alignSelf: "center",
  },
  divider: {
    alignSelf: "center",
    paddingVertical: 10,
    flexDirection: "row",
  },
  socialIcon: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
