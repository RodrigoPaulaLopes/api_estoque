declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string,
      DB_TYPE: string
      DB_HOST: string,
      DB_PORT: string,
      DB_USERNAME: string,
      DB_PASSWORD: string,
      DATABASE: string,
      SALT: string 
  }
}
  }

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }