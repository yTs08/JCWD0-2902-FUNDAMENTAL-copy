class Employee {
  name: string;
  workingHours: number;
  constructor(name: string) {
    this.name = name;
    this.workingHours = 0;
  }
  addWorkingHours(hours: number) {
    this.workingHours += hours;
  }
  calculateTotalSalary() {}
}

// FullTime employee
class FullTimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: any) {
    super(name);
    this.hourlyRate = 100000; // fulltime hour
    this.extraHourlyRate = 75000; // for more than 6 hours
  }
  calculateTotalSalary(): number {
    let totalSalary = 0;
    if (this.workingHours > 6) {
      totalSalary =
        6 * this.hourlyRate + (this.workingHours - 6) * this.extraHourlyRate;
    } else {
      totalSalary = this.workingHours * this.hourlyRate;
    }
    return totalSalary;
  }
}
// part time employee
class PartTimeEmployee extends Employee {
  hourlyRate: number;
  extraHourlyRate: number;
  constructor(name: any) {
    super(name);
    this.hourlyRate = 50000; // part time hour salary
    this.extraHourlyRate = 30000; // for extra hour salary
  }
  calculateTotalSalary() {
    let totalSalary = 0;
    if (this.workingHours > 6) {
      totalSalary =
        6 * this.hourlyRate + (this.workingHours - 6) * this.extraHourlyRate;
    } else {
      totalSalary = this.workingHours * this.hourlyRate;
    }
    return totalSalary;
  }
}
const Employee1 = new FullTimeEmployee("yaron");
// FullTimeEmployee.addWorkingHours(8);
Employee1.addWorkingHours(8);
console.log(`${Employee1.name} salary is ${Employee1.calculateTotalSalary()}`);

const bogel = new PartTimeEmployee("bogel");
bogel.addWorkingHours(8);
console.log(`${bogel.name} salary is ${bogel.calculateTotalSalary()}`);

class player {
  name: string;
  health: number;
  power: number;
  constructor(name: string, health: number = 100, power: number = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }
  Hit(power: number) {
    this.health -= power;
    if (this.health <= 0) {
      this.health = 0;
    }
    console.log(`kena damage ${power}, jadi ${this.health}`);
  }
  useItem(item: any) {
    console.log(
      `${this.name} dapat item: health + ${item.health}, power + ${item.power}`
    );
    this.health += item.health;
    this.power += item.power;
  }
  showStatus() {
    console.log(
      `${this.name} (Health => ${this.health}, Power => ${this.power}})`
    );
  }
}
class shootingGames {
  player1: player;
  player2: player;
  constructor(player1: player, player2: player) {
    this.player1 = player1;
    this.player2 = player2;
  }
  getrandomItem() {
    const health = Math.random() < 0.5 ? 0 : 10;
    const power = Math.random() < 0.5 ? 0 : 10;
    return { health, power };
  }
  start() {
    console.log("=========  Game Start  ===========");
    let turn = 1;
    if (this.player1.health > 0 && this.player2.health > 0) {
      console.log(`\nTurn ${turn}:`);
      console.log("Before shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      // Get random items for each player
      const item1 = this.getrandomItem();
      const item2 = this.getrandomItem();

      // Apply items to players
      this.player1.useItem(item1);
      this.player2.useItem(item2);

      // Players shoot each other
      this.player2.Hit(this.player1.power);
      this.player1.Hit(this.player2.power);

      console.log("\nAfter shooting:");
      this.player1.showStatus();
      this.player2.showStatus();

      turn++;
    }
    // game winner
  }
  //   const winner = {
  //     if (this.player1.health <= 1) { console.log()

  //     }
  //   }
}

let newGame = new shootingGames(new player("yaron"), new player("bogel"));
newGame.start();
