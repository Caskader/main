const c1 = document.getElementById('a1');
const t1 = document.getElementById('a2');
const c2 = document.getElementById('a3');
const t2 = document.getElementById('a4');
const m = document.getElementById('a5');
const t3 = document.getElementById('a6');
const c3 = document.getElementById('a7');
const t4 = document.getElementById('a8');
const c4 = document.getElementById('a9');
var oponent = [1, 1]
var play = 0
var playermod = ""
var co = 'red'
var ca = 'white'
var puten = [0]
var puten2 = []
var trick = ""
var puten3 = []

c1.addEventListener('click', () => {
    var a = put('c1', co)
    if (play == 0) {
        playermod = 'cor'
        firstplay(playermod)
        puten2.push('c1')
    }
    else if (play == 1 && a == true) {
        playermod = 'cor';
        puten2.push('c1')
        secondplay('c1');
    }
    else if (play == 2 && a == true) {
        playermod = 'cor';
        puten2.push('c1')
        thirdplay('c1')
    }
    if (a == true) {
        oponent[play] = 'c1';
        play += 1;
    }
})

c2.addEventListener('click', () => {
    var a = put('c2', co)
    if (play == 0 && a == true) {
        playermod = 'cor'
        puten2.push('c2')
        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        playermod = 'cor'
        puten2.push('c2')
        secondplay('c2');
    }
    else if (play == 2 && a == true) {
        playermod = 'cor';
        puten2.push('c2')
        thirdplay('c2')
    }
    if (a == true) {
        oponent[play] = 'c2';
        play += 1
    }
})

c3.addEventListener('click', () => {
    var a = put('c3', co)
    if (play == 0 && a == true) {
        playermod = 'cor'
        puten2.push('c3')

        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        playermod = 'cor'
        puten2.push('c3')
        secondplay('c3');
    }
    else if (play == 2 && a == true) {
        playermod = 'cor';
        puten2.push('c3')
        thirdplay('c3')
    }
    if (a == true) {
        oponent[play] = 'c3';
        play += 1;
    }
})

c4.addEventListener('click', () => {
    var a = put('c4', co)
    if (play == 0 && a == true) {
        playermod = 'cor'
        puten2.push('c4')
        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        playermod = 'cor'
        puten2.push('c4')
        secondplay('c4');
    }
    else if (play == 2 && a == true) {
        playermod = 'cor';
        puten2.push('c4')
        thirdplay('c4')
    }
    if (a == true) {
        oponent[play] = 'c4';
        play += 1;
    }
})

t1.addEventListener('click', () => {
    var a = put('t1', co)
    if (play == 0 && a == true) {
        playermod = 'tile'
        puten2.push('t1')
        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        puten2.push('t1')
        playermod = 'tile'
        secondplay('t1');
    }
    else if (play == 2 && a == true) {
        playermod = 'tile';
        puten2.push('t1')
        thirdplay('t1')
    }
    if (a == true) {
        oponent[play] = 't1';
        play += 1;
    }
})

t2.addEventListener('click', () => {
    var a = put('t2', co)
    if (play == 0 && a == true) {
        playermod = 'tile'
        puten2.push('t2')
        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        playermod = 'tile'
        puten2.push('t2')
        secondplay('t2');
    }
    else if (play == 2 && a == true) {
        playermod = 'tile'
        puten2.push('t2')
        thirdplay('t2')
    }
    if (a == true) {
        oponent[play] = 't2';
        play += 1;
    }
})

t3.addEventListener('click', () => {
    var a = put('t3', co)
    if (play == 0 && a == true) {
        playermod = 'tile'
        puten2.push('t3')
        firstplay(playermod)
    }
    else if (play == 1) {
        playermod = 'tile'
        puten2.push('t3')
        secondplay('t3');
    }
    else if (play == 2) {
        playermod = 'tile';
        puten2.push('t3')
        thirdplay('t3')
    }
    if (a == true) {
        oponent[play] = 't3';
        play += 1;
    }
})

t4.addEventListener('click', () => {
    var a = put('t4', co)
    if (play == 0) {
        playermod = 'tile'
        puten2.push('t4')

        firstplay(playermod)
    }
    else if (play == 1 && a == true) {
        playermod = 'tile'
        puten2.push('t4')
        secondplay('t4');
    }
    else if (play == 2 && a == true) {
        playermod = 'tile';
        puten2.push('t4')
        thirdplay('t4')
    }
    if (a == true) {
        oponent[play] = 't4';
        play += 1;
    }
})

m.addEventListener('click', () => {
    var a = put('m', co)
    if (play == 0 && a == true) {
        playermod = 'm'
        puten2.push('m')
        firstplay(playermod)
        puten.push('m')
    }
    else if (play == 1 && a == true) {
        playermod = 'm'
        puten2.push('m')
        secondplay('m');
    }
    else if (play == 2 && a == true) {
        playermod = 'm';
        puten2.push('m')
        thirdplay('m')
    }
    if (a == true) {
        oponent[play] = 'm';
        play += 1;
    }
})

function firstplay(mod) {
    if (mod == "cor") {
        put('m', ca)
        puten3.push('m')
        trick = 'three corners'
    }
    if (mod == "tile") {
        trick = 'small L'
        console.log(puten2)
        if (puten2[0] == 't1') {
            puten3.push('t2')
            put('t2', ca)
        }
        if (puten2[0] == 't2') {
            puten3.push('t1')
            put('t1', ca)
        }
        if (puten2[0] == 't3') {
            puten3.push('t1')
            put('t1', ca)
        }
        if (puten2[0] == 't4') {
            puten3.push('t3')
            put('t3', ca)
        }
    }
    if (mod == "m") {
        trick = 'piramid'
        puten3.push('c1')
        put('c1', ca)
    }
    return trick;
}
function put(peg, col) {
    var pass = true;
    var count = 0;
    // console.log(puten)
    for (i in puten) {
        count += 1;
        if (peg == puten[i]) {
            pass = false;
            // console.log(pass)
        }
    }
    console.log(pass, peg)
    if (pass == true) {
        puten.push(peg)
        if (peg == "c1") {
            c1.style.backgroundColor = col;
        }
        if (peg == "c2") {
            c2.style.backgroundColor = col;
        }
        if (peg == "c3") {
            c3.style.backgroundColor = col;
        }
        if (peg == "c4") {
            c4.style.backgroundColor = col;
        }
        if (peg == "t1") {
            t1.style.backgroundColor = col;
        }
        if (peg == "t2") {
            t2.style.backgroundColor = col;
        }
        if (peg == "t3") {
            t3.style.backgroundColor = col;
        }
        if (peg == "t4") {
            t4.style.backgroundColor = col;
        }
        if (peg == "m") {
            m.style.backgroundColor = col;
        }
    }
    return pass
}

