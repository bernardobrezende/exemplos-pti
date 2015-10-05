// 1
$('.module');

// 2
$('#myList :eq(2)');

// 3
$('#search label[for=q]');

// 4
$('[alt]').size();

// 5
$('#fruits tbody tr:even');
$('#fruits tr:even:not(:first-child)');

// 6
$('h2:contains(B):contains(e)').size();

// 7
$('#myList li').not('.current');
$('#myList li:not(.current)');

// 8
$('img:last,h3:last')
$('img:last, h3:last');
$('li:last-of-type img, li:last-of-type h3')

// 9
$('#myList .current ~ li').text().length;
$('#myList .current').nextAll().text().length;

