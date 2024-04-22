const database = {
  host: Bun.env.DATABASE_HOST,
  port: Bun.env.DATABASE_PORT,
  user: Bun.env.DATABASE_USER,
  password: Bun.env.DATABASE_PASSWORD,
  name: Bun.env.DATABASE_NAME,
};

console.info(database);
