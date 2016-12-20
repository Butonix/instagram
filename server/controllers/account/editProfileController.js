const User = require('../../models/User');

module.exports = {
    getUser: function(req, res, next){
        User.findOne({username: req.params.username}, (err, user) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json(user);
        })
    },
    postUser: function(req, res, next){
      User.findByIdAndUpdate(req.body._id, req.body, (err, updatedUser) => {
        console.log("Error: ", err)
        console.log(updatedUser);
      } )
    }
}
