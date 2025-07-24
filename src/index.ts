import express, {Express} from 'express';

import serverConfig from './config/serverConfig';
import apiRouter from './routes';
import SampleWorker from './workers/SampleWorker';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(express.text());

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at Port: ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');
});
   