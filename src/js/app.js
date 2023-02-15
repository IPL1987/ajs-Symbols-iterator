export default class Team {
  constructor() {
    this.players = new Set();
  }

  add(character) {
    if (this.players.has(character)) {
      throw new Error('The character already exist!');
    }
    this.players.add(character);
  }

  addAll(characters) {
    this.players = new Set([...this.players, ...characters]);
  }

  toArray() {
    return [...this.players];
  }

  [Symbol.iterator]() {
    const characters = this.toArray();
    return {
      current: 0,
      last: characters.length,
      next() {
        if (this.current < this.last) {
          const player = characters[this.current];
          this.current += 1;
          return { dine: false, value: player };
        }
        return { done: true };
      },
    };
  }
}
