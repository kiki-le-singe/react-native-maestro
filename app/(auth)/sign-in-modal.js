import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import { object, string } from "yup";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

import { useAuth } from "../../context/auth";
import colors from "../../utils/colors";

const SHAKING_DISTANCE = 10;

const signInValidationSchema = object({
  email: string()
    .email("Please enter a valid email")
    .required("Email Address is Required"),
  password: string()
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      "Password must contain at least 8 characters including upper/lowercase, numbers and at least 1 special characters."
    )
    .required("Password is Required"),
});

export default function SignIn() {
  const position = useSharedValue(0);
  const { signIn } = useAuth();

  const startAnimation = () => {
    position.value = withRepeat(
      withSequence(
        withTiming(-SHAKING_DISTANCE, { duration: 50 }),
        withTiming(SHAKING_DISTANCE, { duration: 50 }),
        withTiming(0, { duration: 50 })
      ),
      2,
      true
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
    };
  });

  function onSubmit(values) {
    signIn(values);
    console.log(values);
  }

  const renderForm = ({
    handleChange,
    handleSubmit,
    values,
    errors,
    touched,
  }) => (
    <>
      <TextInput
        style={styles.input(errors.email && touched.email)}
        onChangeText={handleChange("email")}
        value={values.email}
        placeholder="Email"
        placeholderTextColor={colors.BLUE}
        autoCapitalize="none"
        autoComplete="off"
      />
      <TextInput
        style={styles.input(errors.password && touched.password)}
        onChangeText={handleChange("password")}
        value={values.password}
        placeholder="Password"
        placeholderTextColor={colors.BLUE}
        autoCapitalize="none"
        autoComplete="off"
        secureTextEntry
      />
      <Button
        testID="SignInButton"
        title="Sign In"
        color={colors.GREEN}
        onPress={(e) => {
          if (!values.email || !values.password) {
            startAnimation();
          }

          handleSubmit(e);
        }}
      />

      {errors.email && touched.email ? (
        <Text style={styles.error}>{errors.email}</Text>
      ) : null}

      {errors.password && touched.password ? (
        <Text style={styles.error}>{errors.password}</Text>
      ) : null}
    </>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Animated.View style={[styles.inner, animatedStyle]}>
          <Text testID="GreetingsText" style={styles.titleScreen}>
            Hello!
          </Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInValidationSchema}
            onSubmit={onSubmit}
          >
            {renderForm}
          </Formik>
        </Animated.View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLACK,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleScreen: {
    fontSize: 34,
    color: colors.WHITE,
    marginBottom: 10,
  },
  input: (isNotValidate) => ({
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: isNotValidate ? colors.RED : colors.BLUE,
    borderRadius: 8,
    padding: 10,
    color: colors.WHITE,
    fontWeight: "bold",
  }),
  error: {
    color: colors.RED,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 30,
  },
});
