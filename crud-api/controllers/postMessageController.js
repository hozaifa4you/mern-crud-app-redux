const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const PostMessage = require("../models/PostMessage");

// routes
router.get("/", (req, res) => {
	PostMessage.find((err, docs) => {
		if (!err) res.status(200).send(docs);
		else
			console.log(
				"Error while retrieving all records : " +
					JSON.stringify(err, undefined, 2)
			);
	});
});

router.post("/", (req, res) => {
	let newRecord = new PostMessage({
		title: req.body.title,
		message: req.body.message,
	});

	newRecord.save((err, docs) => {
		if (!err) res.status(200).send(docs);
		else
			console.log(
				`error while creating new records: ` +
					JSON.stringify(err, undefined, 2)
			);
	});
});

router.put("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		res.status(400).send("No records found with the is id: " + req.params.id);

	let updatedRecord = new PostMessage({
		title: req.body.title,
		message: req.body.message,
	});

	PostMessage.findOneAndUpdate(
		req.params.id,
		{ $set: updatedRecord },
		{ new: true },
		(err, docs) => {
			if (!err) res.status(200).send(docs);
			else
				console.log(
					`Error while updating the records ` +
						JSON.stringify(err, undefined, 2)
				);
		}
	);
});

router.delete("/:id", (req, res) => {
	if (!ObjectID.isValid(req.params.id))
		res.status(400).send("No records found with the is id: " + req.params.id);

	PostMessage.findOneAndDelete(req.params.id, (err, docs) => {
		if (!err) res.status(200).send(docs);
		else
			console.log(
				`Error while deleting the records` +
					JSON.stringify(err, undefined, 2)
			);
	});
});

module.exports = router;
