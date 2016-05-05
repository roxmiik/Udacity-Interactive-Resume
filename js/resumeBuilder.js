var bio = {
	"name": "Roxana Carmen Kakarash",
	"role": "Web Developer",
	"contacts": {
		"mobile": "425-000-0000",
		"email": "roxana@example.com",
		"github": "https://github.com/roxmiik",
		"twitter": "@roxmiikloveskale",
		"location": "Seattle, WA"
	},
	"welcomeMessage": "Welcome to my website",
	"skills": [
	"HTML5", "CSS3", "JavaScript", "jQuery", "Responsive Web Design", "Git/GitHub"
	],
	"bioPic": "images/me.jpg"
};

var education = {
	"schools": [
	{
	"name": "Polytechnic University of Timisoara",
	"location": "Timisoara, Romania",
	"degree": "Bachelors",
	"majors": ["Telecommunications Engineering"],
	"dates": 2006,
	"url": "http://www.etc.upt.ro/"
	},
	{
	"name": "TLG Learning",
	"location": "Bellevue, WA",
	"degree": "certificates",
	"majors": ["non-major"],
	"dates": 2011,
	"url": "http://www.tlglearning.com/"
	}
	],
	"onlineCourses": [
	{
		"title": "The Complete Web Developer Course",
		"school": "Udemy",
		"dates": 2015,
		"url": "https://www.udemy.com/complete-web-developer-course/"
	},
	{
		"title": "HTML, CSS, JavaScript and jQuery",
		"school": "Team Treehouse",
		"dates": 2015,
		"url": "https://teamtreehouse.com/"
	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
	},
	{
		"title": "JavaScript Basics",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/javascript-basics--ud804"
	}
	]
};

var work = {
	"jobs": [
	{
		"employer": "TechM",
		"title": "Test Engineer",
		"location": "Redmond, WA",
		"dates": "November 2011 - Present",
		"description": "Test WAP Browser on Android, Windows and BlackBerry OS mobile devices (smart phones, tablets and feature phones). Received 'Pat on the Back' Award for excellence in testing."
	},
	{
		"employer": "Self-employed",
		"title": "freelance Web Developer",
		"location": "Seattle, WA",
		"dates": "January 2015 - Present",
		"description": "create websites using HTML5, CSS3, JavaScript, jQuery, Responsive Design and Git/GitHub."
	}
 ]
};

var projects = {
	"projects": [
	{
		"title": "Udacity Project 1, version 1",
		"dates": "2015",
		"description": "I built this website using flexbox, grids,responsive images (srcset/sizes) and Photoshop.",
		"images": [
		"images/project.gif",
		"images/project.gif"
		]
	},
	{
		"title": "Udacity Project 1, version 2",
		"dates": "2016",
		"description": "I built this website using HTML5, CSS3 (flexbox,responsive images), Modernizr, picturefill and Photoshop.",
		"images": [
		"images/project.gif",
		"images/project.gif"
		]
	},
	{
		"title": "Udacity Project 1, version 3",
		"dates": "2016",
		"description": "I built this website using Bootstrap(Navbar, Jumbotron, Modals, Forms), responsive images (srcset/sizes) and Photoshop.",
		"images": [
		"images/project.gif",
		"images/project.gif"
		]
	}
  ]
};

/* var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
$(".work-entry:last").append(formattedLocation); */

/**
* Display values in the header of the page.
*
**/

bio.display = function() {
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

//Append contact information in the header
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

//Append contact information in the footer
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

//Append skills in the header, if any skills are defined in the "skills" array.
if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
}
  
 /*var mySkill = "";
 
 if (bio.skills.length) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            mySkill += HTMLskills.replace("%data%", bio.skills[i]);
        }
        $("#skills").append(mySkill);
    }
*/

};

education.display = function() {
	
	 
	for (var school in education.schools) {
			myObj = education.schools;
		if (myObj.hasOwnProperty(school)) {
		var schoolNameAndDegree;
		
		$('#education').append(HTMLschoolStart);
    /* School name and the degree earned */
    schoolNameAndDegree = HTMLschoolName.replace('%data%', myObj[school].name) +
      HTMLschoolDegree.replace('%data%', myObj[school].degree);

    $('.education-entry:last').append(schoolNameAndDegree);
    $('.education-entry:last').append(HTMLschoolDates.replace('%data%', myObj[school].dates));
    $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', myObj[school].location));
	
	if (myObj[school].majors.length > 0) {
	myObj[school].majors.forEach(function(major) {
      $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', major));
    });
	}
  }
}
  
    if (education.onlineCourses.length > 0) {
    $('#education').append(HTMLonlineClasses);
     
	 education.onlineCourses.forEach(function(course) {
      var onlineTitleAndSchool;
	  $('#education').append(HTMLschoolStart);
	  
	  onlineTitleAndSchool = HTMLonlineTitle.replace('%data%', course.title) +
      HTMLonlineSchool.replace('%data%', course.school);

	  $('.education-entry:last').append(onlineTitleAndSchool);
      $('.education-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
      $('.education-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
    });
  }
};

work.display = function() {
	if (work.jobs.length > 0) {
		work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var workEmployerAndTitle;
		 workEmployerAndTitle = HTMLworkEmployer.replace("%data%",job.employer) + HTMLworkTitle.replace("%data%", job.title);
		 $(".work-entry:last").append(workEmployerAndTitle);
		 $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
		 $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
		 $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
		}); 
	 }
}; 

projects.display = function() {
	if (projects.projects.length > 0) {
		projects.projects.forEach(function(project) {
			
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
		if (project.images.length > 0) {
			for (var i = 0; i < project.images.length; i++) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", project.images[i]));
			}
		}
		}); 
	 }
}; 


/*Call the display function for each object */

bio.display();
education.display();
work.display();
projects.display();


/*Append the internationalizeButton to the very bottom of the div. */

function inName(name) {
	name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	name[1] = name[1].slice(0,1).toUpperCase() + name[1].slice(1).toLowerCase();
	
	return name[0] +" "+ name[1] +" "+name[2];	
}

$("#main").append(internationalizeButton);

//Append the Google Map to the page
$('#mapDiv').append(googleMap);


/* $("#main").append("Roxana Carmen Kakarash"); */
/* var awesomeThoughts = "I am Roxana and I am AWESOME!";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts); */
/* var name = "Roxana Carmen Kakarash";
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName); */



/* $("#main").prepend(bio);

var work = {};
work.position = "Test Engineer";
work.employer = "TechM";
work.years = 4; */

/* var education = {};
education["name"] = "Polytechnic University of Timisoara";
education["years"] = "2001-2006";
education["city"] = "Timisoara, Romania";

$("#main").append(work["position"]);
$("#main").append(education.name); */