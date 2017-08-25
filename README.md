## Amped React Boilerplate

Amped React Boilerplate is a project that has everything setup to work with the Amped Framework. This functions as the starting point for you to build your site on top of so this should be cloned and the remote url should be changed to your repo.


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

### Api

If everything is setup with your frontend project, you'll need the api up and running before anything will display in your browser without javascript errors. See the [Amped api boilerplate project](https://github.com/rebelpixeldev/amped-api-boilerplate) for more info
