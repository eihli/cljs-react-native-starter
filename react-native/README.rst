The following describes the way this directory was created. You may want to re-run these commands if time obsoletes this repo.

- ``npx react-native init ExampleApp`` <- In parent directory
- ``npx react-native start`` <- In directory created by above command
- ``npx react-native run-android``

https://facebook.github.io/react-native/docs/getting-started.html

After running `npx react-native init`, you'll need to update `index.js`. By default, the react-native-cli will create that file and have it import from `App.js` which will show the default react-native loading screen. If you want it to show your code, you'll need to have that file import `./app/index.js`.

For navigation, follow along with https://reactnavigation.org/docs/en/getting-started.html
Make sure you install all the dependencies

``npm install --save react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context react-native-navigation-tabs react-native-navigation-stack @react-native-community/masked-view``

After doing everything in that getting-started link, re-run ``npx react-native run-android`` to kick of the gradle re-build.
