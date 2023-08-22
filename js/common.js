//Input Upload FIle
'use strict';

// Show Hide Menu Left
$(document).ready(function() {
    $("#sidebarCollapse").on('click', function() {
        $(".wrapper").toggleClass('active');
        $(".box-layer").toggleClass('collaspe');
    });

    $(".dropdown-block-content").on('click', function() {
        $(this).toggleClass('collaspe');
    });
});


