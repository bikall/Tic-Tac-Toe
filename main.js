function okcli() {
  acc.style.display = 'block'
  pl1 = p1.value
  pl2 = p2.value;
  pl3 = p1.value
  pl4 = p2.value
  playername.style.display = 'flex'
  playername.innerText = pl1
  pco.style.display = 'none'
  container.style.display = 'flex'
  if (pl1 == '') {
    pl1 = 'Player 1'
  }
  if (pl2 == '') {
    pl2 = 'Player 2'
  }

}

let counter = 0;
let drawc = 0;
bts = document.querySelectorAll('button');
flip.addEventListener('click', () => {
  if (pl1 == '') {
    pl1 = 'Player 1'
  }
  if (pl2 == '') {
    pl2 = 'Player 2'
  }
  if (pl1 == '') {
    pl1 = 'Player 1'
  }
    [pl1,pl2]=[pl2,pl1]
  if (playername.innerText == pl2 + ' ' + 'Turn') {
    playername.innerText = pl1 + ' ' + 'Turn'
  }
})
for (items of bts) {
  items.addEventListener('click', function tttf(e) {
    counter++
    e.target.disabled = true;
    if (counter % 2 == 0) {
      e.target.innerText = "X"
      playername.innerText = pl2 + ' ' + 'Turn'
    }
    else {
      e.target.innerText = "O"
      playername.innerText = pl1 + ' ' + 'Turn'
    }
    if (a1.innerText == 'X' && a2.innerText == 'X' && a3.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      a2.style.animation = 'blink 1s infinite'
      a3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }

    if (a1.innerText == 'O' && a2.innerText == 'O' && a3.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      a2.style.animation = 'blink 1s infinite'
      a3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }

    if (b1.innerText == 'O' && b2.innerText == 'O' && b3.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      b1.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      b3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (b1.innerText == 'X' && b2.innerText == 'X' && b3.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      b1.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      b3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (c1.innerText == 'O' && c2.innerText == 'O' && c3.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      c1.style.animation = 'blink 1s infinite'
      c2.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (c1.innerText == 'X' && c2.innerText == 'X' && c3.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      c1.style.animation = 'blink 1s infinite'
      c2.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }

    if (a1.innerText == 'O' && b1.innerText == 'O' && c1.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      b1.style.animation = 'blink 1s infinite'
      c1.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a1.innerText == 'X' && b1.innerText == 'X' && c1.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      b1.style.animation = 'blink 1s infinite'
      c1.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a2.innerText == 'O' && b2.innerText == 'O' && c2.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a2.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c2.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a2.innerText == 'X' && b2.innerText == 'X' && c2.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a2.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c2.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a3.innerText == 'O' && b3.innerText == 'O' && c3.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a3.style.animation = 'blink 1s infinite'
      b3.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a3.innerText == 'X' && b3.innerText == 'X' && c3.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a3.style.animation = 'blink 1s infinite'
      b3.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a1.innerText == 'O' && b2.innerText == 'O' && c3.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a1.innerText == 'X' && b2.innerText == 'X' && c3.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a1.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c3.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a3.innerText == 'O' && b2.innerText == 'O' && c1.innerText == 'O') {
      playername.innerText = pl2 + ' ' + 'Wins'
      a3.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c1.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (a3.innerText == 'X' && b2.innerText == 'X' && c1.innerText == 'X') {
      playername.innerText = pl1 + ' ' + 'Wins'
      a3.style.animation = 'blink 1s infinite'
      b2.style.animation = 'blink 1s infinite'
      c1.style.animation = 'blink 1s infinite'
      a1.disabled = true;
      a2.disabled = true;
      a3.disabled = true;
      b1.disabled = true;
      b2.disabled = true;
      b3.disabled = true;
      c1.disabled = true;
      c2.disabled = true;
      c3.disabled = true;
      drawc++
    }
    if (counter == 10 && drawc == 0) {
      playername.innerText = 'Draw'
    }
    Restart.addEventListener('click', () => {
      a1.innerText = ''
      b1.innerText = ''
      c1.innerText = ''
      c2.innerText = ''
      c3.innerText = ''
      b2.innerText = ''
      b3.innerText = ''
      a2.innerText = ''
      a3.innerText = ''
      a1.disabled = false;
      a2.disabled = false;
      a3.disabled = false;
      b1.disabled = false;
      b2.disabled = false;
      b3.disabled = false;
      c1.disabled = false;
      c2.disabled = false;
      c3.disabled = false;
      counter = 1;
      drawc = 0;
      playername.innerText=pl1+' '+'Turn'
   flip.disabled=false;
   a1.style.animation='none'
   a2.style.animation='none'
   a3.style.animation='none'
   b1.style.animation='none'
   b2.style.animation='none'
   b3.style.animation='none'
   c1.style.animation='none'
   c2.style.animation='none'
   c3.style.animation='none'
    })
    tbl.addEventListener('click',()=>{
      flip.disabled=true;
    })
  })
}
