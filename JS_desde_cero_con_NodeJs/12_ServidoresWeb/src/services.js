// importar la base de datos.
const data = require('./MOCK_DATA.json');

const getUsers = () => {
    return data;
};

const createUser = (dataUser) => {
    // crear una variable para almacenar el nuevo usuario.
    let newUser = {
        identificación : data.length + 1,
        ...dataUser
    };
    data.push(newUser);
    return newUser;
};

module.exports = {
    getUsers,
    createUser
};