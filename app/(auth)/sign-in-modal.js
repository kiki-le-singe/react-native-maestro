import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

import { useAuth } from "../../context/auth";
import colors from "../../utils/colors";

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
  const { signIn } = useAuth();

  function onSubmit(values) {
    signIn(values);
    console.log(values);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.titleScreen}>Hello!</Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={signInValidationSchema}
            onSubmit={onSubmit}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
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
                  title="Sign In"
                  color={colors.GREEN}
                  onPress={handleSubmit}
                />

                {errors.email && touched.email ? (
                  <Text style={styles.error}>{errors.email}</Text>
                ) : null}

                {errors.password && touched.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
              </>
            )}
          </Formik>
        </View>
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
