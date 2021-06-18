//Первая задача

let imgs = [
        'ladaGranta.jpg',
        'ladaXray.jpg',
        'ladavesta.jpg'
    ],
    divCars = document.querySelector(".cars");

for (let i = 0; i <= imgs.length - 1; i++) {
    let el = document.createElement('img');

    el.src = 'img/cars/' + imgs[i];
    el.setAttribute('data', 'img/' + imgs[i]);
    el.className = 'et__image_small';

    el.onclick = function (e) {
        let el = document.createElement('img'),
            div = document.createElement('div');

        div.className = 'et__image_wrap';
        el.className = 'et__image_big';
        el.src = e.target.attributes.data.value;
        div.onclick = function () {
            div.remove();
        };
        el.onerror = function () {
            alert('Such Image does\'t existing');
            div.remove();
        };
        div.append(el);
        divCars.append(div);

    };
    divCars.append(el);
}


