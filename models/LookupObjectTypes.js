const mongoose = require('mongoose');


const LookupObjectTypesSchema = mongoose.Schema({

    objectTypeId : Schema.Types.ObjectId,
    objectType : {type: String},
    viewingsRepetitionDuration:{type:Number},
    objectRatingsSet :[ {type: Schema.Types.ObjectId, ref: 'ObjectRatings'}],
    objectViewingsSet :[ {type: Schema.Types.ObjectId, ref: 'ObjectViewings'}],
    objectLikesSet :[ {type: Schema.Types.ObjectId, ref: 'ObjectLikes'}],
    objectReviewsSet :[ {type: Schema.Types.ObjectId, ref: 'ObjectReviews'}]


});

module.exports = mongoose.model('LookupObjectTypes', LookupObjectTypesSchema);