
$(document).ready(insertHeaderJob);

$(function(){
  $("#close-nav-btn").click(closeNav);
  $("#nav-bar-button").click(openNav);
});




// Function to add random job title to header

function insertHeaderJob() {
  var jobs = ["iOS", "front end", "back end"];
  var article = ["an", "a", "a"];
  var numJobs = jobs.length;
  var index = 0;

  setInterval (function() {
    $("#indirect-article").html(article[index]);
    $("#job-header").html(jobs[index]); // writes array to header
    index = (index + 1) % numJobs;
    console.log(index);   // increments index by 1 and uses modulus to set index for next element
  }, 1000);                            // Delay 1 second
}

function openNav() {
  $("#side-nav").addClass("navWidth");
  $("#main-nav").addClass("navMargin");
}

function closeNav() {
  $("#side-nav").removeClass("navWidth");
  $("#main-nav").removeClass("navMargin");
}
// /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }
//
// /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }
