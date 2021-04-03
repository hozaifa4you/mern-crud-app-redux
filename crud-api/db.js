const mongoose = require("mongoose");

const dbConnection = () => {
	mongoose.connect(
		process.env.DB_CONNECTION,
		{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
		err => {
			if (!err)
				console.log("Database connected at : " + mongoose.connection.host);
			else
				console.log(
					"Error while connecting MongoDB" +
						JSON.stringify(err, undefined, 2)
				);
		}
	);
};

module.exports = dbConnection;
