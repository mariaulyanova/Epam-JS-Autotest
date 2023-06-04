// Bonus Task
// Design a real scenario and implement yourself using inheritance/
// encapsulation/polymorphism concepts

// 1. At least 3 classes
// 2. Getter/Setter
// 3. Public/Private properties
// 4. Static Property

class Pokemon {
  #name;
  #type;
  _power;
  _speed;

  static #count = 0;

  constructor(name, type, power, speed) {
    this.#name = name;
    this.#type = type;
    this._power = power;
    this._speed = speed;
    Pokemon.#count++;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }

  get type() {
    return this.#type;
  }

  set type(type) {
    this.#type = type;
  }

  get power() {
    return this._power;
  }

  set power(power) {
    this._power = power;
  }

  get speed() {
    return this._speed;
  }

  set speed(speed) {
    this._speed = speed;
  }

  static get count() {
    return Pokemon.#count;
  }

  attack(moveType) {
    let damageMultiplier;
    switch (moveType) {
      case 'Water':
        damageMultiplier = this.#type === 'Fire' ? 2 : 1;
        break;
      case 'Air':
        damageMultiplier = this.#type === 'Water' ? 2 : 1;
        break;
      case 'Fire':
        damageMultiplier = this.#type === 'Air' ? 2 : 1;
        break;
      default:
        damageMultiplier = 1;
    }

    const damage = this._power * damageMultiplier;
    console.log(`${this.#name} attacked with a ${moveType} attack and dealt ${damage} damage!`);
  }

  displayStats() {
    console.log(`Name: ${this.#name}, Type: ${this.#type}, Power: ${this._power}, Speed: ${this._speed}`);
  }

  static totalPokemonCount() {
    console.log(`There are ${Pokemon.#count} Pokemons.`);
  }
}

class WaterPokemon extends Pokemon {
  #waterTypeMove;

  constructor(name, type, power, speed, waterTypeMove) {
    super(name, type, power, speed);
    this.#waterTypeMove = waterTypeMove;
  }

  get waterTypeMove() {
    return this.#waterTypeMove;
  }

  set waterTypeMove(waterTypeMove) {
    if (typeof waterTypeMove !== 'string') {
      throw new Error('Water type move must be a string');
    }
    this.#waterTypeMove = waterTypeMove;
  }
  attack() {
    super.attack('Water');
    console.log(`Using ${this.#waterTypeMove}!`);
  }
}

class AirPokemon extends Pokemon {
  #airTypeMove;

  constructor(name, type, power, speed, airTypeMove) {
    super(name, type, power, speed);
    this.#airTypeMove = airTypeMove;
  }

  get airTypeMove() {
    return this.#airTypeMove;
  }

  set airTypeMove(airTypeMove) {
    if (typeof airTypeMove !== 'string') {
      throw new Error('Air type move must be a string');
    }
    this.#airTypeMove = airTypeMove;
  }
  attack() {
    super.attack('Air');
    console.log(`Using ${this.#airTypeMove}!`);
  }
}


class FirePokemon extends Pokemon {
  #fireTypeMove;

  constructor(name, type, power, speed, fireTypeMove) {
    super(name, type, power, speed);
    this.#fireTypeMove = fireTypeMove;
  }

  get fireTypeMove() {
    return this.#fireTypeMove;
  }

  set fireTypeMove(fireTypeMove) {
    if (typeof fireTypeMove !== 'string') {
      throw new Error('Fire type move must be a string');
    }
    this.#fireTypeMove = fireTypeMove;
  }

  attack() {
    super.attack('Fire');
    console.log(`Using ${this.#fireTypeMove}!`);
  }
}

const waterPokemon = new WaterPokemon('Goldin', 'Water', 100, 50, 'Bubble Beam');
const airPokemon = new AirPokemon('Pidji', 'Fire', 99, 65, 'Psychic Power');
const firePokemon = new FirePokemon('Charmander', 'Fire', 105, 45, 'Flamethrower');

waterPokemon.attack(); //Goldin attacked with a Water attack and dealt 100 damage! Using Bubble Beam!
airPokemon.attack(); //Pidji attacked with a Air attack and dealt 99 damage! Using Psychic Power!
firePokemon.attack(); //Charmander attacked with a Fire attack and dealt 105 damage! Using Flamethrower!

firePokemon.displayStats(); //Name: Charmander, Type: Fire, Power: 105, Speed: 45
waterPokemon.displayStats(); //Name: Goldin, Type: Water, Power: 100, Speed: 50
airPokemon.displayStats(); //Name: Pidji, Type: Fire, Power: 99, Speed: 65

Pokemon.totalPokemonCount(); //There are 3 Pokemons.
