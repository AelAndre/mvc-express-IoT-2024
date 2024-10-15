import pool from "../db";
import { RowDataPacket } from "mysql2/promise";

export const findAllStudents = async (): Promise<Student[]> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM alumnos");
  return rows as Student[];
};

export interface Student {
  id?: number;
  nombre: string;
  fecha_nacimiento: string;
}
