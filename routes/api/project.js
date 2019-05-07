const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const Project = require("../../models/Project");

router.get("/", (req, res) => {
    Project.find({ }, function (err, project) {
      if (err) return res.send(500, { error: err });
      return res.status(200).json(project)
    });  
});

router.post("/createproject" , (req, res) => {
    const newProject = new Project({
        name: req.body.name,
        image: req.body.image,
        summary: req.body.summary,
        repoLink: req.body.repoLink,
        deployLink: req.body.deployLink,
    });

    newProject.save().then(event => res.json(event)).catch(err => console.log(err));

});

module.exports = router;