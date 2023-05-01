    
import { Model } from 'denogres'
// user model definition comes here   
import { Model } from 'https://deno.land/x/denogres/mod.ts'

interface User {
  id:string;
  firstname:string;
  lastname?:string;
  points?: number;
  team_id:number;
}

class User extends Model {
  static table = 'users';
  static columns = {
    id: { type:'uuid', primaryKey: true },
    firstName: { type:'string', notNull: true },
    lastName: { type:'string', notNull: false },
    points: { type:'number', notNull: false },
    team_id: { type:'number', noNull: true }
  }
} 
    