/* 
 * JQuery script for effecting and css dynamique efffect
 */

var maxWidthTh = -1;


// We going to fixe the width of cell. 

if ($('.scrolly-table:not(.scrolly-table-h)').length != 0) {
    // When the table is not horizontally scrollable, we make the width of cell egal of the width of table / numbers of cell
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
    // When the table is horizontaly scrollable, ve make the width cell egal at the max witdh cell of the column
    // We loop on each columns for get the max value
    var maxWidth, width,headWidth;
    // We get the number of cell on thead for make a loop.
    var numberColones = $('.scrolly-table.scrolly-table-h .thead .th').length;
    for (var indexColone = 1; indexColone <= numberColones; indexColone++) {
        // We allow user to set the max width of a column with the data-max-width else we set it at 150
        if (typeof $(".thead .th:nth-child(" + indexColone + ")").data('max-width') !== "undefined") {
            maxWidth = $(".thead .th:nth-child(" + indexColone + ")").data('max-width');
        } else {
            maxWidth = 150;
        }
        // Then we get the width of the head's cell of the column for know the width of cell
        headWidth = $(".thead .th:nth-child(" + indexColone + ")").innerWidth();
        width = (headWidth < maxWidth ? headWidth : maxWidth);
        $(".tbody .td:nth-child(" + indexColone + ")").each(function () {
            // On each cell of column, we checking the width to know the more huge and set the width with
            if ($(this).innerWidth() > width && $(this).innerWidth() < maxWidth) {
                width = $(this).innerWidth();
            } else if ($(this).innerWidth() > width && $(this).innerWidth() > maxWidth) {
                // If the cell is more huge than widht but also to the maxWidth, we set the width to maxwidth
                width = maxWidth;
            }
        })
        // We passing the value of width to the width CSS.
        $(".tbody .td:nth-child(" + indexColone + "), .thead .th:nth-child(" + indexColone + ")").css('min-width', width.toString() + 'px')
        $(".tbody .td:nth-child(" + indexColone + "), .thead .th:nth-child(" + indexColone + ")").css('max-width', width.toString() + 'px')
    }
}



/* Event for coloring the cells on cross */
$(document).on('mouseenter', '.scrolly-table.hovering .td:not(:first-of-type)', function () {
    var colIndex = $(this).index() + 1;
    $('.scrolly-table .tr, .scrolly-table .td, .scrolly-table .th').removeClass("hover");
    $('.scrolly-table .th:nth-child(' + colIndex + ')').addClass("hover");
    $(this).parent().find('.td').addClass("hover");
})
/* For mouse leaving the table*/
$(document).on('mouseleave', '.scrolly-table.hovering .td:not(:first-of-type)', function () {
    $('.scrolly-table tr, .scrolly-table .th, .scrolly-table .td').removeClass("hover")
})