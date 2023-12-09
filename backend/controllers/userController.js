const fs = require('fs');
const User = require('../models/userModel');
const APIFeatures = require('../utils/apiFeatures');
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));

exports.aliasTopTours = (req, res, next) => {
    // req.query = {}
};

exports.getAllUsers = async (req, res) => {
    console.log(req.query);
    let query = Tour.find();
    try {
        const users = await query;
        res.json({
            status: 'success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.find({_id: req.params.id});
        console.log(user[0]);
        res.status(200).json({
            status: 'successs',
            data: {
                user: user[0]
            }
        });      
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};



exports.deleteUser = (req, res) => {
    User.deleteOne({id})
    res.status(204).json({
        status: 'success',
        data: null
    });
};

exports.postUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json({
            status: 'success',
            data: newUser
        });
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err.message
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        const newUser = await Tour.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({
            status: 'success',
            data: newUser
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
}