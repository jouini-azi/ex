var x = Math.floor(Math.random() * 10);
console.log(x);

var y;

y = prompt('donner un nombre:');
while (y != x) {
    if (x < y) {
        y = prompt('a3ti num a9al mil num ili 3titou 9bila ');
    } else {
        y = prompt('a3ti num akber mil num ili  3titou 9bila ');
    }
}
console.log('sahit ak l9itou l num bravo ' + x);