import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1a1a2e',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#1a1a2e',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Good Sleep',
          headerShown: false,
        }} 
      />
      <Stack.Screen 
        name="settings" 
        options={{ 
          title: 'Settings',
          presentation: 'card',
        }} 
      />
    </Stack>
  );
}
