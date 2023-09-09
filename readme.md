# Three examples of navigation in React Native: Drawer, Tab, and Stack.

## Installing the CORE.
```bash
  npm install @react-navigation/native
```
### Dependency for navigation

```bash
  npx expo install react-native-screens react-native-safe-area-context
  
  npm install react-native-screens react-native-safe-area-context
```

## Navigation Tab

```bash
  npm install @react-navigation/bottom-tabs
```

## Navigation Drawer

```bash
  npm install @react-navigation/drawer
```
### Dependency for navigation drawer

```bash
  npx expo install react-native-gesture-handler react-native-reanimated
```
To use Reanimated, you need to add the following snippet to your babel.config.js.

`plugins: ['react-native-reanimated/plugin']`

In the `App.tsx` file, import:

`import 'react-native-gesture-handler';`

More detail here -> https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

## Stack navigation

```bash
  npm install @react-navigation/native-stack
```


## Author

- [@cicerosnt](https://www.github.com/cicerosnt)