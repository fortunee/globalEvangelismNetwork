import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import bodyParser from 'body-parser';
import users from './routes/users';
import auth from './routes/auth';

/* eslint-disable no-console */

const port = process.env.PORT || 3000;
const app = express();
const compiler = webpack(config);

app.use(bodyParser.json());
app.use('/api/user', users);
app.use('/api/auth', auth);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true, 
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, (err) => {
	if (err) {
		console.log(err);
	} else {
		// open(`http://localhost:${port}`);
	}
});
