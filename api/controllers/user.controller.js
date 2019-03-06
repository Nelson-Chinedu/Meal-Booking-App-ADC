import userService from '../services/user.service';

const userController = {
  async signup(req, res) {
    const newUser = req.body;
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!newUser.firstname || !newUser.lastname || !newUser.email_address || !newUser.password) {
      return res.status(400).json({
        message: 'input values are required',
        error: true,
      });
    }
    if (!regEx.test(newUser.email_address)) {
      return res.status(400).json({
        message: 'invalid email address',
        error: true,
      });
    }
    const userSignUp = await userService.signup(newUser);
    return res.status(200).json({
      data: userSignUp,
      message: 'success',
      error: false,
    });
  },

  async login(req, res) {
    const user = req.body;
    // console.log(user)
    if (!user.username || !user.password) {
      return res.status(400).json({
        message: 'username and password is required',
        error: true,
      });
    }
    const loggedUser = await userService.login(user);

    if (!loggedUser) {
      return res.status(400).json({
        message: 'wrong username or password',
        error: true,
      });
    }
    return res.status(200).json({
      message: 'Logged in successfully',
      error: false,
    });
  },
};


export default userController;
