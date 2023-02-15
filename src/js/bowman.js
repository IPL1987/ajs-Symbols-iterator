import Character from './character.js';

export default class Bowman extends Character {
  constructor(name, type = 'Bowman') {
    super(name, type);
    this.attack = 40;
    this.defens = 10;
  }
}
