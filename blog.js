const blogList = [   
    {
        title: "Totally Do-able things to get an internship/job",
        date: "March 2019",
        description: "Tips and Tricks that will help you stand out when applying for a job.",
        link:"https://medium.com/@abhinuv/totally-do-able-things-to-get-that-internship-job-31ccb2e04bab",
        tags:"career",
        first: 1
    },
    {
        title: "The Silicon Valley Internship",
        date: "August 2019",
        description: "My experience of working at a Bay area startup making flying taxis!",
        link:"https://medium.com/@abhinuv/the-silicon-valley-startup-internship-290f6ad4170a",
        tags:"career",
        first: 1
    }, 
    {
        title: "Adafruit Blog Feature",
        date: "Feb 2019",
        description: "My project got featured on the adafruit blog. The DIY Maker in me is freaking out! :D ",
        link:"https://blog.adafruit.com/2019/02/15/display-quotes-from-goodreads-with-a-raspberry-pi-zero-and-adafruit-oled-bonnet-piday-raspberrypi-adafruit-bonnet-iot-oled-adafruit-raspberry_pi/",
        tags:"raspberrypi,embedded",
        first: 0
    },
    {
        title: "Habit Pi",
        date: "Feb 2019",
        description: "HabitPi - Daily Habit Tracker I made using Raspberry Pi. The blog describes the thought behind the idea and its inspiration.",
        link:"https://medium.com/@abhinuv/diy-personal-yearly-goal-tracker-963afeae9523/",
        tags:"raspberrypi,embedded",
        first: 1
    },
    {
        title: "The Startup Internship - DeepSig",
        date: "Jan 2019",
        description: "My experience of working at a early phase startup!(6th person on team)",
        link: "https://medium.com/@abhinuv/the-startup-internship-deepsig-inc-10cd4ec1e5b7",
        tags:"career,internship",
        first: 0
    },
    {
        title: "ECE Spring @ Virginia Tech - Course Review",
        date: "Dec 2018",
        description: "My review of the courses I took for Spring 2018 at Virginia Tech.",
        link:"https://medium.com/@abhinuv/grad-coursework-spring-ece-virginia-tech-67a79e44c8af",
        tags:"career,courses,VT",
        first: 0
    },
    {
        title: "ECE Fall @ Virginia Tech - Course Review",
        date: "June 2018",
        description: "My review of the courses I took for Fall 2017 at Virginia Tech. I hope it helps the incoming graduate students decide.",
        link:"https://medium.com/@abhinuv/grad-coursework-ece-virginia-tech-92e455001d8f",
        tags:"career,courses,VT",
        first: 0
    },
    {
        title: "Ping pong using the brain machine interface",
        date: "April 2018",
        description: "Video of a cool practical experiment <a href='https://naresh1318.github.io/'>Naresh</a> and I designed for undergrads at the department of the neuroscience.",
        link:"https://youtu.be/8MTx9RZ8qao",
        tags:"research,VT",
        first: 0
    },
    {
        title: "Working on campus: one grad’s D2 experience",
        date: "April 2018",
        description: "My experience of working at a Dining Center at my university.",
        link:"https://experience.vt.edu/2017/Working_on_campus_one_grads_D2_experience.html",
        tags:"VT",
        first: 0
    },
    {
        title: "History of Wearable and Ubiquitous Computing",
        date: "March 2018",
        description: "Describing Mark Weiser's view of computing that disappears into the fabri of everyday life.",
        link:"https://medium.com/@abhinuv/history-of-wearable-and-ubiquitous-computing-ba7f5f87fb4",
        tags:"VT,embedded",
        first: 0
    },
    {
        title: "History and Challenges of Wearable Computing",
        date: "January 2018",
        description: "Interesting and Innovative ideas as presented in research papers from the 1990s. The article also discusses Project Aura, Thad Starner(the man who made AR cool) and a side note about a famous mathematician's wearable device made to cheat at gambling.",
        link:"https://medium.com/@abhinuv/history-and-challenges-of-wearable-computing-4541d63c66a8",
        tags:"VT,embedded",
        first: 0
    }
]

/*
var arrayLength = blogList.length;
var unit_blog = "";
for (var i = 0; i < arrayLength; i++) {
    var currBlog = blogList[i];
    //Do something
    unit_blog += '<div class="w3-container" style="margin:0 -30px">' +
        '<div class="w3-container w3-hover-shadow w3-round-large w3-card-5">' +
        ' <a href='+currBlog.link+'>'+
        '<h2 class="w3-xlarge w3-text-dark-grey">' + currBlog.title + '<span style="float: right; font-size: 12px;">'+currBlog.date+'</span></h2> </a>'+
        '<p>'+currBlog.description+'.</p>  </div>  </div>'
}

document.getElementById("parent_blog").innerHTML = unit_blog;


var index_blog = "";
for (var i = 0; i < arrayLength; i++) {
    var currBlog = blogList[i];
    if(currBlog.first == "yes")
    {
        //Do something
        index_blog += '<div class="w3-container" style="margin:0 -30px">' +
            '<div class="w3-container w3-hover-shadow w3-round-large w3-card-5">' +
            ' <a href='+currBlog.link+'>'+
            '<h2 class="w3-xlarge w3-text-dark-grey">' + currBlog.title + '<span style="float: right; font-size: 12px;">'+currBlog.date+'</span></h2> </a>'+
            '<p>'+currBlog.description+'.</p>  </div>  </div>'
    }
}

document.getElementById("index_blog").innerHTML = index_blog;
*/
