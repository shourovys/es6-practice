class Phone {
    constructor(modelName, price) {
        this.model = modelName;
        this.price = price;
        this.brand = "Nokia mara gasa"
    }
}


const phone1 = new Phone("Nokia 1100", 999);
const phone2 = new Phone('moto 33', 989);
console.log(phone1)
console.log(phone2)