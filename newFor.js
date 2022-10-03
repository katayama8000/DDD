const say = () => {
    console.log("Hello World");
}


for (let i = 0; i < 10; i++, say()) {
    console.log(i);
}