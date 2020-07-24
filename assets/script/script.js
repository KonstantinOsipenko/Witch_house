const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};
const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: {
        material: 'metal',
        ingridients: {},
    }, shuffle() {
        console.log('shuffling');
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        kitchen.kettle.ingridients[nameOfIngridient] = amount;
        kitchen[nameOfIngridient] = kitchen[nameOfIngridient] - amount;
        console.log('adding ', nameOfIngridient, amount)
        this.shuffle();
    },
    cook(recipe) {
        let someRecipe = magicBook.recipes[recipe];
        let i = true;
        for (let key in someRecipe) {
            if (someRecipe[key] !== kitchen.kettle.ingridients[key]) {
                i = false;
            }
        };
        if (i == true) {
            if (recipe == 'littleDevil') {
                console.log(`You make pure evil and personal minion ${recipe}`);
            } else if (recipe == 'golem') {
                console.log(`You make your personal bodyguard and minion ${recipe}`)
            }
        }
        else {
            console.log('Wrong amount of ingredients');
        };
    },
};
kitchen.addIngridientToKettle('lava', 10);
kitchen.addIngridientToKettle('evil', 999)
kitchen.cook('littleDevil')
