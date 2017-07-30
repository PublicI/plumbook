const axios = require('axios'),
    fs = require('fs'),
    yaml = require('js-yaml');

const DATA_URL = 'https://m.gpo.gov/wsgpo/plumBook/getPositionslist?vacant=false&defaultNoOfRecords=10000&pageNo=1&sortVar=ORG_ORDER'

axios.get(DATA_URL)
    .then((response) => {
        if (response.data && response.data.positions) {
            response.data.positions.forEach((position) => {
                fs.writeFileSync(__dirname + '/json/' + position.id + '.json',JSON.stringify(position));
                fs.writeFileSync(__dirname + '/yaml/' + position.id + '.yaml','---\n' + yaml.safeDump(position));
            });
        }
    })
    .catch((error) => {
        console.log(error);
    });
