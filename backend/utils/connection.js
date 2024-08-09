const { connect } = require('mongoose');

function connection(URL) {
    connect(URL)
        .then(() => {
            console.log('MongoDB Connected Successfully');
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = connection;