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
## You can also download this project and test it by running the following commands

It's necessary to have Git, Node.js, and Expo CLI already installed and configured.

```bash
  git clone https://github.com/cicerosnt/navigation-react-native.git
  cd navigation-react-native
  npm i
  npx expo start
```

## Author

- [@cicerosnt](https://www.github.com/cicerosnt)