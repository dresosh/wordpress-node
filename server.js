const express = require( 'express' )
const epf = require( 'express-php-fpm' ).default

const options = {
	documentRoot: __dirname + '/wordpress',
	env: {},
	socketOptions: { port: 9000 },
}

const app = express()
app.use( '/', epf( options ) )
app.listen( 3000 ,() => {
	console.log( 'Listening on port 3000' )
} )
