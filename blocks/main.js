var app = angular.module('blocks', []);

app.controller('BlocksController', ['$scope', '$location', '$anchorScroll',
  function($scope, $location, $anchorScroll) {
    var myElement = document.getElementById('blocks-canvas');
    var canvas = angular.element(document.querySelector('#blocks-canvas'))[0];
    // console.log(canvas);

    let ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(20, 100, 0)';
    ctx.fillRect(0, 0, 100, 100);
  }

]);

// https://stackoverflow.com/questions/18555429/how-to-create-simple-drag-and-drop-in-angularjs