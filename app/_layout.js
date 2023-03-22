import { Stack } from "expo-router";
import { Provider } from "../context/auth";
import colors from "../utils/colors";

export default function Root() {
  return (
    <Provider>
      <Stack
        initialRouteName="index"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      >
        <Stack.Screen name="index" />
        <Stack.Screen
          name="details"
          options={{
            headerShadowVisible: true,
            headerStyle: {
              backgroundColor: colors.BLACK,
            },
            headerTitleStyle: { color: colors.WHITE },
            headerTintColor: colors.BLUE,
            title: "Details",
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="(auth)/sign-in-modal"
          options={{
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
}
