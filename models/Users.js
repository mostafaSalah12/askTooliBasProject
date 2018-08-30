const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const UserSchema = Schema({

userId:Schema.Types.ObjectId,
userName:{type:String},
email:{type:String},
mobile:{type:String},
firstName:{type:String},
lastName:{type:String},
password:{type:String},
forgotPasswordCode:{type:String},
forgotPasswordCodeLink:{type:String},
forgotPasswordExpiry:{type:Date},
profilePhoto:{type:String},
profileThumbnail:{type: String},
languageId:{type:Number},
userTypeId:{type: Number},
isBlocked:{type:Boolean},
creationDateTime:{type:Date},
lastLoginDateTime:{type:Date},
lastFailedLoginDateTime:{type:Date},
lastLoginIp:{type:String},
faildLoginAttempts:{type:Number}
});



module.exports = mongoose.model('User', UserSchema);