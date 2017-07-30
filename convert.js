const fs = require('fs'),
    dsv = require('d3-dsv');

const years = [2012,2016];

years.forEach((year) => {
    let basePath = __dirname + '/' + year + '/json/';

    let files = fs.readdirSync(basePath);

    let positions = [];

    files.forEach((file) => {
        let position = JSON.parse(fs.readFileSync(basePath + file));

        positions.push(position);
    });

    fs.writeFileSync(basePath.replace('json/','') + 'positions.csv',dsv.csvFormat(positions));
});