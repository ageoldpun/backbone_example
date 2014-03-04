$(function () {

  var Workspace = Backbone.Router.extend({

    routes: {
      "blue": "makeDivBlue",
      "green": "makeDivGreen",
      "gray": "makeDivGray"
    },

    makeDivBlue: function () {
      $('.color').css({'background-color': 'blue'});
    },

    makeDivGreen: function () {
      $('.color').css({'background-color': 'green'});
    },

    makeDivGray: function () {
      $('.color').css({'background-color': 'gray'});
    }
  });

var workspace = new Workspace();

Backbone.history.start();

});
