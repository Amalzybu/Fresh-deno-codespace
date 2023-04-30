import { DataTypes } from 'postgres';

class User extends Model {
  // ...
  static timestamps = true;
  static table = 'user';
  static fields = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    email: DataTypes.STRING(25),
    password: DataTypes.STRING(25),
  };
}