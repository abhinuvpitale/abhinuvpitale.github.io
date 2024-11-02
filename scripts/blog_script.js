

var arrayLength = blogList.length;
var index_blog = "";
for (var i = 0; i < arrayLength; i++) {
    var currBlog = blogList[i];
    if (currBlog.first == 1) {
        //Do something
        index_blog += '<div class="w3-container" style="margin:0 -30px">' +
            '<div class="w3-container w3-hover-shadow w3-round-large w3-card-5">' +
            ' <a href=' + currBlog.link + '>' +
            '<h2 class="w3-xlarge w3-text-dark-grey">' + currBlog.title + '<span style="float: right; font-size: 12px;">' + currBlog.date + '</span></h2> </a>' +
            '<p>' + currBlog.description + '.</p>  </div>  </div>'
    }
}

document.getElementById("index_blog").innerHTML = index_blog;
