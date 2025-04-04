const $ =  (e)=> document.querySelector(e);

let start;
let ileminut;
let koniec;
let pozostaly;

setInterval(() => {
    let teraz = moment().format("YYYY-MM-DD");
    start = moment(teraz+" "+$('#start').value,"YYYY-MM-DD HH:mm")
    ileminut = parseInt($('#minuty').value);
    koniec = moment(start).add(ileminut, 'minutes');
    $('#koniec').value = koniec.format("HH:mm");
    let now = moment();
    pozostaly = koniec.add(-1, 'hour').diff(now);
    $('#pozostaly').value = moment(pozostaly).format("HH:mm:ss");
    

}, 1000);