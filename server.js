const express = require( 'express' )
const epf = require( 'express-php-fpm' ).default

const options = {
	// root of your php files
	documentRoot: __dirname + '/wordpress',

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