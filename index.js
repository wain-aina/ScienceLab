$('.menuA').on('click',function(){
    $("#section-1").removeClass('display-none');
    $('#section-2').addClass('display-none');
    $("#section-3").addClass('display-none');
    $("#section-4").addClass('display-none');
    $('.current-category').text("GLASSWARE");
});

$('.menuB').on('click',function(){
    $("#section-1").addClass('display-none');
    $('#section-2').removeClass('display-none');
    $("#section-3").addClass('display-none');
    $("#section-4").addClass('display-none');
    $('.current-category').text("REAGENTS");
});
$('.menuC').on('click',function(){
    $("#section-1").addClass('display-none');
    $('#section-2').addClass('display-none');
    $("#section-3").removeClass('display-none');
    $("#section-4").addClass('display-none');
    $('.current-category').text("CHEMICALS");
});
$('.menuD').on('click',function(){
    $("#section-1").addClass('display-none');
    $('#section-2').addClass('display-none');
    $("#section-3").addClass('display-none');
    $("#section-4").removeClass('display-none');
    $('.current-category').text("LAB EQUIPMENT");
});

let searchBtn = $(".search-btn");
let searchQuery = $(".myInput");
searchQuery = searchQuery.toLowerCase();
let textTag = $(".stuff");
textTag = textTag.innerHTML.toLowerCase();

searchBtn.on("click", () => {
    for(i=0; i<textTag.length; i++) {
        if(!textTag[i].includes(searchQuery)) {
            textTag.addClass('display-none');
        } else {
            textTag.removeClass('display-none');
        }
    }
});


