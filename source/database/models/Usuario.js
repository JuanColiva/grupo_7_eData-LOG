module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario';
    let cols = {
        id_usuario: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        apellido: {
            type: dataTypes.INTEGER
        },
        password: {
            type: dataTypes.INTEGER
        },
        avatar:{
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    };
    const Usuario = sequelize.define(alias, cols, config)

    //volver a hacer la relacion

    return Usuario
}