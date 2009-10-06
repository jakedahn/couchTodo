$(document).ready(function() {
  $("li").click(function () { 
      if (this.className == 'true') {
        console.log($.post('/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": false}));
        $(this).removeClass('true');
        $(this).addClass('false');
      }
      else {
        console.log($.post('/update', {"_id": this.id,"_rev": this.title,"task":$(this).text(),"done": true}));
        $(this).removeClass('false');
        $(this).addClass('true');
      }
    });
  
  
  
});
