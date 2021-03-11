var a = prompt('donner le 1er entier:');
var b = prompt('donner le 2eme entier:');
var c = a + b;
var i;

console.log(c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
ok = false
while (ok == false) {
    ok = true;
    var a = prompt('donner le 1er entier:');
    for (i = 0; i < a.length; i++) {
        if (a[i] == '.') {
            ok = false;
        }
    }
}
ok = false
while (ok == false) {
    ok = true;
    var b = prompt('donner le 2er entier:');
    for (i = 0; i < b.length; i++) {
        if (b[i] == '.') {
            ok = false;
        }
    }

}
var c = Number(a) + Number(b);
console.log(c);
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));