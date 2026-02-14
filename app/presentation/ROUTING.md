# Expo Router Configuration for Clean Architecture

## Folder Structure

This project uses a **clean architecture** approach with expo-router's file-based routing:

```
app/
├── _layout.tsx                           # Root layout with navigation config
├── index.tsx                             # Home route (re-exports HomeScreen)
├── settings.tsx                          # Settings route (re-exports SettingsScreen)
├── presentation/
│   └── screens/
│       ├── home/
│       │   └── HomeScreen.tsx           # Actual home screen component
│       └── settings/
│           └── SettingsScreen.tsx       # Actual settings screen component
├── use-cases/                           # Business logic
├── repositories/                        # Data layer
└── http-clients/                        # API clients
```

## How It Works

### Route Files (app/*.tsx)
Route files in the `app/` directory are **thin re-export layers**:

```tsx
// app/index.tsx
export { default } from './presentation/screens/home/HomeScreen';
```

This pattern:
- ✅ Keeps expo-router's file-based routing working
- ✅ Maintains clean architecture separation
- ✅ Allows presentation layer to be independent of routing
- ✅ Enables typed routes with TypeScript

### Screen Components (app/presentation/screens/*/)
Screen components contain the actual UI logic and are organized by feature:

```tsx
// app/presentation/screens/home/HomeScreen.tsx
export default function HomeScreen() {
  // Screen implementation
}
```

## Adding New Routes

To add a new route:

1. **Create the screen component** in `app/presentation/screens/[feature]/[Feature]Screen.tsx`
2. **Create a route file** in `app/[route-name].tsx` that re-exports the screen
3. **Update `_layout.tsx`** if you need custom screen options

### Example: Adding an "Alarm" screen

```bash
# 1. Create the screen component
app/presentation/screens/alarm/AlarmScreen.tsx

# 2. Create the route file
app/alarm.tsx
```

```tsx
// app/alarm.tsx
export { default } from './presentation/screens/alarm/AlarmScreen';
```

## Typed Routes

Expo Router automatically generates TypeScript types for routes. After adding new routes:

1. The dev server will regenerate types automatically
2. You can use typed navigation: `router.push('/settings')`
3. TypeScript will autocomplete available routes

## Benefits

- **Separation of Concerns**: Routing logic separate from UI components
- **Testability**: Screen components can be tested without routing
- **Flexibility**: Easy to change routing structure without touching screens
- **Type Safety**: Full TypeScript support with auto-generated route types
