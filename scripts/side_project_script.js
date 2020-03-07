var arrayLength = sideProjectList.length;
var index_project = "";
for (var i = 0; i < arrayLength; i++) {
    var currProject = sideProjectList[i];
        //Do something
        index_project += '<div class="w3-container" style="margin:0 -30px">\
        <div class="w3-container w3-hover-shadow w3-round-large w3-card-5">\
            <div class="w3-row">\
                <div class="w3-quarter">\
                    <div class="w3-card-4 w3-round-medium" style="width: 70%;">\
                        <img style="width:100%" alt="Text Here" src=' +currProject.img+'>\
\
            </div>\
        </div>\
\
        <div class="w3-threequarter">\
            <a href='+ currProject.link + '>\
            <h2 class="w3-xlarge w3-text-dark-grey">' + currProject.title + '<span style="float: right; font-size: 12px;">'+currProject.tags+'</span></h2> </a>'+ "<p>" + currProject.description + "</p>"+'</div> </div> </div> </div> <br>'
}

document.getElementById("index_side_project").innerHTML = index_project;
