$(document).ready(function() {
  $("li").click(function () { 
      if (this.className == 'true') {
        $.post(
          '/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": false},
          function(data){
            var todoId = JSON.parse(data).id;
            var todoRev = JSON.parse(data).rev
            $("li#" + todoId).removeAttr("title").attr({title:todoRev});
          });
        $(this).removeClass('true');
        $(this).addClass('false');
      }
      else {
        $.post('/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": true},
        function(data){
          var todoId = JSON.parse(data).id;
          var todoRev = JSON.parse(data).rev
          $("li#" + todoId).removeAttr("title").attr({title:todoRev});
        });
        $(this).removeClass('false');
        $(this).addClass('true');
      }
    });
  
  /*
    TODO figure out how to pull new _rev to allow multiple state changes
  */
  
  
});
