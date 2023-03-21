import { Stack } from "expo-router";
import { Provider } from "../context/auth";

export default function Root() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="details"
          options={{
            title: "Details",
          }}
        />
        <Stack.Screen
          name="(auth)/sign-in-modal"
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack>
    </Provider>
  );
}
