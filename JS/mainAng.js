var angularApp = angular.module("angularApp", ["ngAnimate", "ngRoute"]);

angularApp.config(function ($routeProvider) {

});

angularApp.run(function () {

});

angularApp.controller("mainCtrl", function ($scope, $http) {
  $scope.skills = [
    {
      name: "HTML5",
      persent: "100%"
    }, {
      name: "CSS3",
      persent: "90%"
    }, {
      name: "Javascript",
      persent: "70%"
    }, {
      name: "Jquery",
      persent: "90%"
    }, {
      name: "AngularJs",
      persent: "80%"
    }, {
      name: "Bootstrap 4",
      persent: "90%"
    }, {
      name: "SASS",
      persent: "80%"
    }, {
      name: "PhotoShop",
      persent: "70%"
    }
  ];

  $scope.languages = [
    {
      color: "success",
      name: "Arabic",
      persent: "100%"
    }, {
      color: "warning",
      name: "English",
      persent: "80%"
    }, {
      color: "danger",
      name: "Germen",
      persent: "20%"
    }
  ];

  $scope.social = [
    {
      id: "envelope",
      cla: "fas fa-envelope",
      cont: "shehab.nagy1998@gmail.com"
    }, {
      id: "whatsapp",
      cla: "fab fa-whatsapp",
      cont: "+201064264908"
    }, {
      id: "facebook",
      cla: "fab fa-facebook",
      cont: "fb/shehabnagy1998"
    }, {
      id: "linkedin",
      cla: "fab fa-linkedin",
      cont: "in/shehabnagy1998"
    }
  ];

});
