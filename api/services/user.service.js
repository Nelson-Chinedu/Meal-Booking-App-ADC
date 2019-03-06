import models from '../models';

const userService = {
  signup(user) {
    return models.user.create(user).then(newUser => newUser);
  },
  login(user) {
    return models.user.findOne({
      where: {
        email_address: user.username,
        password: user.password,
      },
    })
      .then(loggedUser => loggedUser);
  },
};

export default userService;
