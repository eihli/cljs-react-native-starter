The following describes the way this directory was created. You may want to re-run these commands if time obsoletes this repo.

- ``npx react-native init ExampleApp`` <- In parent directory
- ``npx react-native start`` <- In directory created by above command
- ``npx react-native run-android``

https://facebook.github.io/react-native/docs/getting-started.html

After running `npx react-native init`, you'll need to update `index.js`. By default, the react-native-cli will create that file and have it import from `App.js` which will show the default react-native loading screen. If you want it to show your code, you'll need to have that file import `./app/index.js`.
