$(document).ready(function() {
    console.log("Loading....");

    var templateData = { name: 'Franco Maverick' };
    $.Mustache.options.warnOnMissingTemplates = true;
    $.Mustache.load('templates/app.html').done(function() {
        $('#header').html('').append($.Mustache.render('header-page', templateData));

        $('#canvas').html('').append($.Mustache.render('main-page'));

        $('#holy-family-map').html('').append($.Mustache.render('church-map'));

        $('#footer').html('').append($.Mustache.render('footer-page'));
    });
});