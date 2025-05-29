export default class User {
  constructor({ id, name, firstName, language, email, lastLogin, createdAt }) {
    this.id = id
    this.name = name
    this.firstName = firstName
    this.language = language
    this.email = email
    this.lastLogin = lastLogin
    this.createdAt = createdAt
    // Le mot de passe n'est utilisé que lors de la création ou modification
  }
}