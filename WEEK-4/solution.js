const fs = require('fs');

// Read the contents of the menu.csv file
fs.readFile('menu.csv', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // Parse the CSV data
    const menuItems = data.split('\n').map(line => line.trim().split(','));

    // Organize the parsed data into meal categories
    const menu = {};
    menuItems.forEach(item => {
        const mealType = item[0];
        const mealName = item[1];
        const mealQuantity = item[2];
        const price = parseFloat(item[3].replace('$', ''));
        
        if (!menu[mealType]) {
            menu[mealType] = [];
        }
        menu[mealType].push({ name: mealName, quantity: mealQuantity, price: price });
    });

    // Write the formatted data to the menu.txt file
    const formattedMenu = [];
    for (const mealType in menu) {
        formattedMenu.push(`* ${mealType.charAt(0).toUpperCase() + mealType.slice(1)} Items *`);
        menu[mealType].forEach(item => {
            const formattedPrice = '$' + item.price.toFixed(2);
            const formattedItem = `${formattedPrice}\t${item.name}, ${item.quantity}`;
            formattedMenu.push(formattedItem);
        });
        formattedMenu.push('');
    }

    const output = formattedMenu.join('\n');
    fs.writeFile('menu.txt', output, 'utf8', err => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log('Menu successfully written to menu.txt');
    });
});
