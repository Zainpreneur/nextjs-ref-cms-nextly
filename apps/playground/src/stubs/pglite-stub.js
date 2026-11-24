// Local SQLite-only reference: drizzle-kit declares @electric-sql/pglite as an
// optional driver. Next.js's webpack pass still walks that dynamic require in
// dev, so it needs a resolvable module even though the PGlite code path is
// never executed with DB_DIALECT=sqlite.
class PGlite {}

module.exports = {
  PGlite,
  types: {},
};
