let home_opt_yes = document.getElementById("home_opt_yes");

let home_opt_no = document.getElementById("home_opt_no");

let brother_opt_yes = document.getElementById("brother_opt_yes");

let brother_opt_no = document.getElementById("brother_opt_no");

let follow_opt_yes = document.getElementById("follow_opt_yes");

let follow_opt_no = document.getElementById("follow_opt_no");

if(home_opt_yes != null) {
    home_opt_yes.addEventListener("click", function(){
       set_home(0);
    });
}

if(home_opt_no != null) {
    home_opt_no.addEventListener("click", function(){
       set_home(1);
    });
}

if(brother_opt_yes != null) {
    brother_opt_yes.addEventListener("click", function(){
       set_brother(0);
    });
}

if(brother_opt_no != null) {
    brother_opt_no.addEventListener("click", function(){
       set_brother(1);
    });
}

if(follow_opt_yes != null) {
    follow_opt_yes.addEventListener("click", function(){
       set_follow(0);
    });
}

if(follow_opt_no != null) {
    follow_opt_no.addEventListener("click", function(){
       set_follow(1);
    });
}

function set_home(homeinput) {
    if(homeinput == 0) {
        sessionStorage.setItem("gohome", "yes");
        window.location.href = 'story4.html';

    } else if(homeinput == 1) {
        sessionStorage.setItem("gohome", "no");
        window.location.href = 'story4.html';
    }
}

function set_brother(brotherinput) {
    if(brotherinput == 0) {
        sessionStorage.setItem("callbrother", "yes");
        window.location.href = 'story6.html';

    } else if(brotherinput == 1) {
        sessionStorage.setItem("callbrother", "no");
        window.location.href = 'story6.html';
    }
}

function set_follow(followinput) {
    if(followinput == 0) {
        sessionStorage.setItem("followparents", "yes");

    } else if(followinput == 1) {
        sessionStorage.setItem("followparents", "no");
    }
    
    let temp_gohome = sessionStorage.getItem("gohome");
    
    let temp_callbrother = sessionStorage.getItem("callbrother");
    
    let temp_followparents = sessionStorage.getItem("followparents");
    
    let route_1 = 0;
    let route_2 = 0;
    
    console.log(temp_gohome + "," + temp_callbrother + "," + temp_followparents);
    
    if(temp_gohome == "yes") {
        route_1++;
    } else if(temp_gohome == "no") {
        route_2++;
    }
    
    if(temp_callbrother == "yes") {
        route_1++;
    } else if(temp_callbrother == "no") {
        route_2++;
    }
    
    if(temp_followparents == "yes") {
        route_1++;
    } else if(temp_followparents == "no") {
        route_2++;
    }
    
    console.log("Route 1: " + route_1);
    console.log("Route 2: " + route_2);
    
    if(route_1 > route_2) {
        window.location.href = 'route1/index.html';
    } else {
         window.location.href = 'route2/index.html';
    }
}