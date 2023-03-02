console.log('Homework# 13');


let h1 = document.querySelector('#mainText');


function* createIdGenerator(){
    let i =0;
    while (true){
        i++;
        yield i;
    } 
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


function changeFont(fontSize) {
    h1.style.fontSize = fontSize + "px";
}


function* renderFontGenerator(ftSize){
    let newFont = ftSize;
    while (true) {
        if (newFont === "up") {
            ftSize += 2;
        } else if (newFont === "down") {
            ftSize -= 2;
        } else {
            ftSize = ftSize;
        }
        changeFont(ftSize);
        newFont = yield ftSize;
    }
}

const fontGenerator = renderFontGenerator(14);

console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);

