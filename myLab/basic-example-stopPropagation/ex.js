var div1 = document.querySelector('.div1');
var div2 = document.querySelector('.div2');
var div3 = document.querySelector('.div3');
var html = document.querySelector('html');
var body = document.querySelector('body');
window.addEventListener('click', function (e) {
    alert('window this ->');
}, true);
document.addEventListener('click', function(e) {
    alert('document this->');
});

html.addEventListener('click', function(e) {
    alert('html');
});

body.addEventListener('click', function(e) {
    alert('body this');
});
div1.addEventListener('click', function(e) {
    alert('div1 this->'+this.getAttribute('class'));
});
div2.addEventListener('click', function(e) {
    e.stopPropagation();
    alert('div2 this->'+this.getAttribute('class'));

});

div3.addEventListener('click', function(e) {
    alert('div3, this->'+this.getAttribute('class'));
});
