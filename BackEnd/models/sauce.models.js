const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
    name: { type: String, require: true },
    manufacturer: { type: String, require: true },
    description: { type: String, require: true },
    mainPepper: { type: String, require: true },
    imageUrl: { type: String, require: true },
    heat: {
        type: Number,
        require: true,
        validate: {
            validator: function (value) {
                return value >= 1 && value <= 10;
            },
            message: 'Le champs "heat doit être compris entre 1 et 10.'
        }
    },
    likes: { type: Number },
    dislikes: { type: Number },
    usersLiked: { type: [String], default: [] },
    usersDisliked: { type: [String], default: [] },
})

module.exports = mongoose.model('Sauce', sauceSchema);