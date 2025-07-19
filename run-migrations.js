const { migrate } = require("@medusajs/medusa/dist/commands/migrate")
const path = require("path")

migrate({
  options: {
    databaseUrl: process.env.DATABASE_URL,
    migrationsDir: path.join(__dirname, "node_modules/@medusajs/medusa/dist/migrations")
  }
})