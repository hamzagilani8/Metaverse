function makeCar (manufacturer, modelName, optional = {}){
    var car = {
        "Manufacturer": manufacturer,
        "Model Name": modelName,
        ...optional
    };
    return car;
}

console.log(makeCar("Honda", "Civic"));
console.log(makeCar("Honda", "Civic", {"Color":"Black", "Transmission":"Automatic"}));
