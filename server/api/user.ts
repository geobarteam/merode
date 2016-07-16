import * as express from "express";
import * as _ from "lodash";
import { IUser } from "../model/IUser";
import * as User from "./mongoose/user";
import { Config } from "../config/config";

export function users(app:express.Express) {

    /* Create */
    app.put('/api/user', function (req, res) {
        var newUser = new User(req.body);
        newUser.save((err)=>{
            if (err){
                res.json({info: 'error during user create', error: err});
            }
            res.json({info: 'user saved successfully', data: newUser}); 
        });
    });
 
    /* Read */
    app.get('/api/user', function (req, res) {
        User.find((err, users) => {
            if (err) {
                res.json({info: 'error during find users', error: err});
            };
            res.json({info: 'users found successfully', data: users});
        });
    });
    
    app.get('/api/users/:name', function (req, res) {
        var query = { name: req.params.name};
        User.findOne(query, function(err, User) {
            if (err) {
                res.json({info: 'error during find users', error: err});
            };
            if (users) {
               res.json({info: 'users found successfully', data: users});
            } else {
                res.json({info: 'users not found with name:'+ req.params.name});
            }
        });
    });
};