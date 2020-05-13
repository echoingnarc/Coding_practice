const sam1 = {
    name: 'Sam', 
    age: 4,
};

const sam2 = {
    name: 'Sam', age: 4
};

const sam3 = {
    name: 'Sam',
    classification: {
        //property values can 
        kingdom:'Anamalia',
        //be objects themselves
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',

    },
};

sam3.classification.family;
sam3["classification"].family;
sam3.classification["family"];
sam3["classifcation"]["family"];s

sam3.speak = function() {
    return "Meow!";
};

sam3.speak();

delete sam3.classifcation;
delete sam3.speak;

const s = 'hello';
s.toUpperCase();

