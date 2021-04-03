const { Schema, model } = require("mongoose");

const postMessageSchema = new Schema(
	{
		title: String,
		message: String,
	},
	{ timestamp: true }
);

const PostMessage = model("PostMessage", postMessageSchema);

module.exports = PostMessage;
