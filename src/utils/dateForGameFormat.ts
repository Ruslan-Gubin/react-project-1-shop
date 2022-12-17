const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

const ruDateGame = Intl.DateTimeFormat("ru", options);

class DateGame {
  constructor() {}

  dateEndUpdateFormat(timer: number) {
    const endUpdate = this.nowDate.setSeconds( this.nowDate.getSeconds() + timer);
    return this.formatedTime(endUpdate)
  };

  vievDate(value:number) {
    const dateUpdate = this.timeTransferMs(value)
   return this.formatedTime(dateUpdate)
  }

  public get nowDate() {
    return new Date();
  }

  public timeTransferMs(value: number) {
    return new Date(0,0,0,0,0,value);
  }

  public formatedTime(value: Date | number) {
    return ruDateGame.format(value);
  }
}

const dateGame = new DateGame();

export { dateGame };
