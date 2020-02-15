

var arrayLength = projectList.length;
var index_project = "";
for (var i = 0; i < arrayLength; i++) {
    var currProject = projectList[i];
        //Do something
        index_project += '<div class="w3-container" style="margin:0 -30px">' +
            '<div class="w3-container w3-hover-shadow w3-round-large w3-card-5">' +
            ' <a href='+currProject.link+'>'+
            '<h2 class="w3-xlarge w3-text-dark-grey">' + currProject.title + '<span style="float: right; font-size: 12px;">'+currProject.date+'</span></h2> </a>'+ "<p class='w3-opacity'>" + currProject.position + "</p>" + 
            '<p>'+currProject.description+'.</p>  </div>  </div>'
}

document.getElementById("index_project").innerHTML = index_project;
