const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const { User } = require("../models/index");

passport.use(
  new FacebookStrategy(
    {
      clientID: "1443956939317586",
      clientSecret: "3961e77f5c523211e2a501e979a44729",
      callbackURL: "/users/loginFacebook",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      return done(null, profile);
      //   User.findOrCreate({
      //     where: {
      //       email: profile.email[0].value,
      //     },
      //   })
      //     .then((user) => done(null, user))
      //     .catch(done);
    }
  )
);
