const Auto = require("../models/auto.model");

exports.getAutos = async (req, res) => {
    try {
        const autos = await Auto.findAll();
        res.json(autos);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.createAuto = async (req, res) => {
    try {
        const newAuto = await Auto.create(req.body);
        res.status(201).json(newAuto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.updateAuto = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAuto = await Auto.update(req.body, { where: { id } });
        res.json(updatedAuto);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteAuto = async (req, res) => {
    try {
        const { id } = req.params;
        await Auto.destroy({ where: { id } });
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
