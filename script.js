$("button").click(function() {
    var sex = $(".sex").val().toLowerCase();
    var nationality= $(".nationality").val().toLowerCase();
    
    if(sex === "boy" && nationality==="american"){
        $(".results").text("You are Troy!");
        $("img").attr("src","https://thumbs.gfycat.com/EnviousCleanImperatorangel-small.gif");
    }
    else if(sex=== "boy" && nationality==="mexican"){
         $(".results").text("You are Chad!");
          $("img").attr("src","https://66.media.tumblr.com/206be5371744b1c61ea3148af7f9a4a9/tumblr_nk8j5d6n2X1uo79w1o2_r3_250.gif");
    }
    else if(sex=== "girl" && nationality==="american"){
         $(".results").text("You are Sharpay!");
           $("img").attr("src","https://media0.giphy.com/media/lbzZ8GBUYubbq/giphy.gif");
        
    }    
    else if(sex=== "girl" && nationality==="mexican"){
         $(".results").text("You are Gabriela!");
            $("img").attr("src","https://data.whicdn.com/images/251833811/original.gif");
        
    }
    else {
        $(".results").text( "There is No Highschool Musical Character for you");
        $("img").attr("src","https://thumbs.gfycat.com/FemaleUnevenAfricanwilddog-small.gif");
        
    }
});

