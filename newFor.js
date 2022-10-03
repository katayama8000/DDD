const say = () => {
    console.log("Hello World");
}


for (let i = 0; i < 10; i++, say()) {
    console.log(i);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//拡張for文
for (let i of array) {
    console.log(i);
}