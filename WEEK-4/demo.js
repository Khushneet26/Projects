const fs = require("fs");
const { EOL } = require("os");
//function turnInMenu() {
    //return new promises( (resolve, rreject) => {
        //...
    //})
//}
function buildMenuStr(menuObj) {
    let menuStr = " ";
    for (const key in menuObj) {
        menuStr += '* ${menuStr}.Items *${EOL}';
        const value = menuObj[key];
        meals.forEach(meal => {
           menuStr += '${meal.price} ${meal.name} ${meal.quantity}${EOL}`;';
        })
    }
    conasole.log(menuStr);
    return menuStr;
}
function parseMenu(menuStr) {
    const row = (menuStr.split(EOL))
    const menuObj = {
        dinner: [{ name: "sushi a", quantity: 12, price: "$5"}]
    }
    row.forEach( (menuItem) => {
        const [type, name, quantity, price] = menuItem.split(",");
        if (type in menuObj) {
            menuObj[type].push({name, quantity,price});
        }else{
            menuObj[type] = [{name, quantity,price}];
        }
    })
    const formattedMenu = buildMenuStr(menuObj);
    return formattedMenu;

}
readFileP("menu.csv")
   .then( (data) => beautifyMenu(data))
   .then( (formattedMenu) => writeFileP("menu.txt",formattedMenu))
   .catch( (err) => console.log(err));
function readFileP() {
    return new Promise ( (resolve, reject) => {
        fs.readFile(file, "utf8", (err, data) => {
            if (err) {
                reject (err);
            } else {
                resolve(data);
            }
        })
    })
}

function writeFileP() {
    return new Promise ( (resolve, reject) => {
        fs.writeFile(file, "utf8", (err, data) => {
            if (err) {
                reject (err);
            } else {
                resolve();
            }
        })
    })
}
