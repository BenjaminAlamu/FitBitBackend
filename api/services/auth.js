const passport = require('passport');
const jwt = require('jsonwebtoken');



module.exports = {
  //Login function
  login: function(req, res){
    passport.authenticate('local', (err, user, info) => {
      //Checks if error is found or if user doesnt exist
      if(err || !user){
        return res.send({
          success: false,
          status: 'Error',
          message: info.message,
          user
        });
      }
      var token = jwt.sign(user, 'Secret',(err, token) => {
        if(err){
          return res.send({'success':false, 'info': err.message});
        }
        res.send({
          success: true,
          status: 'Successful',
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          number: user.number,
          email: user.email,
          usertype: user.usertype,
          id: user.id,
          token:token
        });
      });
    })(req, res);
  },

  //Logout function
  logout: function(req, res) {
    console.log('Here');
    req.logout();
    //Should send something back here

    return res.send({
      success: true,
      status: 'Successful',
    });
  },

  //Register function
  register: function(req, res){
    console.log('Create user function');

    data = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.firstname,
      usertype: req.body.usertype,
      gender: req.body.gender,
      lastname: req.body.lastname,
      number: req.body.number,
    };


    User.create(data).exec((err, user) => {
      if(err){
        success = {
          'success': false,
          'status': 'failed',
          'message': err.message
        };
        return res.send(success);
      }else{
        success = {
          'success': true,
          'status': 'Successful',
        };
        console.log('Here');
        return res.send(success);
      }

    });

  },

  view: async (req, res) => {

    console.log(process.env.development);
    //Verify tokens
    // verify.verifyToken(req, res);
    // jwt.verify(req.token, 'Secret', (err, authData) => {
    //   if(err) {
    //     console.log('Inside Error');
    //     console.log('Error');
    //     return res.json({
    //       tokenNotFound: true,
    //       status: 'Error'
    //     });
    //   }
    // });

    var user = await User.find({
      where: {usertype:'User'}
    });
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
    return res.json(user);

  },

};
