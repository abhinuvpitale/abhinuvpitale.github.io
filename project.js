const projectList = [   
    {
        title: "Cora/ Wisk Aero",
        date: "Jul 2019 - Present",
        position: "Software Engineer - Embedded Systems",
        description: "Sensors, flight systems and writing embedded code that flies!",
        link:"wisk.aero",
        tags:"embedded, aviation, sensors, safety",
        first: 1
    },
    {
        title: "Kitty Hawk Corporation",
        date: "Aug 2018 - Nov 2018",
        project: "Software and Controls Group - Intern",
        description: "Flying taxis. Yeah! I am equally amazed! Check them out <a href='https://kittyhawk.aero'>here</a>. \
<br> \
        My work involves sensor integration and testing (and also designing tests, performing Data Analysis) to meet aviation requirements. I work on a novel aviation sensor solution and making sure it works the way we expect it to! \
        My mentor usually throws a new piece of hardware on me, for testing/bringup and interfacing with aviation hardware (basically the code I write is flying high!).\
    ",
        link:"wisk.aero",
        tags:"embedded, aviation, sensors",
        first: 1
    }, 
    {
        title: "DeepSig Inc",
        date: "May 2018 - August 2018",
        position: "Machine Learning Intern",
        description: "I am working on interfacing the software suite of the company with different OpenSource tools for improving the signal processing and the machine learning workflow.<br> I am also working on the developement of the OmniPhy product, which is an optimised wireless channel encoder-decoder (PS. Think 6G comms).",
        link:"deepsig.io",
        tags:"machinelearning, opensource",
        first: 0
    },
    {
        title: "Neural Dynamics Lab, Virginia Tech",
        date: "Nov 2017 - May 2018",
        position: "Graduate Student Researcher",
        description: "I am working on developing a deep neural network for modelling the brain activity. Currently we are experimenting with different architechtures such as LSTM+RNN, Spectograms as Images and also traditional ConvNets. </p> \
        <p>I am also working on interfacing a BMI(Brain Machine Interface) using EEG and ECoG data to study the effects of sleep. I am also building different classifiers for complex BMI tasks. (Mind control. Works. Mostly.)",
        link:"http://www.vijayan.neuroscience.vt.edu/",
        tags:"neuroscience ,machinelearing",
        first: 1
    },
    {
        title: "Mercedes Benz Research and Developement, India",
        date: "Aug 2016 - Jul 2017",
        position: "Sofware Engineer",
        description: " <p>I was initially working on a navigation problem for autonomous driving in various traffic scenarios. </p> \
        <p>Later, I joined the Daimler Trucks Powertrain Diagnostics Team where I was working on ECU measurement, calibration for the Euro IV,VI and the NAFTA market. I also worked on Test Automation for Diagnostics Testing to reduce time spent in Freeze Frame Testing and ISO27145 Protocol conformance Testing. </p>",
        link: "https://mbrdi.co.in/",
        tags:"embedded, automotive, safety",
        first: 0
    },
    {
        title: "Ishnatek Systems",
        date: "Jun 2018 - Aug 2016",
        position: "Android Developer",
        description: "<p>I was reponsible for building and integrating data capture libraries for images, videos, QR codes and text inputs for managing health records for pets. The interface designed was aimed to user-friendly and interactive. I also worked on designing the SQLite database to manage and store the records. </p>",
        link:"notFound.html",
        tags:"android",
        first: 0
    },
    {
        title: "Defense Research and Developement, India",
        date: "Jun 2015- May 2016",
        position: "Embedded System Developement Intern",
        description: "<p>I worked on the challenge of simultaneous localization and mapping for an autonomous agent whose only sensor input was an Inertial Motion Unit. The project enhanced the reliablility and accuracy of a single sensor system and overcame the partial drawbacks of using accelerometers in an Inertial Navigation System.  </p>",
        link:"notFound.html",
        tags:"embedded, controls",
        first: 0
    },
    {
        title: "San Telequip Pvt. Ltd., Pune",
        date: "Jun 2014 - Nov 2014",
        position: "IOT product design intern",
        description: "<p>My team worked on designing a wireless video doorbell service for accessible and portable use. I worked on Python based client-server interaction for a storing and managing the video stream data based on the doorbell input. The accessiblity was increased by developement of a Web App and an Android App. </p>",
        link:"notFound.html",
        tags:"embedded",
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
