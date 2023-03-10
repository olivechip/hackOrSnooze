"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(e) {
  console.debug("navAllStories", e);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show story submit form on clicking story "submit" */

function navSubmitStoryClick(e) {
  console.debug("navSubmitStoryClick", e);
  hidePageComponents();
  putStoriesOnPage();
  $allStoriesList.show();
  $submitForm.show();
}

$navSubmitStory.on("click", navSubmitStoryClick);

/** Show favorite stories on click on "favorites" */

function navFavoritesClick(e) {
  console.debug("navFavoritesClick", e);
  hidePageComponents();
  putFavoritesListOnPage();
}

$body.on("click", "#nav-favorites", navFavoritesClick);

/** Show My Stories on clicking "my stories" */

function navMyStories(e) {
  console.debug("navMyStories", e);
  hidePageComponents();
  putUserStoriesOnPage();
  $ownStories.show();
}

$body.on("click", "#nav-my-stories", navMyStories);

/** Show login/signup on click on "login" */

function navLoginClick(e) {
  console.debug("navLoginClick", e);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** Hide everything but profile on click on "profile" */

function navProfileClick(e) {
  console.debug("navProfileClick", e);
  hidePageComponents();
  $userProfile.show();
}

$navUserProfile.on("click", navProfileClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".nav-left").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

