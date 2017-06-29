## Tiny Client
A template for a universal JavaScript client application with a custom server.

## Technologies
..* Node.js
..* Express.js
..* JavaScript ES2015
..* React
..* Redux
..* Webpack
..* Testing suite: NYC / Chai / Mocha / Sinon / Istanbul
..* EJS templating
..* Lodash
..* React hot-loading

## Testing
Test repo:
`npm run test`

Test repo and build coverage report:
`npm run test:coverage`

Test single file:
`npm run test:file -- --file=FILENAME`

## Configuration
Default port on localhost is: 3000
Production environment is presently pointed at localhost:5000

Launch in production* environment:
`npm start`

* Note: production environment is not fully set up yet. Production config is
presently just pointed at a different port on localhost. Intent is to update
once a remote location is set up for deployment.

Launch in default environment, for development:
`npm start:dev`

 Launch in production environment, for development:
`ENVIRONMENT=production npm start:dev`
