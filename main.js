var app = angular.module('portfolio', []);

app.controller('PortfolioController', ['$scope', '$location', '$anchorScroll', '$sce', 'anchorSmoothScroll',
  function($scope, $location, $anchorScroll, $sce, anchorSmoothScroll) {
    var portfolio = this;

    portfolio.menuItems = [
      { id: 'home', img_src: './static/icons/home.png' },
      { id: 'code', img_src: './static/icons/code.png' },
      { id: 'art', img_src: './static/icons/art.png' },
      { id: 'video', img_src: './static/icons/video.png' }
    ];

    portfolio.codeImages = [
      { img_src: './static/images/code-liwwa.png',
        href: 'https://www.liwwa.com/investor/portfolio/',
        text: $sce.trustAsHtml(`I designed (using Adobe XD) and implemented (using Flask, 
              Jinja, MariaDB, and Chart.js) a dashboard of visualizations providing 
              the history, risk breakdown, repayment schedule, and other performance indicators of 
              an individual investor's portfolio. You can see my original designs 
              <a href="https://www.behance.net/gallery/61392623/Retail-Investor-Platform" 
              target="_blank"><span>here.</span></a> (Jan 2018)`)
      },
      { img_src: './static/images/code-vizit.png',
        href: 'http://www.vizit.tech/',
        text: $sce.trustAsHtml(`Using MongoDB, ExpressJS, AngularJS, and Node.js, a team of 
              three developers and I created <a href="http://www.vizit.tech/" target="_blank">
              <span>Vizit:</span></a> an educational tool that allows developers to visualize 
              their JavaScript code. Visit our <a href="https://github.com/hannahwood/vizit" 
              target="_blank"><span>github</span></a> and watch our <a href="https://www.youtube.com/watch?v=jl9om8JCdNk" 
              target="_blank"><span>presentation</span>.</a> (April 2016)`)
      },
    ]

    portfolio.artImages = [
      { img_src: './static/images/drawing-selfie.jpg' },
      { img_src: './static/images/drawing-hathaway.jpg' },
      { img_src: './static/images/painting-alien.jpg' },
      { img_src: './static/images/drawing-matt.jpg' },
      { img_src: './static/images/painting-self.jpg' },
      { img_src: './static/images/painting-bald.jpg' },
      { img_src: './static/images/drawing-thile.jpg' },
      { img_src: './static/images/painting-matt.jpg' },
      { img_src: './static/images/drawing-couple.jpg' },
      { img_src: './static/images/drawing-man.jpg' },
    ];

    portfolio.videoImages = [
      { img_src: './static/images/video-app-inventor.png',
        text: $sce.trustAsHtml(`I scripted, shot, and edited this promotional video for \
              <a href='https://www.youtube.com/watch?v=sNjGAiOrX-o' target='_blank '> \
              <span>MIT App Inventor</span></a>, a blocks-based programming tool for kids.`) },
      { img_src: './static/images/video-nonstem.png',
        text: $sce.trustAsHtml(`<a href="https://www.youtube.com/watch?v=5aj6vSKq4Eo " target="_blank ">
              <span>Life of Non-STEM Majors at MIT</span></a> is a piece I created to 
              highlight some of the school's few students in the less popular departments.`) },
      { img_src: './static/images/video-bikeyard.png',
        text: $sce.trustAsHtml(`While working for Codeword, I created <a href="https://www.youtube.com/watch?v=XolD6TV27Kk "
              target="_blank "><span>Bikeyard</span></a> to promote a local mobile bike cooperative.`) },
    ]

    portfolio.contactInfo = [
      { label: 'Resume', href: './static/resume-hannah-wood-2-18.pdf' },
      { label: 'Github', href: 'https://github.com/hannahwood' },
      { label: 'Linkedin', href: 'https://www.linkedin.com/in/hannahkowood' },
      { label: 'Instagram', href: 'https://www.instagram.com/hanna.hwood/' },
      { label: 'Behance', href: 'https://www.behance.net/hannahkowood' },
    ]

    $scope.gotoElement = function(eID) {
      console.log(eID)
      anchorSmoothScroll.scrollTo(eID);

    };
  }
]);



app.service('anchorSmoothScroll', function() {
  this.scrollTo = function(eID) {
    // This scrolling function 
    // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY);
      return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for (var i = startY; i < stopY; i += step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY += step;
        if (leapY > stopY) leapY = stopY;
        timer++;
      }
      return;
    }
    for (var i = startY; i > stopY; i -= step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY -= step;
      if (leapY < stopY) leapY = stopY;
      timer++;
    }

    function currentYPosition() {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) return self.pageYOffset;
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) return document.body.scrollTop;
      return 0;
    }

    function elmYPosition(eID) {
      var elm = document.getElementById(eID);
      var y = elm.offsetTop;
      var node = elm;
      while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }
      return y;
    }
  };
});
