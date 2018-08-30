const mongoose = require('mongoose');


const ObjectLikesSchema = mongoose.Schema({

likeId : Schema.Types.ObjectId,
objectId : {type: String},
user :[ {type: Schema.Types.ObjectId, ref: 'User'}],
likeStatus :{type:String}

});

module.exports = mongoose.model('ObjectLikes', ObjectLikesSchema);