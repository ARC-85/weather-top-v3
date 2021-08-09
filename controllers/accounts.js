"use strict";

const userstore = require("../models/user-store");
const logger = require("../utils/logger");
const uuid = require("uuid");

const accounts = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const firstName = loggedInUser.firstName;
    const lastName = loggedInUser.lastName;
    const email = loggedInUser.email;
    const password = loggedInUser.password;
    const viewData = {
      title: "Login or Signup",
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    response.render("profile", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service"
    };
    response.render("login", viewData);
  },

  logout(request, response) {
    response.cookie("stations", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Login to the Service"
    };
    response.render("signup", viewData);
  },

  register(request, response) {
    const user = request.body;
    user.id = uuid.v1();
    userstore.addUser(user);
    logger.info(`registering ${user.email}`);
    response.redirect("/");
  },

  authenticate(request, response) {
    const user = userstore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("stations", user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  getCurrentUser(request) {
    const userEmail = request.cookies.stations;
    return userstore.getUserByEmail(userEmail);
  },
  
  updateFirstName(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newFirstName = {
      firstName: request.body.firstName,
    };
    logger.debug(`Updating First Name ${loggedInUser}`);
    response.redirect("/profile");
  }
};

module.exports = accounts;
