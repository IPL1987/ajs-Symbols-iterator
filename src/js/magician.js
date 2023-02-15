import Character from './character.js';

export default class Magician extends Character {
  constructor(name, type = 'Magician') {
    super(name, type);
    this.attack = 40;
    this.defens = 10;
  }
}
