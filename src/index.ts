import express, {Express} from 'express';

import serverConfig from './config/serverConfig';
import SampleQueueProducer from './producers/SampleQueueProducer';
import apiRouter from './routes';
import SampleWorker from './workers/SampleWorker';

const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started at Port: ${serverConfig.PORT}`);

    SampleWorker('SampleQueue');

    SampleQueueProducer('SampleJob', {
        name: "Sanket",
        company: "Microsoft",
        position: "SDE 2",
        location: "Remote"
    });
});
  