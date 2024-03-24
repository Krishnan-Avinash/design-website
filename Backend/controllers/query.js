const Query = require("../models/query");
exports.addQuery = async (req, res) => {
  try {
    console.log("into adding value");
    console.log("req.body", req.body);
    const newQuery = await new Query(req.body);
    await newQuery.save();
    await res.status(201).send({ message: "New Query received", newQuery });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.getAllQuery = async (req, res) => {
  try {
    console.log("HI");
    const query = await Query.find({});
    if (query.length) {
      res.status(200).send({ products });
    } else {
      res.status(204).send({ msg: "No Product Available" });
    }
  } catch (err) {
    res.status(500).send({ err });
  }
};
