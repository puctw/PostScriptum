import { int, bigint, text, singlestoreTable } from "drizzle-orm/singlestore-core";

export const users = singlestoreTable("users_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  name: text("name"),
  age: int("age"),
  tipo_de_plano: text("tipo_de_plano"), // base or pro
  username: text("username"),
  password: text("password"),
  email: text("email"),
  numero_de_telemovel: text("numero_de_telemovel"),
  cartao_de_cidadao: text("cartao_de_cidadao"),
});

export const contas = singlestoreTable("contas_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  site_associado: text("site_associado"),
  username_conta: text("username_conta"),
  password_conta: text("password_conta"),
});

export const guardioes = singlestoreTable("guardioes_table", {
  id: bigint("id", { mode: "bigint" }).primaryKey().autoincrement(),
  email_guardiao: text("email_guardiao"),
  numero_de_telemovel_guardiao: text("numero_de_telemovel_guardiao"),
  dono_id: bigint("dono_id", { mode: "bigint" }),
});