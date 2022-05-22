$(document).ready(function(){
    let hiddenRow=$(".expandale");
    $(".expand-btn").click(function(){ 
        hiddenRow.toggleClass("hidden");
        if(hiddenRow.is(":visible")){
            $("expend-btn").html("Уменьшить")
        }
  });
 });// on 'click'
 $(".play-button").click(function() {
     $(".modal-canvas").toggleClass("hidden");
 });
 $(".modal-clos").click(function() {
     $(".modal-canvas").toggleClass("hidden");
});   
