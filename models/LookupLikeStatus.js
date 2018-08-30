const mongoose = require('mongoose');


const LookupLikeStatusSchema = mongoose.Schema({

likeStatusId : Schema.Types.ObjectId,
likeStatus : {type: String},
objectLikesSet :[ {type: Schema.Types.ObjectId, ref: 'ObjectLikes'}]

});

module.exports = mongoose.model('LookupLikeStatus', LookupLikeStatusSchema);