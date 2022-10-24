    
var popMusic = document.createElement('div');
popMusic.innerHTML = 'Pop Music';
document.body.appendChild(popMusic);

var button1 = document.createElement('button');
button1.innerHTML = 'Button 1';
document.body.appendChild(button1);
var button2 = document.createElement('button');
button2.innerHTML = 'Button 2';
document.body.appendChild(button2);

button1.onclick = function() {
  alert('Like');
};
button2.onclick = function() {
  alert('Dislike');
};

button1.innerHTML = 'Like';
button2.innerHTML = 'Dislike';

var dataTable = document.createElement('table');
var dataTableHeader = document.createElement('tr');
var dataTableHeaderLikes = document.createElement('th');
dataTableHeaderLikes.innerHTML = 'Likes';
var dataTableHeaderDislikes = document.createElement('th');
dataTableHeaderDislikes.innerHTML = 'Dislikes';
dataTableHeader.appendChild(dataTableHeaderLikes);
dataTableHeader.appendChild(dataTableHeaderDislikes);
dataTable.appendChild(dataTableHeader);
var dataTableRow = document.createElement('tr');
var dataTableRowLikes = document.createElement('td');
dataTableRowLikes.innerHTML = '0';
var dataTableRowDislikes = document.createElement('td');
dataTableRowDislikes.innerHTML = '0';
dataTableRow.appendChild(dataTableRowLikes);
dataTableRow.appendChild(dataTableRowDislikes);
dataTable.appendChild(dataTableRow);
document.body.appendChild(dataTable);

button1.onclick = function() {
  dataTableRowLikes.innerHTML = parseInt(dataTableRowLikes.innerHTML) + 1;
};

var resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';
document.body.appendChild(resetButton);
resetButton.onclick = function() {
  dataTableRowLikes.innerHTML = '0';
  dataTableRowDislikes.innerHTML = '0';
};

button2.onclick = function() {
  dataTableRowDislikes.innerHTML = parseInt(dataTableRowDislikes.innerHTML) + 1;
};