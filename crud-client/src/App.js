import React from 'react';
import { Provider } from 'react-redux';
import { Container, AppBar, Typography } from '@material-ui/core';

import PostMessages from './components/PostMessages';
import store from './actions/store';

function App() {
	return (
		<Provider store={store}>
			<Container maxWidth='lg'>
				<AppBar position='static' color='inherit'>
					<Typography variant='h2' align='center'>
						Post Box
					</Typography>
				</AppBar>
				<PostMessages />
			</Container>
		</Provider>
	);
}

export default App;
