import User from "../models/userModel"
import connectDB from "../connectDB"

export const Register = async (user) => {
  console.log("cont", user)

  connectDB()

  const userExists = await User.findOne({ socialId: user.id })

  if (userExists) return

  //   if (user.password) {
  //     var salt = bcrypt.genSaltSync(10)
  //     var hashPassword = bcrypt.hashSync(user.password, salt)
  //   }

  const registereduser = await User.create({
    socialId: user.id,
    name: user.name,
    email: user.email || "",
    // password: hashPassword || "",
  })
}
