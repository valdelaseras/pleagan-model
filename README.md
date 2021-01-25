# Publishing

On local machine using npm

```sh
$ npm version patch // to increase patch version number
$ npm version minor // to increase minor version number
$ npm version major // to increase major version number
$ npm version 1.33.7 // to explicitely set version number
```

Or use yarn

```sh
$ yarn version
    info Current version: 1.33.6
    question New version: 1.33.7
    info New version: 1.33.7
    ✨  Done in 9.42s.
```

This sets the new version in `package.json` and commits the changes to the origin repository.
Github should trigger an action workflow and automagically build and publish the changes to [npmjs.org](https://npmjs.org/package/pleagan-model)