function secondplay(peg) {
    var t = false;
    if (puten2[0] == 'c1') {
        if (puten2[1] == 't1') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 'm') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 't2') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 'c2') {
            put('t1', ca)
            puten3.push('t1')
        }
        else if (puten2[1] == 'c4') {
            t = true;
        }
        else if (puten2[1] == 'c3') {
            put('t2', ca)
            puten3.push('t2')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 't1') {
        if (puten2[1] == 'c1') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 'c2') {
            put('c1', ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 'm') {
            put('t4', ca)
            puten3.push('t4')
        }
        else if (puten2[1] == 't4') {
            put('m', ca)
            puten3.push('m')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 'c2') {
        if (puten2[1] == 't1') {
            put('c1', ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 'm') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 't3') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 'c4') {
            put('t3', ca)
            puten3.push('t3')
        }
        else if (puten2[1] == 'c3') {
            t = true;
        }
        else if (puten2[1] == 'c1') {
            put('t1', ca)
            puten3.push('t1')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 't2') {
        if (puten2[1] == 'c1') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 'm') {
            put('t3', ca)
            puten3.push('t3')
        }
        else if (puten2[1] == 'c3') {
            put('c1', ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 't3') {
            put('m', ca)
            puten3.push('m')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 'm') {
        if (puten2[1] == 'c1') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 't4') {
            put('t4', ca)
            puten3.push('t4')
        }
        else if (puten2[1] == 'c2') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 't3') {
            put('t2', ca)
            puten3.push('t2')
        }
        else if (puten2[1] == 'c4') {
            put('c1',ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 't4') {
            put('t1', ca)
            puten3.push('t1')
        }
        else if (puten2[1] == 'c3') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 't2') {
            put('t3', ca)
            puten3.push('t3')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 'c3') {
        if (puten2[1] == 't2') {
            put('c1', ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 'm') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 't4') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 'c1') {
            put('t2', ca)
            puten3.push('t2')
        }
        else if (puten2[1] == 'c2') {
            t = true;
        }
        else if (puten2[1] == 'c4') {
            put('t4', ca)
            puten3.push('t4')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 't4') {
        if (puten2[1] == 'c3') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 'm') {
            put('t1', ca)
            puten3.push('t1')
        }
        else if (puten2[1] == 'c4') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 't1') {
            put('m', ca)
            puten3.push('m')
        } else {
            t = true;
        }
    }
    else if (puten2[0] == 'c4') {
        if (puten2[1] == 't4') {
            put('c3', ca)
            puten3.push('c3')
        }
        else if (puten2[1] == 'm') {
            put('c1', ca)
            puten3.push('c1')
        }
        else if (puten2[1] == 't3') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 'c2') {
            put('t3', ca)
            puten3.push('t3')
        }
        else if (puten2[1] == 'c3') {
            put('t4', ca)
            puten3.push('t4')
        }
        else if (puten2[1] == 'c1') {
            t = true;
        }
        else {
            t = true;
        }
    }
    else if (puten2[0] == 't3') {
        if (puten2[1] == 'c4') {
            put('c2', ca)
            puten3.push('c2')
        }
        else if (puten2[1] == 'm') {
            put('t2', ca)
            puten3.push('t3')
        }
        else if (puten2[1] == 'c2') {
            put('c4', ca)
            puten3.push('c4')
        }
        else if (puten2[1] == 't2') {
            put('m', ca)
            puten3.push('m')
        } else {
            t = true;
        }
    }

    if (t == true) {
        if (trick == 'three corners') {
            if (puten2[0] == 'c1') {
                put('t1', ca)
                puten3.push('t1')
            }
            if (puten2[0] == 'c2') {
                put('t3', ca)
                puten3.push('t3')
            }
            if (puten2[0] == 'c3') {
                put('t3', ca)
                puten3.push('t3')
            }
            if (puten2[0] == 'c4') {
                put('t1', ca)
                puten3.push('t1')
            }
        }
        if (trick == 'small L') {
            if (puten2[1] == 'c2') {
                put('m', ca)
                puten3.push('m')
            }
            if (puten2[1] == 't2') {
                put('c2', ca)
                puten3.push('c2')
            }
            else {
                put('m', ca)
                puten3.push('m')
            }
        }
        if (trick = 'm') {
            put('c3', ca)
            puten3.push('c3')
        }
    }
}

