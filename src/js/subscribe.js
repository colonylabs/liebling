import $ from 'jquery';

export const identifyUser = (email) => {
    global.window._cio.identify({
        // Required attributes
        id: email,           // Unique id for the currently signed in user in your application.
        email: email, // Email of the currently signed in user.
        // Can include anything here
        source: 'Blog'
    });
}

$(document).ready(() => {
    const $submitButton = $('#newsletter-button');
    $submitButton.click(() => {
        identifyUser($('#newsletter-input').val());
    })
});