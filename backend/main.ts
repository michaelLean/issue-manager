import { server } from './src/server';

server.bootstrap()
    .then(api => console.log('Server is listening in port: ' + api))
    .catch(error => console.error('Error - ' + error));