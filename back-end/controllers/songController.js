const express = require("express");
const songController = express.Router();
const {
    getAllSongs,
    getOneSong,
    createSong,
    deleteSong,
    updateSong
} = require("../queries/songs.js");
const reviewsController = require("./reviewsController.js");
const { checkName, checkBoolean } = require("../validations/checkSongs.js");

// Use the reviewsController for reviews related to songs
songController.use("/:song_id/reviews", reviewsController);

songController.get("/", async (req, res) => {
    try {
        const allSongs = await getAllSongs();
        res.status(200).json({ success: true, data: { payload: allSongs } });
    } catch (error) {
        res.status(500).json({ success: false, data: { error: "Server Error - we didn't do it!" } });
    }
});

songController.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const oneSong = await getOneSong(id);
        if (oneSong) {
            res.json(oneSong);
        } else {
            res.status(404).json({ error: "Song not found!" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error - we didn't do it!" });
    }
});

songController.post("/", checkName, checkBoolean, async (req, res) => {
    try {
        const createdSong = await createSong(req.body);
        res.json(createdSong);
    } catch (error) {
        res.status(400).json({ error: "Bad Request - Something went wrong!" });
    }
});

songController.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedSong = await deleteSong(id);
        if (deletedSong) {
            res.status(200).json({ success: true, payload: { data: deletedSong } });
        } else {
            res.status(404).json("Song not found - Uh oh!");
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error - we didn't do it!" });
    }
});

songController.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSong = await updateSong(id, req.body);
        if (updatedSong.id) {
            res.status(200).json(updatedSong);
        } else {
            res.status(404).json("No song found with that ID.");
        }
    } catch (error) {
        res.status(500).json({ error: "Server Error - we didn't do it!" });
    }
});

module.exports = songController;

