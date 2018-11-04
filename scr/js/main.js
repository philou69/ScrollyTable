/* 
 * JQuery script for effecting and css dynamique efffect
 */

var maxWidthTh = -1;

if ($('.scrolly-table:not(.scrolly-table-h)').length != 0) {
    // When the table is not horizontally scrollable, we make the width ofg cell egal of the width of table / numbers of cell
    var tableLength = $('.scrolly-table').innerWidth();
    console.log(tableLength);

// Count of numbers of colonnes
    var countCol = $('.scrolly-table .th').length;
    console.log(countCol)

    // Get the width of th 
   maxWidthTh = tableLength / countCol;
   
$(".scrolly-table:not(.scrolly-table-h) .th, .scrolly-table .td").css('width', maxWidthTh.toString() + 'px');
$(".scrolly-table:not(.scrolly-table-h) .th, .scrolly-table .td").css('max-width', maxWidthTh.toString() + 'px');
} else {
    // When the table is horizontaly scrollable, ve make the width cell egal at the max witdh cell
    // We loop on each colonnes for get the max value
    $('.scrolly-table .th, .scrolly-table .td').each(function () {
        if ($(this).innerWidth() > maxWidthTh) {
            maxWidthTh = $(this).innerWidth();
        }
    });
console.log(maxWidthTh)
// Then we aply this max width of each colones
$(".scrolly-table .th, .scrolly-table .td").css('width', maxWidthTh.toString() + 'px');
$(".scrolly-table .th, .scrolly-table .td").css('min-width', maxWidthTh.toString() + 'px');
}



/* Event for coloring the cells on cross */
$(document).on('mouseenter','.scrolly-table.hovering .td', function () {
    var colIndex = $(this).index() + 1;
    $('.scrolly-table .tr, .scrolly-table .td, .scrolly-table .th').removeClass("hover");
    $('.scrolly-table .td:nth-child(' + colIndex + '), .scrolly-table .th:nth-child(' + colIndex + ')').addClass("hover");
    $(this).parent().find('.td').addClass("hover");
    console.log(colIndex);
})
/* For mouse leaving the table*/
$(document).on('mouseleave','.scrolly-table.hovering .td', function () {
    $('.scrolly-table tr, .scrolly-table .th, .scrolly-table .td').removeClass("hover")
})