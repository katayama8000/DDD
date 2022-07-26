let array = [7, 3, 10, 5, 1];

for (let i = 0; i < array.length; i++) {
    for (let j = array.length - 1; j > i; j--) {
        if (array[j] < array[j - 1]) {
            let temp = array[j];
            array[j] = array[j - 1];
            array[j - 1] = temp;
        }
    }
}

