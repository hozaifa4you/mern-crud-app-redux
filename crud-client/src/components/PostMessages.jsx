import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, Paper, withStyles } from '@material-ui/core';

import * as Actions from '../actions/postMessage';
import PostMessageForm from './PostMessageForm';

const styles = theme => ({
	paper: {
		margin: theme.spacing(3),
		padding: theme.spacing(2)
	}
});

const PostMessages = props => {
	const [x, setX] = useState(0);

	useEffect(() => {
		props.fetchAllPostMessages();
	}, [x]);

	return (
		<Grid container>
			<Grid item xs={5}>
				<Paper>
					<PostMessageForm />
				</Paper>
			</Grid>
			<Grid item xs={7}>
				<Paper>
					<h1>List of all messages</h1>
				</Paper>
			</Grid>
		</Grid>
	);
};

const mapStateToProps = state => ({ postMessageList: state.postMessage.list });

const mapActionToProps = {
	fetchAllPostMessages: Actions.fetchAll
};

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles))(PostMessages);
