const Sauce = require("../models/sauce.models");

exports.getAllSauces = (req, res, next) => {
    Sauce.find()
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({ error }))
}
exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({
        _id: req.params.id
    }).then(
        (sauce) => {
            res.status(200).json(sauce);
        }
    ).catch(error => res.status(404).json({ error }))
}
exports.createSauce = (req, res, next) => {
    const sauceObject = JSON.parse(req.body.sauce);

    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        dislikes: 0,
        usersLiked: [],
        usersDisliked: [],
    });

    sauce.save()
        .then(() => { res.status(201).json({ message: "Objet enregistré !" }) })
        .catch(error => { res.status(400).json({ error }) })

}
exports.modifySauce = (req, res, next) => {


}
exports.deleteSauce = (req, res, next) => {


}
exports.likeSauce = (req, res, next) => {

}