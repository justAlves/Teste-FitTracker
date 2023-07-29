# Svelte Ionic Template

This template glues [Svelte](https://svelte.dev/) and
[Ionic](https://ionicframework.com/) together for Apps in Android and iOS
development.

## Getting started

### The environment

You must have node with npm installed. You should also have your app development
environment setup just as described by the ionic docs for
[Android](https://ionicframework.com/docs/developing/android) and
[iOS](https://ionicframework.com/docs/developing/ios). This project is made to be run
with capacitor and not cordova.

### Creating the project

1. Copy the template with git clone:

```sh
# clone most recent template
git clone --depth 1 https://gitlab.com/team-tecnologia/templates-and-snippets/svelte-ionic-template project-name
# enter project folder
cd project-name
# remove git repository
rm -rf .git
```


### Setup environment

1. Install the [asdf](https://asdf-vm.com/).

2. Install the [asdf node plugin](https://github.com/asdf-vm/asdf-nodejs).

3. Install the node with asdf:

```sh
asdf install
```

1. Install the node packages:

```sh
npm install
```

5. Install the ionic cli utility:

```sh
npm install -g @ionic/cli
```

### Setup environment with docker
1. Instal docker and docker compose.
2. Run `docker-compose run app bash`.
3. Inside the container run `npm install`;

If you want to use a physical **Android** device, you will need to:
1. Attache a device with dev mode and usb debugging enabled.
2. Make sure that your phone and your PC is on the same network.
3. At a terminal of your Operational System run: `adb tcpip 5555` to stream the connection of adb over the network. And accept the connection on your device.
4. On your attached device, go to `Settings -> About phone -> Status -> IP address` and get the internal IP.
5. Inside the container run: `adb connect [ip device]:5555`. And accept the connection on your device.

### Running the app

Copy the `@ionic/core` library to the public folder before using it. To do that
you may just run `npm run build` once. It will create a production build and
copy the needed libraries for the front-end from `node_modules`. Dev mode, which
is used for live reloading, does not copy the `@ionic/core` library

Start the app in Android and iOS with:

```sh
npm run run:android        # compile standalone version and run in android
npm run run:ios            # compile standalone version and run in ios
npm run livereload:android # run with live reload on android
npm run livereload:ios     # run with live reload on ios
```

Make sure your mobile device is on the same WiFi as the computer for the
live reload mode to work.

You may also want to run on your browser. You can do that by running:

```sh
npm run dev   # live reloading mode
npm run build # generate production build
npm run start # serve the production build
npm run test  # run jest tests and snapshot tests
npm run test:ui # run screenshot test with server to view diffs
npm run test:ui-cli # run screenshot test without server (docker must be running)
npm run storybook # run the storybook server (docker must be running)
```

## Extensions

### Required
We have some required extensions for this project correct formatting, they are:

- ESLint
- EditorConfig

Learn to configure the linter to work with your code editor in the
[eslint-plugin-svelte3 integrations page](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/INTEGRATIONS.md).
You can add linter configurations on the file `.eslintrc.cjs` but be careful and
add Typescript related rules only for typescript.

### Suggested

We recommend other useful extensions on `.vscode/extensions.json`. If you are using VSCode editor they will apear as recommended automatically. If not, you can go the file and find the equivalent extensions on your editor.

## TODO

* [x] Add testing framework(s)

  * [x] Jest
  * [x] Storybook

* [ ] Improve linter configurations
* [ ] Add linting for SCSS and CSS
* [ ] Add JS polyfills
* [x] Add router
* [ ] Add automated error collection
* [x] Add path converter
* [x] Add ionic UI examples
* [x] Add SCSS variables for screen size media queries
