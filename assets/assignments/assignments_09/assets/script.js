var current_light_index = 0;
var max_light_count = 6;
var move = "RIGHT"; // RIGHT or LEFT

var myInterval = null;

function updateLightPanel() {
    $(".light").removeClass("light_on");
    $(".light").removeClass("light_on2");


    $(".light").eq(current_light_index).addClass("light_on");

    if(move==="RIGHT") {
        if(current_light_index!==0) $(".light").eq(current_light_index-1).addClass("light_on2");

        ++current_light_index;
        if(current_light_index>max_light_count - 2) {
            move = "LEFT";
        }

    } else {
        $(".light").eq(current_light_index+1).addClass("light_on2");

        --current_light_index;
        if(current_light_index===0) {
            move = "RIGHT";
        }
    }

}

$("#start").on("click", () => {
    myInterval = setInterval(updateLightPanel, 50);
    $("#audio")[0].play();
});

$("#stop").on("click", () => {
    myInterval = clearInterval(myInterval);
    $("#audio")[0].pause();
});
