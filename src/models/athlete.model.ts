import connection from './connection';
import Athlete from '../interfaces/athlete.interface';

export default class AthleteModel {  
  public createLogin = async (
    name: string,
  ): Promise<Athlete> => {
    const [result] = await connection.execute(
      'SELECT username',
      [name],
    );
    const [loginCreated] = result as Athlete[];
    return loginCreated;
  }; 
}