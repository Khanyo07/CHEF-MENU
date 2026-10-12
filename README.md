# Chef's Menu Manager — Part 2

**Student:** Lukhanyo Kuhle Letsatsi Molefe · ST10529501 · MAST5112

A React Native (Expo, TypeScript) app for Christoffel's restaurant that lets the chef add menu items and view the full menu.

## Features (Part 2)

- **Home screen:** app title, total number of menu items, and a card for every dish (built with a `for` loop render function)
- **Add dish screen:**
  - Dish name: `TextInput`
  - Description: multiline `TextInput`
  - Course: `Picker` limited to Starter / Main Course / Dessert
  - Price: `TextInput` with the decimal keypad
- **Automatic updates:** the list updates as soon as a dish is saved, because the menu array is held in state in `App.tsx`
- **Validation and errors:**
  - Every required field is checked using the `isEmpty` function
  - Each field shows its own red error message, and the field is highlighted
  - A summary message appears at the top of the form when there are errors
- **Confirmation:** an alert confirms the dish was added, then the app returns to the home screen
- **Empty state:** a message is shown when no dishes have been added yet
- **Consistent layout:** all styles live in one shared `Styles.tsx` file

Editing, deleting and filtering/average price are planned for the Final PoE.

## Project structure

```
App.tsx                         Navigation + app-level menu state
components/MenuItem.tsx         MenuItem type and the list of valid courses
components/Styles.tsx           All styles for the app
components/HomeScreen.tsx       Screen 1: menu list + total count
components/AddDishScreen.tsx    Screen 2: add dish form with validation
```

## How to run

1. Create a blank TypeScript Expo project:
   ```
   npx create-expo-app -t expo-template-blank-typescript chefs-menu-manager
   cd chefs-menu-manager
   ```
2. Install React Navigation and the Picker:
   ```
   npm install @react-navigation/native @react-navigation/native-stack
   npx expo install react-native-screens react-native-safe-area-context @react-native-picker/picker
   ```
3. Replace the generated `App.tsx` with this one, and copy in the `components` folder.
4. Start the app and scan the QR code with Expo Go on your Android phone:
   ```
   npx expo start
   ```
