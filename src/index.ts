import express, {Express} from 'express';

import serverConfig from './config/serverConfig.js';

const app: Express = express();

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at Port: ${serverConfig.PORT}`);
});
  