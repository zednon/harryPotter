
// function addButtons (){
//     $("#buttonCon").empty()
//     for (var i = 0; i<buttonsBank.length; i++ ) {
//         var newButton = $("<button>")
//         newButton.text(buttonsBank[i])
//         newButton.addClass("btn").addClass("btn btn-outline-success")
//         newButton.attr("info" , buttonsBank[i]) 
//         $("#buttonCon").append(newButton)
 

// console.log(worksbutton)    }
// }

// addButtons()



// $("#searchthing").on("submit" , function(event){
//     event.preventDefault()
//     var buttonText = $("#buttonText").val()
//     buttonsBank.push(buttonText) 
//    $("#searchthing")[0].reset()
//     addButtons()
// }) 


$(document).on( "click" , "#upcoming " , function() {
    // var info = $(this).attr("info")


    var queryURL ="https://api.meetup.com/2/events?key=711b1c41327ea3e2f1d2044b454361&sign=true&photo-host=public&group_urlname=TGTSNBN&page=1" ;
  var key = "711b1c41327ea3e2f1d2044b454361"


$.ajax({
        url: queryURL,
        method: "GET"
      })

        .then(function(response) {
          let info = results.description.next;
          let webSite = resules.event_url;
          let meetNext = $("<p>");
          let Website = $("<a>")
          meetNext.attr("src", info);
          Website.attr("src", webSite);
          // catImage.attr("alt", "cat image");
          $("#EventUpComing").empty()
          $("#EventUpComing").prepend(meetNext);
          $("#web").empty()
          $("#web").prepend(Website);
        });
    });
   