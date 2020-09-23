// $(function(){
//   $("#jobHeader").hover(insertHeaderJob, removeHeader);
// });

$(document).ready(insertHeaderJob);


// Function to add random job title to header

function insertHeaderJob() {
  var jobs = ["iOS", "front end", "back end"];
  var article = ["an", "a", "a"];
  var numJobs = jobs.length;
  var index = 0;

  setInterval (function() {
    $("#indirectArticle").html(article[index]);
    $("#jobHeader").html(jobs[index]); // writes array to header
    index = (index + 1) % numJobs;
    console.log(index);   // increments index by 1 and uses modulus to set index for next element
  }, 1000);                            // Delay 1 second
}
