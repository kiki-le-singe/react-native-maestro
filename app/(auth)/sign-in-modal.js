import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
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
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Hello!</Text>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signInValidationSchema}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <TextInput
              style={styles.input(errors.email)}
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email"
              placeholderTextColor={colors.BLUE}
              autoCapitalize="none"
              autoComplete="off"
            />
            <TextInput
              style={styles.input(errors.password)}
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

            <Text style={styles.error}>{errors.email}</Text>
            <Text style={styles.error}>{errors.password}</Text>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.BLACK,
  },
  titleScreen: {
    fontSize: 34,
    color: colors.WHITE,
    marginBottom: 10,
  },
  input: (error) => ({
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: error ? colors.RED : colors.BLUE,
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
