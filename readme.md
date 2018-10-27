## Setup

* Install php via brew `brew install php71`
* brew install mysql
* start mysql server `mysql.server start`
* mysql_secure_installation
* create file called `server.js` 
* install `express` and `express-php-fpm`
* start php server `brew services start php@7.1`
* go to `https://www.phpmyadmin.net/` and download the latest verions of `phpmyadmin`
* move the folder into the wordpress folder and name it `pma`
* now you can go to `localhost:3000/pma`

### server.js
```
const express = require( 'express' )
const epf = require( 'express-php-fpm' ).default

const options = {
	// root of your php files
	documentRoot: __dirname + '/php_files',

	// extra env variables
	env: {},

	// connection to your php-fpm server
	// https://nodejs.org/api/net.html#net_socket_connect_options_connectlistener
	socketOptions: { port: 9000 },
}

const app = express()
app.use( '/', epf( options ) )
app.listen( 3000 ,() => {
	console.log( 'Listening on port 3000' )
} )
```