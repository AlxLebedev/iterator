export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Already is in our members');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.members.add(character);
    }
  }

  [Symbol.iterator]() {
    const setSize = this.members.size;
    let currSetSize = 0;
    const team = this.members.values();
    return {
      next() {
        if (currSetSize < setSize) {
          currSetSize += 1;
          return {
            value: team.next().value,
            done: false,
          };
        }
        return {
          done: true,
        };
      },
    };
  }

  toArray() {
    return Array.from(this.members);
  }
}
