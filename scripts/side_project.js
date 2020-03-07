const sideProjectList = [   
    {
        title: "HoldOn - Cloud connected, remote prosthetics!",
        img: "./images/holdOn.gif",
        description: "Unique interaction media, helping you stay in touch with your loved ones. Ping me if you're interested in working on this!",
        link:"https://productholdon.wixsite.com/holdon",
        tags:"embedded, cloud, product design",
        first: 1
    },
    {
        title: "HabitPi - Friendly Habit Tracker using RasPi",
        img: "./images/habitPi.gif",
        description: "Inspired by Simone Giertz <a href = 'https://www.kickstarter.com/projects/simonegiertz/the-every-day-calendar'>Yearly Calender</a>, I created a DIY habit tracker using a raspberry pi. It encourages and enables me to keep a track of my weekly progress of any two habits.Blog post for the same <a href=https://medium.com/@abhinuv/diy-personal-yearly-goal-tracker-963afeae9523>here",
        link:"https://github.com/abhinuvpitale/habitPi",
        tags:"embedded, raspberry-pi, DIY",
        first: 1
    }, 
    {
        title: "Pathfinder - Minimalistic Bicycle Navigation",
        img: "./images/PathFinder.gif",
        description: "A Minimalisitic Navigation system designed and implemented for bicyclists. It provides direction and distance to the next turn using a intuitive LED interface. Modular. Cheap. Simple. Looking for investors....",
        link:"./other/PathFinder.pptx",
        tags:"embedded, DIY",
        first: 0
    },
    {
        title: "AR Simulation of Schziophrenia",
        img: "./images/AR.gif",
        description: "AR Simulation was induce the visual and auditory hallucinations caused by Schziophrenia. The experiment was aimed at educating the general masses about the disease to reduce the stigma associated with the same.<br><br> Find a link to the experiment <a href=./other/schzio.pptx>here</a>",
        link:"./other/schzio.pptx",
        tags:"AR, design",
        first: 1
    },
    {
        title: "Two Player Pong - using EEG",
        img: "./images/pong.gif",
        description: "Play a game of pong using the beta rhythm from the brain activity using various EEG headsets. The Foce is strong within this one!",
        link: "https://www.youtube.com/watch?v=8MTx9RZ8qao",
        tags:"neuroscience, machine-learning",
        first: 0
    },
    {
        title: "FingerSpeller - Gesture Recognition for American Sign Language",
        img: "./images/fingerspeller.gif",
        description: "Using histogram of oriented gradients feature along with a SVM classifier, we trained a model for gesture recognition for Finger Spelling. A predicited word output was also given using the letters predicted from this model to increase letter coverage and accuracy for real time video camera input. A Deep Learning model was also trained to perform the same task to compare the two models.",
        link:"https://github.com/abhinuvpitale/ASL-Gesture-Recognition",
        tags:"computer-vision",
        first: 0
    },
    {
        title: "Thug this life!",
        img: "./images/mka.gif",
        description: "Generate a thug lyf image from your existing images using MATLAB. Uses the MATLAB face and eye detector to add the thug lyf shades on the face because why not!",
        link:"https://github.com/abhinuvpitale/Computer-Vision-Fun-Stuff/tree/master/Thug-Life-Generator",
        tags:"computer-vision",
        first: 0
    },
    {
        title: "Cyber Security Data Analytics",
        img: "./images/da.JPG",
        description: "We were given admin logs(~20GB) from various machines from a company. We had to find evidence of malware and keylogging attacks. I also worked on predicting employee resignations and model suspicious activity using various analytical models. ",
        link:"notFound.html",
        tags:"machine-learning, data-analytics",
        first: 0
    },
    {
        title: "Data Driven Astronomy",
        img: "./images/datadriven.jpg",
        description: "<p>Implemented a k-d tree classifer to cross match galaxies from the SuperCOSMOS dataset to the ATG20 BSS catalog. Also, built CART trees from the SDSS dataset and used ensemble learning to classify galaxies according to the Hubble Classification Chart.   </p><sub> Image Credit : Sloan Digital Sky Survey </sub>",
        link:"https://github.com/abhinuvpitale/Data-Analytics",
        tags:"astronomy, data-analytics",
        first: 0
    },
    {
        title: "Spiders AKA Parsers!",
        img: "./images/raspitrello.gif",
        description: ">Some useful/fun web spiders and scrappers that contains scripts used to index, learn from and explore various web sites and content. </p> \
        <a href='https://github.com/abhinuvpitale/Trello-Raspberry-Pi-Zero-API'>Trello Integration</a> - Made an on-desk gadget to keep of your to-dos!<br> \
        <a href='https://github.com/abhinuvpitale/goodreads-quotes-raspberry-pi.git'>Quotes on a Pi</a> - Giftable, Configurable random/not-so-random quotes displayed on a Pi with a Bonnet",
        link:"https://github.com/abhinuvpitale/Spiders",
        tags:"embedded, data-analytics, parser",
        first: 0
    },
    {
        title: "Driverless Model Car - The Freescale Cup 2015",
        img: "./images/freescale.jpg",
        description: "\
        <sub>Placed 4<sup>th</sup> among 247 teams.(National Event)</sub> \
        <p>Implemented PID controller on FRDM KL25Z µC for steering a model car across turns, u-turns, bends and bumps </p>",
        link:"https://www.youtube.com/watch?v=w8RwnziFFfY",
        tags:"roboticss",
        first: 0
    },
    {
        title: "Robocon 2014",
        img: "./images/robocon.gif",
        description: "\
        <sub>Placed 3<sup>rd</sup> among 50+ teams(National Event)</sub> \
        <p>Design of co-ordinated Autonomous and a semi-autonomous robot having 6 degrees of freedom. I worked on developing it's navigation system and automating it to perform various tasks. I also worked on driver level programming for I2C and SPI bus connecting a system of 7 uC.  </p>",
        link:"https://www.youtube.com/watch?v=cn4oQpU7BA4",
        tags:"roboticss",
        first: 0
    }
]