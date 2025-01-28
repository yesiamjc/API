module.exports = {
    generateHash: async (password) => {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        return await bcrypt.hash(password, saltRounds);
    },

    comparePassword: async (password, hash) => {
        const bcrypt = require('bcrypt');
        return await bcrypt.compare(password, hash);
    }
};