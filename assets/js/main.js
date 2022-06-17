const toggle = document.querySelector('.toggle');
const nav = document.querySelector('nav');
const ul = nav.childNodes[5];
const links = document.querySelectorAll('li');
const logo = document.querySelector('.logo');



links.forEach((link) => {
    link.addEventListener('click', (e) => {

       
        links.forEach(a => {
            a.classList.remove('active')
        });


        e.currentTarget.classList.add('active');
    });
});


// Toggle bar
toggle.addEventListener('click', function(){
    'use strict;'
  
    this.classList.toggle('active-nav');
    nav.classList.toggle('active-nav');
    logo.classList.toggle('active-logo');
});



  // Smoth Scroll
  function goToID(id) {
      document.querySelector(id).scrollIntoView({
          behavior: 'smooth'
      });
  }


  // ScrollUp
  let scrollUp = document.querySelector('.scrollup');
  // Show & Hide TOP button
  window.onscroll = function () {
    'use strict';

    if (window.pageYOffset >= 600) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none'
    }
  }


  // Scroll to 0px from the TOP
  function goToPixel(pix) {
      window.scroll({
        top: pix,
        left: 0,
        behavior: 'smooth'
      });
  }
(function() {
  
  var SkillsBar = function( bars ) {
    this.bars = document.querySelectorAll( bars );
    if( this.bars.length > 0 ) {
      this.init();
    } 
  };
  
  SkillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);
      
      
    },
    select: function( n ) {
      var self = this,
        bar = self.bars[n];
        
        if( bar ) {
          var width = bar.parentNode.dataset.percent;
        
          bar.style.width = width;
          bar.parentNode.classList.add( "complete" ); 
        }
    },
    action: function() {
      var self = this;
      self.index++;
      if( self.index == self.bars.length ) {
        clearTimeout( self.timer );
      } else {
        self.select( self.index );  
      }
      
      setTimeout(function() {
        self.action();
      },500);
    }
  };
  
  window.SkillsBar = SkillsBar;
  
})();

(function() {
  document.addEventListener( "DOMContentLoaded", function() {
    var skills = new SkillsBar( ".skillbar-bar" );
  });
})();
  scrollUp.addEventListener("click", function goToPixel(pix) {
      pix = 0;
      window.scroll({
        top: pix,
        left: 0,
        // top: 0,
        behavior: 'smooth'
      });
    }
  );


    



