$(document).ready(function() {
  $("li").click(function () { 
      if (this.className == 'true') {
        $.post('/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": false},
          function(data){
            var todoId = JSON.parse(data).id;
            var todoRev = JSON.parse(data).rev;
            $("li#" + todoId).removeAttr("title").attr({title:todoRev});
          });
        $(this).removeClass('true');
        $(this).addClass('false');
      }
      else {$.post('/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": true},
        function(data){
          var todoId = JSON.parse(data).id;
          var todoRev = JSON.parse(data).rev;
          $("li#" + todoId).removeAttr("title").attr({title:todoRev});
        });
        $(this).removeClass('false');
        $(this).addClass('true');
      }
    });
    
    var postValues = $('#create').serializeArray();
    
    $('#create').ajaxForm(function() { 
        $.post('/create', postValues,
          function(data){
            var todoId = JSON.parse(data).id;
            var todoRev = JSON.parse(data).rev;
            var todo = postValues;
            
            console.log(data);
            $("ol#list").append($("<li></li>").attr({id:todoId,class:false,title:todoRev}).text("todo"));
            /*
              TODO Get this to post text of task - cant figure out how to grab it
            */
          });
    });
    
    
    

    
});
