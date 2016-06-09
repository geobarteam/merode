import * as mongoose from "mongoose";
import {IPlayer} from "../../public/app/model/IPlayer"

interface IPlayerModel extends IPlayer, mongoose.Document {}

var playerSchema = new mongoose.Schema({
    name: String
});

var Player = mongoose.model<IPlayerModel>("Player", playerSchema);

export = Player;