function thirdplay() {
    var s = false;
    if (puten3[0] == 'c1') {
        if (puten3[1] == 'c2' && puten2[2] != 't1') {
            put('t1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c4' && puten2[2] != 'm') {
            put('m', ca)
            console.log("loss")
        }
        else if (puten3[1] == 'c3' && puten2[2] != 't2') {
            put('t2', ca)
            console.log("loss")
        }
        else if (puten3[1] == 't1' && puten2[2] != 'c2') {
            put('c2', ca)
            console.log("loss")
        }
        else if (puten3[1] == 'm' && puten2[2] != 'c4') {
            put('c4', ca)
            console.log("loss")
        }
        else if (puten3[1] == 't2' && puten2[2] != 'c3') {
            put('c3', ca)
            console.log("loss")
        } else {
            s = true
        }
    }
    else if (puten3[0] == 't1') {
        if (puten3[1] == 'c1' && puten2[2] != 'c2') {
            put('c2', ca)
            console.log("loss")
        }
        else if (puten3[1] == 'm' && puten2[2] != 't4') {
            put('t4', ca)
            console.log("loss")
        }
        else if (puten3[1] == 'c2' && puten2[2] != 'c1') {
            console.log("loss")
            put('c1', ca)
        }
        else if (puten3[1] == 't4' && puten2[2] != 'm') {
            put('m', ca)
            console.log("loss")
        } else {
            s = true
        }
    }
    else if (puten3[0] == 'c2') {
        if (puten3[1] == 'c1' && puten2[2] != 't1') {
            put('t1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c3' && puten2[2] != 'm') {
            put('m', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c4' && puten2[2] != 't3') {
            put('t3', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't1' && puten2[2] != 'c1') {
            put('c1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'm' && puten2[2] != 'c3') {
            put('c3', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't3' && puten2[2] != 'c4') {
            put('c4', ca)
            console.log('loss')
        } else {
            s = true
        }
    }
    else if (puten3[0] == 't2') {

        if (puten3[1] == 'c1' && puten2[2] != 'c3') {
            put('c3', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't3' && puten2[2] != 'm') {
            put('m', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c3' && puten2[2] != 'c1') {
            put('c1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'm' && puten2[2] != 't3') {
            put('t3', ca)
            console.log('loss')
        } else {
            s = true
        }
    }
    else if (puten3[0] == 'm') {
        if (puten3[1] == 'c1' && puten2[2] != 'c4') {
            put('c4', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't1' && puten2[2] != 't4') {
            put('t4', ca)
            console.log('loss')
        }

        else if (puten3[1] == 'c2' && puten2[2] != 'c3') {
            put('c3', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't3' && puten2[2] != 't2') {
            put('t2', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c4' && puten2[2] != 'c1') {
            put('c1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't4' && puten2[2] != 't1') {
            put('t1', ca)
            console.log('loss')
        }
        else if (puten3[1] == 'c3' && puten2[2] != 'c2') {
            put('c2', ca)
            console.log('loss')
        }
        else if (puten3[1] == 't2' && puten2[2] != 't3') {
            put('t3', ca)
            console.log('loss')
        }
        else {
            s = true
        }
    }
    else if (puten3[0] == 't3') {
        if (puten3[1] == 'c2' && puten2[2] != 'c4') {
            put('c4', ca)
        }
        else if (puten3[1] == 't2' && puten2[2] != 'm') {
            put('m', ca)
        }
        else if (puten3[1] == 'c4' && puten2[2] != 'c2') {
            put('c2', ca)
        }
        else if (puten3[1] == 'm' && puten2[2] != 't2') {
            put('t2', ca)
        } else {
            s = true
        }
    }
    else if (puten3[0] == 'c3') {
        if (puten3[1] == 'c1' && puten2[2] != 't2') {
            put('t2', ca)
        }
        else if (puten3[1] == 'c2' && puten2[2] != 'm') {
            put('m', ca)
        }
        else if (puten3[1] == 'c4' && puten2[2] != 't4') {
            put('t4', ca)
        }
        else if (puten3[1] == 't2' && puten2[2] != 'c1') {
            put('c1', ca)
        }
        else if (puten3[1] == 'm' && puten2[2] != 'c2') {
            put('c2', ca)
        }
        else if (puten3[1] == 't4' && puten2[2] != 'c4') {
            put('c4', ca)
        } else {
            s = true
        }
    }
    else if (puten3[0] == 't4') {
        if (puten3[1] == 'c3' && puten2[2] != 'c4') {
            put('c4', ca)
        }
        else if (puten3[1] == 't1' && puten2[2] != 'm') {
            put('m', ca)
        }
        else if (puten3[1] == 'c4' && puten2[2] != 'c3') {
            put('c3', ca)
        }
        else if (puten3[1] == 'm' && puten2[2] != 't1') {
            put('t1', ca)
        }
        else {
            s = true
        }
    }
    else if (puten3[0] == 'c4') {
        if (puten3[1] == 'c1' && puten2[2] != 'm') {
            put('m', ca)
        }
        else if (puten3[1] == 'c2' && puten2[2] != 't3') {
            put('t3', ca)
        }
        else if (puten3[1] == 'c3' && puten2[2] != 't4') {
            put('t4', ca)
        }
        else if (puten3[1] == 't4' && puten2[2] != 'c3') {
            put('c3', ca)
        }
        else if (puten3[1] == 'm' && puten2[2] != 'c1') {
            put('c1', ca)
        }
        else if (puten3[1] == 't3' && puten2[2] != 'c2') {
            put('c2', ca)
        }
        else {
            s = true;
        }
    }

    if (s == true) {
        var t
        for (let i = 0; i < 3; i++) {
            t = false;
            var b = i + 1
            if (i == 0) {
                b = 2
            }
            console.log(i, b)
            if (puten2[i] == 'c1') {
                if (puten2[b] == 't1') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[b] == 'm') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[b] == 't2') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[b] == 'c2') {
                    put('t1', ca)
                    puten3.push('t1')
                }
                else if (puten2[b] == 'c4') {
                    t = true;
                }
                else if (puten2[b] == 'c3') {
                    put('t2', ca)
                    puten3.push('t2')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 't1') {
                if (puten2[b] == 'c1') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[b] == 'c2') {
                    put('c1', ca)
                    puten3.push('c1')
                }
                else if (puten2[b] == 'm') {
                    put('t4', ca)
                    puten3.push('t4')
                }
                else if (puten2[2] == 't4') {
                    put('m', ca)
                    puten3.push('m')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 'c2') {
                if (puten2[2] == 't1') {
                    put('c1', ca)
                    puten3.push('c1')
                }
                else if (puten2[2] == 'm') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[2] == 't3') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[2] == 'c4') {
                    put('t3', ca)
                    puten3.push('t3')
                }
                else if (puten2[2] == 'c3') {
                    t = true;
                }
                else if (puten2[2] == 'c1') {
                    put('t1', ca)
                    puten3.push('t1')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 't2') {
                if (puten2[2] == 'c1') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[2] == 'm') {
                    put('t3', ca)
                    puten3.push('t3')
                }
                else if (puten2[2] == 'c3') {
                    put('c1', ca)
                    puten3.push('c1')
                }
                else if (puten2[2] == 't3') {
                    put('m', ca)
                    puten3.push('m')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 'm') {
                if (puten2[2] == 'c1') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[2] == 't1') {
                    put('t4', ca)
                    puten3.push('t4')
                }
                else if (puten2[2] == 'c2') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[2] == 't3') {
                    put('t2', ca)
                    puten3.push('t2')
                }
                else if (puten2[2] == 'c4') {
                    t = true;
                }
                else if (puten2[2] == 't4') {
                    put('t1', ca)
                    puten3.push('t1')
                }
                else if (puten2[2] == 'c3') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[2] == 't2') {
                    put('t3', ca)
                    puten3.push('t3')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 'c3') {
                if (puten2[b] == 't2') {
                    put('c1', ca)
                    puten3.push('c1')
                }
                else if (puten2[b] == 'm') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[b] == 't4') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[b] == 'c1') {
                    put('t2', ca)
                    puten3.push('t2')
                }
                else if (puten2[b] == 'c2') {
                    put('m',ca)
                    puten3.push("t2")
                }
                else if (puten2[b] == 'c4') {
                    put('t4', ca)
                    puten3.push('t4')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 't4') {
                if (puten2[b] == 'c3') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[b] == 'm') {
                    put('t1', ca)
                    puten3.push('t1')
                }
                else if (puten2[b] == 'c4') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[b] == 't1') {
                    put('m', ca)
                    puten3.push('m')
                } else {
                    t = true;
                }
            }
            else if (puten2[i] == 'c4') {
                if (puten2[b] == 't4') {
                    put('c3', ca)
                    puten3.push('c3')
                }
                else if (puten2[b] == 'm') {
                    put('c1', ca)
                    puten3.push('c1')
                }
                else if (puten2[b] == 't3') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[b] == 'c2') {
                    put('t3', ca)
                    puten3.push('t3')
                }
                else if (puten2[b] == 'c3') {
                    put('t4', ca)
                    puten3.push('t4')
                }
                else if (puten2[b] == 'c1') {
                    t = true;
                }
                else {
                    t = true;
                }
            }
            else if (puten2[i] == 't3') {
                if (puten2[b] == 'c4') {
                    put('c2', ca)
                    puten3.push('c2')
                }
                else if (puten2[b] == 'm') {
                    put('t2', ca)
                    puten3.push('t3')
                }
                else if (puten2[b] == 'c2') {
                    put('c4', ca)
                    puten3.push('c4')
                }
                else if (puten2[b] == 't2') {
                    put('m', ca)
                    puten3.push('m')
                } else {
                    t = true;
                }
            }
            if (t == false) {
                break
            }
        }

    }
}  