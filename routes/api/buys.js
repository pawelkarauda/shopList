const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Buy = require("../../models/Buy");

// @route   GET api/buys
// @desc    Get buys
// @access  Private
router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Buy.find()
            .sort({ date: -1 })
            .then(buys => res.json(buys))
            .catch(err =>
                res.status(404).json({ nobuysfound: "No buys found " })
            );
    }
);

// @route   GET api/buys/add
// @desc    Add buyment
// @access  Private
router.post(
    "/add",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const newBuy = new Buy({
            name: req.body.name
        });

        newBuy.save().then(buy => res.json(buy));
    }
);

// @route   DELETE api/buys/:id
// @desc    Delete buys
// @access  Private
router.delete(
    "/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Buy.findById(req.params.id)
            .then(buy => {
                buy.remove().then(() => res.json({ succes: true }));
            })
            .catch(err => res.status(404).json({ buynotfound: "Not found" }));
    }
);

module.exports = router;
