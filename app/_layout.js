import { Stack } from "expo-router";
import { Provider } from "../context/auth";

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
              backgroundColor: "rgba(51, 51, 51, 1)",
            },
            headerTitleStyle: { color: "white" },
            headerTintColor: "rgba(13, 180, 185, 1)",
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
