let seriesBt = document.getElementById('series-button');
let contactBt = document.getElementById('contact-button');
let closeBt = document.getElementById('close');
let bpImage = document.getElementById('bpImage');
var showingList = false ;
var showingContact = false ;



seriesBt.addEventListener('click', showSeries);
contactBt.addEventListener('click', showContact);
closeBt.addEventListener('click', hideAll);



function showSeries(){
if (showingContact==true) {
    hideContact();
}
    let elem = document.getElementById('list');
    elem.style.animation= 'show 0.8s ease-in';
    bpImage.style.animation = 'imageHide 0.8s';

    setTimeout(()=>{document.getElementById('list').style.opacity='1';}, 800);
    setTimeout(()=>{document.getElementById('list').style.zIndex='5';}, 800);

    setTimeout(()=>{bpImage.style.right='-200%';}, 800);


    closeBt.style.display = 'block';
    seriesBt.style.fontWeight = '400';
    showingList = true;
}


function showContact(){
    if (showingList==true) {
        hideList();
    }
    let elem = document.getElementById('contact');
    elem.style.animation= 'show 0.8s ease-in';
    bpImage.style.animation = 'imageHide 0.8s';

    setTimeout(()=>{document.getElementById('contact').style.opacity='1';}, 800);
    setTimeout(()=>{document.getElementById('contact').style.zIndex='5';}, 800);

    setTimeout(()=>{bpImage.style.right='-200%';}, 800);


    closeBt.style.display = 'block';
    contactBt.style.fontWeight = '400';

    showingContact = true;


}

function hideList (){
    document.getElementById('list').style.animation= 'hide 0.8s ease-out';
    setTimeout(()=>{document.getElementById('list').style.opacity='0';}, 800);
    setTimeout(()=>{document.getElementById('list').style.zIndex='0';}, 800);

    closeBt.style.display = 'none';
    seriesBt.style.fontWeight = '300';

    showingList = false ;

}
function hideContact () {
    document.getElementById('contact').style.animation= 'hide 0.8s ease-out';
    setTimeout(()=>{document.getElementById('contact').style.opacity='0';}, 800);
    setTimeout(()=>{document.getElementById('contact').style.zIndex='0';}, 800);

    closeBt.style.display = 'none';
    contactBt.style.fontWeight = '300';


    showingContact = false;
}
function hideAll() {
    if (showingList==true) {
        hideList();
    }
    if (showingContact==true) {
        hideContact();
    }
    bpImage.style.animation = 'imageShow 0.8s';
    setTimeout(()=>{bpImage.style.right='0';}, 800);

}


var series = document.getElementById('list').children;
console.log(series);

var activeNumber = 0 ;
var length = 10 ;


function focusOn (number) {
    if (number<0) {
        number = length-1;
    }
    if (number>length-1) {
        number = 0;
    }


    // focusOnPhoto(number);
    activeNumber = number;

    let elem = document.getElementById(series[number].id);

    for (let item=0; item<length; item++) {
        // document.getElementById(series[item].id).style.fontSize = "1.1em";
        document.getElementById(series[item].id).style.opacity = "0.6";
    }


 
    if (number>0 && number<(length-1)) {
        let elem1 = document.getElementById(series[(number-1)].id)
        let elem2 = document.getElementById(series[(number+1)].id)

        // elem.style.fontSize = "1.4em";
        elem.style.opacity = "1";
        // elem1.style.fontSize = "1.2em";
        elem1.style.opacity = "0.8";
        // elem2.style.fontSize = "1.2em";
        elem2.style.opacity = "0.8";
    }
    else if (number==0) {
        let elem2 = document.getElementById(series[(number+1)].id)

        // elem.style.fontSize = "1.4em";
        elem.style.opacity = "1";
        // elem2.style.fontSize = "1.2em";
        elem2.style.opacity = "0.8";
    }
    else if (number == length-1) {
        let elem1 = document.getElementById(series[(number-1)].id)

        // elem.style.fontSize = "1.4em";
        elem.style.opacity = "1";
        // elem1.style.fontSize = "1.2em";
        elem1.style.opacity = "0.8";
    }

}
function focusOut () {
    focusOn(activeNumber);
}


for (let item=0; item<series.length; item++) {
    let id = series[item].id;
    series[item].addEventListener('mouseover', function() { focusOn(item) } );
    series[item].addEventListener('mouseout', function() { focusOut() } );

}

window.addEventListener("keydown", function(event) {
    if (event.defaultPrevented) {
      return;
    }
    if (event.code === "ArrowDown"){
        // Handle "down"
        if (activeNumber<(series.length-1)) {
            focusOn(activeNumber+1);
        }
        else if (activeNumber==series.length-1) {
            activeNumber=0;
            focusOn(activeNumber);

        }
    } else if (event.code === "ArrowUp"){
        // Handle "up"
        if (activeNumber>0) {
            focusOn(activeNumber-1);
        }
        else if (activeNumber==0) {
            activeNumber=series.length-1;
            focusOn(activeNumber);
        }
        } 
    event.preventDefault();
  }, true);
