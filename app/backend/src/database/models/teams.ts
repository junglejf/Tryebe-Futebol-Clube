import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Teams extends Model {
  id: number;
  teamName!: string;
}

Teams.init({
  id: { type: INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  teamName: { type: STRING(128), allowNull: false, field: 'team_name' },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
