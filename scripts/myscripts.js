
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

// Functions to open and close Nav sidebar

function openNav() {
  $("#side-nav").addClass("navWidth");
  $("#main-nav").addClass("navMargin");
}

function closeNav() {
  $("#side-nav").removeClass("navWidth");
  $("#main-nav").removeClass("navMargin");
}

$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // TODO: The rest of the code will go here...
});
// Set up an event listener for the contact form.
$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // TODO
});

// Serialize the form data.
var formData = $(form).serialize();
// Submit the form using AJAX.
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})
.done(function(response) {
    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
})
.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
});
