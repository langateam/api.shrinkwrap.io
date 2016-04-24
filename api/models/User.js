'use strict'

const Model = require('trails-model')

/**
 * @module User
 * @description TODO document Model
 */
module.exports = class User extends Model {

  static config () {
  }

  static schema (table) {
    table.increments('id').primary()
    table.string('username')
  }
}
