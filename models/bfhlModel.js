// models/bfhlModel.js

class BFHLModel {
    static processData(data) {
        const numbers = [];
        const alphabets = [];
        let highestLowercase = '';

        data.forEach(item => {
            if (!isNaN(item)) {
                numbers.push(item);
            } else if (item.length === 1 && item.match(/[a-zA-Z]/)) {
                alphabets.push(item);
                if (item.match(/[a-z]/) && item > highestLowercase) {
                    highestLowercase = item;
                }
            }
        });

        return {
            numbers,
            alphabets,
            highestLowercase: highestLowercase ? [highestLowercase] : []
        };
    }
}

module.exports = BFHLModel;
