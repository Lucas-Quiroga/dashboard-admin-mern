const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/User");
const bcrypt = require("bcrypt");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      console.log("hola soy el " + user);
      if (!user) {
        return done(null, false, {
          message: "Usuario no encontrado en la base de datos.",
        });
      }

      const passwordMatch = await user.comparePassword(password);
      if (passwordMatch) {
        return done(null, user);
      } else {
        return done(null, false, {
          message: "Contraseña incorrecta",
        });
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
//-----------------------------//

// const passport = require("passport");

// const bcrypt = require("bcrypt");

// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;
// const cors = require("cors");

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: "probandoAleatoriamente",
// };

// app.use(cors());

// passport.use(
//   new LocalStrategy(
//     { usernameField: "email" },
//     async (email, password, done) => {
//       try {
//         const user = await User.findOne({ email });
//         if (!user) {
//           return done(null, false, { message: "Usuario no encontrado" });
//         }
//         const isMatch = await user.isValidPassword(password);
//         if (!isMatch) {
//           return done(null, false, { message: "Contraseña incorrecta" });
//         }
//         return done(null, user);
//       } catch (error) {
//         return done(error);
//       }
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error);
//   }
// });

// passport.use(
//   new JwtStrategy(jwtOptions, async (payload, done) => {
//     try {
//       const user = await User.findById(payload.sub);
//       if (user) {
//         return done(null, user);
//       } else {
//         return done(null, false);
//       }
//     } catch (error) {
//       return done(error, false);
//     }
//   })
// );
