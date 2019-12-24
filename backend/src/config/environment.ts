export const environment = {
    db: {
        DB_URL: process.env.DB_URL || 'mongodb://localhost/issue-manager'
    },
    server: {
        SERVER_PORT: process.env.SERVER_PORT || 3333
    }
}