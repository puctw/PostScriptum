import 'dotenv/config';
import { drizzle } from "drizzle-orm/singlestore";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection("singlestore://nuno-26d2c:~tt(nN]h6qFoV;*oXG]i3@svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com:3333/db_nuno_57a9e?ssl={}");

export const db = drizzle({ client: connection });