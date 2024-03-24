const Template = require("../models/template");
exports.getAllTemplate = async (req, res) => {
  try {
    const templates = await Template.find({});
    if (templates.length) {
      res.status(200).send({ templates });
    } else {
      res.status(204).send({ msg: "No Product available" });
    }
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.addTemplate = async (req, res) => {
  try {
    console.log("req.body", req.body);
    const newTemplate = await new Template(req.body);
    await newTemplate.save();
    await res.status(201).send({ message: "New Template Added", newTemplate });
  } catch (err) {
    res.status(500).send({ err });
  }
};
