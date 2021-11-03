znaki = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "A", "B", "C", "D", "E", "F"]
var aid;
var letter;
var zer;
var mv;

function ahGet(aid, letter) {
    var h = document.getElementById("a" + [letter] + [aid]).value;
    h = h.toUpperCase();

    if (znaki.includes(h[0]) && znaki.includes(h[1])) {
        var hvl = hv.length;
        if (hvl == 2) {
            document.getElementById([letter] + "x" + [aid]).innerHTML = h;
        }
        else if (hvl == 1) {
            document.getElementById([letter] + "x" + [aid]).innerHTML = "0" + h;
        }
        else {
            document.getElementById([letter] + "x" + [aid]).innerHTML = "00"
        }
    }
}

function reset(zer) {
    var nu = 1;
    var le = 'h';
    while (nu <= 4) {
        if (zer == 1) {
            document.getElementById([le] + "x" + [nu]).innerHTML = "00";
            document.getElementById("a" + [le] + [nu]).value = "";
        } else if (zer == 2) {
            var x = Math.floor(Math.random() * 17);
            x = x.toString(16);
            var xl = x.length;
            if (xl == 1) {
                x = "0" + x;
            }
            document.getElementById([le] + "x" + [nu]).innerHTML = x;
        }
        nu++;
        if (nu == 5 && le == 'h') {
            nu = 1;
            le = 'l';
        }
    }
}

function mov(mv) {
    var rad = document.getElementsByName("regX");
    var rad2 = document.getElementsByName("regX");
    var radv;
    var rad2v;
    var radi = 0;
    var rad2i = 0;
    while (radi < rad.length) {
        if (rad[radi].checked) {
            radv = rad[radi].value;
        }
        radi++;
    }
    while (rad2i < rad2.length) {
        if (rad2[rad2i].checked) {
            rad2v = rad2[rad2i].value;
        }
        rad2i++;
    }
    var r11 = radv.slice(0, 1);
    var r12 = radv.slice(1, 2);
    var r21 = rad2v.slice(0, 1);
    var r22 = rad2v.slice(1, 2);
    if ((r22 == "x" && r12 != "x") || (r22 != "x" && r12 == "x")) {
        alert("Nie można wybierać mieszanych danych");
    }
    else {
        if (mv == 1) {
            if (r12 == "x") {
                var valuer = document.getElementById("hx" + [r21]).innerHTML;
                var valuer2 = document.getElementById("lx" + [r21]).innerHTML;
                document.getElementById("hx" + [r11]).innerHTML = valuer;
                document.getElementById("lx" + [r11]).innerHTML = valuer2;
            } else {
                var valuer = document.getElementById([r22] + "x" + [r21]).innerHTML;
                document.getElementById([r12] + "x" + [r11]).innerHTML = valuer;
            }
        } else if (mv == 2) {
            if (r12 == "x") {
                var valuer = document.getElementById("hx" + [r11]).innerHTML;
                var valuer2 = document.getElementById("lx" + [r11]).innerHTML;
                var valuer21 = document.getElementById("hx" + [r21]).innerHTML;
                var valuer22 = document.getElementById("lx" + [r21]).innerHTML;
                var valuerbuf = valuer;
                var valuerbuf2 = valuer2;
                document.getElementById("hx" + [r11]).innerHTML = valuer21;
                document.getElementById("lx" + [r11]).innerHTML = valuer22;
                document.getElementById("hx" + [r21]).innerHTML = valuerbuf;
                document.getElementById("lx" + [r21]).innerHTML = valuerbuf2;
            } else {
                var valuer = document.getElementById([r12] + "x" + [r11]).innerHTML;
                var valuerbuf = valuer;
                var valuer22 = document.getElementById([r22] + "x" + [r21]).innerHTML;
                document.getElementById([r12] + "x" + [r11]).innerHTML = valuer22;
                document.getElementById([r22] + "x" + [r21]).innerHTML = valuerbuf;

            }
        }
    }
}