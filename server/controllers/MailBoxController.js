const Letter = require('../models/letter');

const getLetters = async (req, res) => {
    try {
        const letters = await Letter.find();
        res.json(letters);
    } catch {
        console.log('Internal Server Error occured when get letters')
        res.sendStatus(500)
    }
};

const postLetter = async (req, res) => {
    try {
        const newLetter = new Letter(req.body);
        await newLetter.save()
        res.status(200);
        res.send(req.body);
    } catch {
        console.log('Internal Server Error occured when post new letter')
        res.sendStatus(500)
    }
};

const deleteLetter = async (req, res) => {
    try {
        const { id } = req.body;
        const delLetter = await Letter.findOneAndDelete({ id });
        console.log('letter deleted', delLetter);
        res.status(200);
        res.send({ id });
    } catch {
        console.log('Internal Server Error occured when delete letter')
        res.sendStatus(500)
    }
};

const patchLetter = async (req, res) => {
    try {
        const { id, property, value } = req.body;
        const letter = await Letter.findOneAndUpdate(
            { id },
            { [property]: value },
            { returnDocument: "after" }
        );
        console.log('letter updated', letter);
        res.status(200);
        res.send(letter);
    } catch {
        console.log('Internal Server Error occured when patch letter')
        res.sendStatus(500)
    }
};

module.exports = { getLetters, postLetter, patchLetter, deleteLetter }