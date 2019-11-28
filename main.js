
let body = document.querySelector('body');

let row = fromTop => {
    let CTAS = []

    for (let i = 0; i < 4; i++) {
        let CTA = document.createElement('img');
        CTA.src = './assets/upsell-cta.png';
        CTA.classList.add('CTA')
        CTA.style.position = "fixed";
        CTA.style.width = "150px";
        CTA.style.zIndex = "3";
        CTAS.push(CTA)
        // body.insertAdjacentElement("afterbegin", CTA);
    }
    console.log(CTAS[1].style)

    // let fromTop = -50;
    let resolution = 1;
    let randomNumbers = []
    let rotations = []

    for (let i = 0; i < CTAS.length; i++) {
        randomNumbers.push(Math.random() * 100);

        rotations.push(360 * Math.random() * (Math.random() < 0.5 ? -1 : 1));
    }

    // let rotation = 0;
    let draw = () => {

        for (let i = 0; i < CTAS.length; i++) {
            let CTA = CTAS[i];
            body.insertAdjacentElement("afterbegin", CTA);
            CTA.style.top = `${fromTop + i * randomNumbers[i]}px`;
            CTA.style.left = `${i * 500 + 150}px`;
            // console.log(rotations[i])
            CTA.style.transform = `rotate(${rotations[i]}deg)`;

            if (fromTop > window.innerHeight + 200) {
                fromTop = -200;
            }

        }
        for (let i = 0; i < CTAS.length; i++) {
            if (rotations[i] > 0) {
                if (rotations[i] > 360) {
                    rotations[i] = rotations[i] - 360
                }
                rotations[i] = rotations[i] + 1;
            } else if (rotations[i] < 0) {
                if (rotations[i] < -360) {
                    rotations[i] = rotations[i] + 360
                }
                rotations[i] = rotations[i] - 1;
            }
        }
        fromTop += resolution;
    }



    setInterval(() => {
        draw()
    }, 30)

}


row(0);
row(window.innerHeight / 3 * 2);
row(window.innerHeight / 3);