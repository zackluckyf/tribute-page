$(document).ready(function(){

    var quotes = ["Knowledge is power.","Nearly all men can stand adversity, but if you want to test a man's character, give him power.","Power is of two kinds. One is obtained by the fear of punishment and the other by acts of love. Power based on love is a thousand times more effective and permanent then the one derived from fear of punishment.","He who wishes to be obeyed must know how to command.", "Because power corrupts, society's demands for moral authority and character increase as the importance of the position increases.", "All things are subject to interpretation whichever interpretation prevails at a given time is a function of power and not truth.", "Dictatorship naturally arises out of democracy, and the most aggravated form of tyranny and slavery out of the most extreme liberty.", "There is no crueler tyranny than that which is perpetuated under the shield of law and in the name of justice.", "Knowledge is power. Information is power. The secreting or hoarding of knowledge or information may be an act of tyranny camouflaged as humility.", "Tyranny and anarchy are never far apart."];

    var authors = ["Francis Bacon","Abraham Lincoln", "Mahatma Gandhi", "Niccolo Machiavelli","John Adams","Friedrich Nietzsche","Plato","Charles de Montesquieu","Robin Morgan","Jeremy Bentham"];

    var colors = ['red', 'green', 'blue', 'orange','black','blueviolet', 'brown', 'burlywood', 'coral', 'darkred', 'forestgreen', 'mediumvioletred', 'olivedrab', 'teal', 'yellowgreen'];


    /* NEW QUOTE BUTTON */
    
    $("#new-quote").click(function(){
        var rand = Math.floor(Math.random()*colors.length);
        $(this).css('background-color', colors[rand]);
        $(this).css('transition', 'background-color 1s');
        $("#quote").css('color', colors[rand]);
        $("#quote").css('transition', 'color 1s');
        $(".author").css('color', colors[rand]);
        $(".author").css('transition', 'color 1s');
        $(".quotes-icon").css('color', colors[rand])
        $(".quotes-icon").css('transition', 'color 1s');;
        $(".twtter-button-icon").css('background-color', colors[rand]);
        $(".twtter-button-icon").css('transition', 'background-color 1s');
        $("#twitter-button").css('background-color', colors[rand]);
        $("#twitter-button").css('transition', 'background-color 1s');
        $("body").css('background-color', colors[rand]);
        $("body").css('transition', 'background-color 1s');
        var rand2 = Math.floor(Math.random()*quotes.length);
        $(".text").text(quotes[rand2]);
        $(".author").text(authors[rand2]);
    });  
    
    /* TWEET BUTTON */
    
    $("#twitter-button").click(function(){
        var twtLink = 'http://twitter.com/intent/tweet?hashtags=quotes&text=%22' +encodeURIComponent($("#quote").text())+'%22';
        window.open(twtLink,'_blank');
    });

});