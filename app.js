$(document).ready(function() {
    function loadPage(page) {
        $("#content").load(page + ".html");
    }
    function HashChange() {
        var page = location.hash.substr(1); 
        if (page) {
            loadPage(page);
        } else {
            loadPage("Intro"); 
        }
    }
    $(window).on("hashchange", HashChange);
    HashChange();
});

   