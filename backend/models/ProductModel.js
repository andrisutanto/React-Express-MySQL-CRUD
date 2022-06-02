import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define('products', {
    title: DataTypes.STRING,
    price: DataTypes.DOUBLE
}, {
    freezeTableName: true
});

export default Product;

(async()=>{
    await db.sync();
})();