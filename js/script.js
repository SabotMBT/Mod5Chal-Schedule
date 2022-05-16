$("#currentDay").text(moment().format('ddd, MMM Do'));

var currentHour = parseInt(moment().format('H'));
console.log(currentHour);
var hourSlot = document.querySelector(".row");
var hourSlotAll = document.querySelectorAll(".row");
var textContAll = document.querySelectorAll(".col-6");
let textList = []
var retrievedList = JSON.parse(localStorage.getItem('textList'));
console.log(retrievedList);
if (retrievedList != null) {
$(textContAll).each(function(i){
    $(textContAll[i]).text(retrievedList[i]);
});
};
console.log(textContAll.textContent)

console.log(hourSlotAll);
var allButtons = document.querySelectorAll("#btncont");
console.log(allButtons)

$(hourSlotAll).each(function(i) {
    // console.log(hourSlotAll[i].id)
    if (hourSlotAll[i].id > currentHour) {
        $(this).css('background-color', 'lightgreen')
    } else if (hourSlotAll[i].id < currentHour) {
        $(this).css('background-color', 'lightgrey')
    } else {
        $(this).css('background-color', '#ffcccb')
    }
});
var textCont = document.querySelector('.col-6')
$(hourSlotAll).on('dblclick', function() {
    var cInput = $('<input type="text"></input>');
    $(this).children('div.col-6').append(cInput);
    var subBtn = $('<button>')
    $(this).children('#btncont').append(subBtn);
    subBtn.attr('id', 'subBtn');
    subBtn.addClass("btn btn-danger btn-lg");
    subBtn.text("Submit");
});

$(allButtons).delegate('#subBtn', 'click', function(){
    var inputText = $(this).parent().siblings('div.col-6').find("input").val();
    var writeText = $(this).parent().siblings('div.col-6');
    $(writeText).text(inputText);
    $(this).remove();
    for(let i=0; i<textContAll.length; i++) {
        textList[i] = textContAll[i].textContent
    };
    localStorage.setItem('textList', JSON.stringify(textList));
    console.log(textList);
})
