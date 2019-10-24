
function moveToSelected(element) {

    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev") {
      var selected = $(".selected").prev();
    } else {
      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    $(selected).removeClass().addClass("selected");
  
    $(prev).removeClass().addClass("prev");
    $(next).removeClass().addClass("next");
  
    $(nextSecond).removeClass().addClass("nextRightSecond");
    $(prevSecond).removeClass().addClass("prevLeftSecond");
  
    $(nextSecond).nextAll().removeClass().addClass('hideRight');
    $(prevSecond).prevAll().removeClass().addClass('hideLeft');
  }


  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: 
          moveToSelected('prev');
          break;
  
          case 39:
          moveToSelected('next');
          loadPlayer(1);
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
  $('#carousel div').click(function(event) {
   if(this.className === 'next'){
    console.log(this.className);
     loadPlayer(1);
   }else if (this.className === 'prev'){
     console.log(this.className);
    loadPlayer(-1);
   } else if(this.className === 'nextRightSecond'){
    console.log(this.className);
     loadPlayer(2);
   } else if(this.className ==='prevLeftSecond'){
     loadPlayer(-2);
   }
    moveToSelected($(this));
  });
  
  // $(document).on('click','.next',function(){
  //   console.log('test');
  // })
  $('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    // loadPlayer();

    moveToSelected('next');
    
  });
  