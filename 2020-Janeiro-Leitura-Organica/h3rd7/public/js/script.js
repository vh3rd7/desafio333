const  text_area = document.getElementById('text_area'),
btnStart = document.getElementById('start'),
time_info = document.getElementById('time_info');;
var text, time = 0;

function wordCount() {

  let text = text_area.value.normalize('NFD')
             .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
             .replace(/\n/g, ' ').replace(/ +/g, ' ').trim(), 

      info = document.getElementById('txtbox_info');

  this.text = text;

  if (text == '') { 
    info.textContent = 'Numero de palavras digitadas.'; 
  } else {
    this.text = text;
    if (text.split(' ').length == 1) { 
      info.textContent = '1 Palavra'; 
    } else {
      info.textContent = text.split(' ').length + ' Palavras';
    }
  }
}

function startTest() {
  wordCount();
  let text = this.text;

    // field check
    if (text == '' || text == ' ') {
        getRandomText();
        setTimeout(timer, 1000);
    } else {
        this.text = text;
        timer();
    }
}

function clearTest() {
    // clear text area
    this.text = '';
    text_area.value = this.text;
    timer();
    wordCount();
}

function timer() {

    let hour, minute, second, compass;

    if (time == 0 && text != '') {
        start();
    } else if (text == '') {
        clear();
    } else {
        stop();
    }

    function start() {
        btnStart.textContent = 'Stop';
        this.compass = setInterval(timerClick, 1000);
    }

    function stop() {
        // TODO
        // compartilhar 
        // botão start > compartilhar
        
        clearInterval(this.compass);
        alert(this.time / 60);
        console.log(sendResultToEmail(), 'stopped');
        btnStart.textContent = 'Start';

    }

    function clear() {
        clearInterval(this.compass);
        this.time = 0;
        btnStart.textContent = 'Start';
        time_info.textContent = '';
    }

    function timerClick() {
        this.time += 1;
        time_info.textContent = time; //(hour+':'+minute+':'+second);
    }
}

function getRandomText() {
    const textFileArray = [];
    
    const loren = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum tortor molestie neque elementum tristique. Nullam posuere ligula vitae dui semper suscipit. Etiam id posuere sapien. Nullam fermentum purus vitae lacus gravida blandit at ut mi. Donec tincidunt, dolor lobortis sagittis porta, erat odio dapibus tellus, id tempus neque ipsum et justo. Vestibulum dolor neque, elementum in rhoncus et, rhoncus et ex. Sed vulputate sodales sapien, id congue nisi fringilla nec. Nunc eu tortor semper, semper purus non, volutpat sapien. Suspendisse potenti. Nullam euismod malesuada mauris, a aliquet metus lacinia sed. Sed sed suscipit justo, eget aliquet sapien. In rhoncus felis at elementum maximus.

    Aenean volutpat eleifend egestas. Aliquam libero ante, convallis id orci a, consequat finibus leo. Maecenas vulputate augue at diam posuere, nec tincidunt turpis suscipit. Sed et tempor neque. Fusce sagittis, dolor eu rutrum congue, nulla lorem efficitur est, vitae euismod orci libero a ligula. Sed risus dolor, dictum sit amet elementum in, consectetur sit amet diam. Cras et tortor lobortis, aliquet odio vel, sollicitudin elit. `;
    
    // TODO
    this.text = loren;
    text_area.value = this.text;
    wordCount();
    
}

function sendResultToEmail() {
    // TODO
    // usuario > email do usuario > dados
    t = 'Texto: ' + text + ', Tempo: ' + time;
    // Enviar E-Mail
    return t;
}
