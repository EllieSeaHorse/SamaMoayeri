console.log('hey');


function createGallery(all) {
    document.getElementById('close').addEventListener('click', function() {closeAll(all)});
    document.getElementById('bg-blur').addEventListener('click', function() {closeAll(all)});

    let gallery = document.getElementById(all).children;
    console.log(gallery.length);

    for (let i=0; i < gallery.length; i++) {
        gallery[i].id = i ;
        let photo = document.getElementById(gallery[i].id);
        photo.addEventListener('click', function() { openImage(i, all )}  );
    }

}
function openImage (id, all) {
    let gallery = document.getElementById(all).children;
    let pre, next = 0;

    if (id==0) {
        pre = gallery.length-1;
        next = id+1;
        // console.log(pre);

    }
    else if (id==gallery.length-1) {
        next = 0;
        pre = id-1;
        console.log(next);
    }
    
    else {
        pre = id-1;
        next = id+1;
        console.log(pre);

    }
    for (let i=0; i < gallery.length; i++) {
        gallery[i].id = i ;
        let photo = document.getElementById(gallery[i].id);
        photo.classList.remove('open-focus');
        photo.classList.remove('open-sides2');
        photo.classList.remove('open-sides1');
    }
    document.getElementById('bg-blur').style.display ='block';
    document.getElementById('close').style.display ='block';
    document.getElementById(id).classList.add('open-focus');
    document.getElementById(id).classList.remove('open-sides2');
    document.getElementById(id).classList.remove('open-sides1');

    document.getElementById(pre).classList.add('open-sides2');
    document.getElementById(next).classList.add('open-sides1');
}

function closeAll (all) {
    let gallery = document.getElementById(all).children;


    for (let i=0; i < gallery.length; i++) {
        gallery[i].id = i ;
        let photo = document.getElementById(gallery[i].id);
        photo.classList.remove('open-focus');
        photo.classList.remove('open-sides2');
        photo.classList.remove('open-sides1');

    }
    document.getElementById('bg-blur').style.display ='none';
    document.getElementById('close').style.display ='none';

}
