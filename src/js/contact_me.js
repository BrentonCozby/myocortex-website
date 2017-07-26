import './jqBootstrapValidation.js'
import escape from 'escape-html'

$(function() {

    $("#sign-up-form input, #sign-up-form textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = escape($("input#name").val());
            var email = escape($("input#email").val());
            var phone = escape($("input#phone").val());
            var subject = $("select#subject").val();
            var message = escape($("textarea#message").val());
            var firstName = name; // For Success/Failure Message
            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }
            $.ajax({
                url: "/mail/contact_me.php",
                method: "POST",
                data: {
                    name: name,
                    phone: phone,
                    email: email,
                    subject: subject,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#feedback').show(100)
                    $('#feedback').html("Your message has been sent!");
                    $('#feedback').addClass('success')

                    //clear all fields
                    $('#sign-up-form').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#feedback').show(100)
                    $('#feedback').html("Sorry! Please try again later.");
                    $('#feedback').addClass('error')
                    //clear all fields
                    $('#sign-up-form').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name, #email, #message, #subject, #phone').focus(function() {
    $('#feedback').hide(100)
    $('#feedback').html('');
    $('#feedback').removeClass('success error');
});
