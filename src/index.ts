export class ColorLog {
  static success(msg: string) {
    console.log(`%c ${msg}`, "color: green");
  }
  static error(msg: string) {
    console.log(`%c ${msg}`, "color: red");
  }
  static warning(msg: string) {
    console.log(`%c ${msg}`, "color: orange");
  }
}
