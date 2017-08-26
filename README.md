## Amped React Boilerplate

Amped React Boilerplate is a project that has everything setup to work with the Amped Framework. This functions as the starting point for you to build your site on top of so this should be cloned and the remote url should be changed to your repo.

The idea behind the Amped project is to get you up and started with the basics you need with for any project and allowing you to focus on the business logic of your app.

### Setup

If you are on mac or linux you can just run `./install.sh`

If you are on windows you can run
```
npm install
cd lib	
git clone https://github.com/rebelpixeldev/amped-react-core
```

The `lib` directory is where you can install whichever Amped react project you need. Currently only the core react project is available. This will be downloaded for you when you run the install script and placed in the lib directory. You can find that project [here](https://github.com/rebelpixeldev/amped-react-core)

Running `npm start` will startup the project by compiling the source and starting a webpack dev server with hot reloading to serve your files on [`http://localhost:3000`](http://localhost:3000). When using nginx on your webserver, you can serve the files directly with nginx.

### How the project works

* `bin` - This is only for your local development. The files in here are the logic the runs webpack functions either to compile your code or startup the dev server
* `config` - All of the config files for the project
* `lib` - This is a temporary directory for the amped react plugins that you will use in your project during development of the framework. Once the boilerplate and framework get a little more developed, these plugins will be included through npm
* `public` - Not many files in here but will this should be served up as static files on your web server
* `server` - Files that will run the the local dev server
* `dist` - Not in the repo but is added when webpack compiles all of your files static files on your server should be served from here.
* `src` - Here's where the fun starts! This is where you will code your project. The files that are in there to start are to show you one way of doing things but the skys the limit.
    * `components` - Reuseable components for your project
    * `containers` - The container for the reuseable components in your project
    * `layouts` - Components and their styles that provide structure to the page. These are usually the page wrapper compenets that will hold and position things like header, sidebar and gloval elements.
    * `routes` - The containers, components, styles and anything else that will be on specific pages of your app.
    * `store` - The logic to setup your redux store. By default it will setup all of the routes in this boilerplate project and pull the routes from `lib/amped-react-core`. All of your custom routes and any other plugins you add into lib, you will need to add the routes to here manually.
    * `styles` - Some global styles for the project. *This will slowly be removed in favor of a BEM css strategy by putting all of the styles within each component*
    * `main.js` - This is the starting point for the app. It will setup the store and mount the initial component.
    * `theme.js` - The react version of the Amped Framework uses [material UI](http://www.material-ui.com) to style the basics of all components. theme.js is were you can customize the [primary colors](http://www.material-ui.com/#/customization/colors) of the site.

### Api

If everything is setup with your frontend project, you'll need the api up and running before anything will display in your browser without javascript errors. See the [Amped api boilerplate project](https://github.com/rebelpixeldev/amped-api-boilerplate) for more info

### Related Projects
* [Amped react core](https://github.com/rebelpixeldev/amped-react-core)
* [Amped api boilerplate](https://github.com/rebelpixeldev/amped-api-boilerplate)
* [Amped api](https://github.com/rebelpixeldev/amped-api)