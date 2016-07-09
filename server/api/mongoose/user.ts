import * as mongoose from "mongoose";
import {IUser} from "../../model/IUser"

interface IUserModel extends IUser, mongoose.Document {}

var playerSchema = new mongoose.Schema({
    email: String,
    password: String
});

var User = mongoose.model<IUserModel>("User", playerSchema);

export = User;




