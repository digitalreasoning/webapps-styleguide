# Web Apps Styleguide
This repo serves as a general styleguide for web apps for Digital Reasoning. It will house common elements, and instructions on how to build and use those elements.

## Usage
This repo can be used as a reference, or to directly import files into your app.

`npm install https://github.com/digitalreasoning/webapps-styleguide#XYZ` (XYZ can be replaced with a git commit SHA)

Import .less files into your files as you would with bootstrap or any other framework. LESS example: `@import '~drstyleguide/common/base.less';` 

### Future-proofing
Projects can lock to a specific commit of the style guide so as to not pull in breaking changes if they so desire. But from time to time, it is recommended to bump your version of the style guide in your app to stay up to date.
Example:  "package": "git://github.com/username/package.git#commit"

## Development
If you want to develop on the styleguide, simply clone this repo, and run `npm install` and then `npm link` from inside this repo.

In your package.json, reference the local version of the repo like this:
`"webapps-styleguide": "file:/Path/to/local/webapp-styleguide"`

Then run `npm link styleguide` (where styleguide is the name of the repo) from your application.

Now any changes you make in the styleguide repo will be picked up by your webapp. Make this process easier by using a front-end build tool to watch for changes in your app's repo. If you are importing a less file from the styleguide, the watch will typically pick up the change and allow you to continue to use livereloading during development.

## Reference the styleguide
You may wish to just view the styleguide for reference. If so, clone this repo, run `npm install` and then `node server`.

Navigate to http://localhost:8081/. All less files will be automatically compiled as you manually refresh the browser. Change elements using the styleguide.json config file.