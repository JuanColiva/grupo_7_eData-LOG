module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        descripcion: {
            type: dataTypes.INTEGER
        },
        plan: {
            type: dataTypes.INTEGER
        },
        imagene:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    };
    Producto = sequelize.define(alias, cols, config)

    return Producto
}