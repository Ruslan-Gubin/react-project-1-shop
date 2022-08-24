export {};
// Object type using any присваеваем любой тип
let user: any = {
  name: "Ruslan",
  age: 30,
};
user = "test";

let user4: { name: string; age: number; nickName: string } = {
  name: "Ruslan",
  age: 30,
  nickName: "webDev",
};

type Person = {
  name: string;
  age: number;
  nickName?: string;
  getPass?: () => string;
};
let use: Person = {
  name: "Ruslan",
  age: 30,
  nickName: "webDev",
};

let admin: Person = {
  name: "Max",
  age: 30,
  getPass(): string {
    return `${this.name}${this.age}`;
  },
};
