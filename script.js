// event timestamp
$(document).ready(function(){
    $("button").on("click",function(event){
        $("span").text(event.timeStamp);
    })
})

// event type
$(document).ready(function(){
    $("div").on("click dblclick mouseover mouseout",function(event){
        $("#eventtype").text("Event:"+event.type);
    })
})

// event which 
$(document).ready(function(){
    $("input").on("keydown",function(event){
        $("#eventwhich").text(event.which);
    })
})