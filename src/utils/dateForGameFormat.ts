const options: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};

 const ruDateGame = new Intl.DateTimeFormat("ru", options);



class DateGame {
  constructor() {}

  dateEndUpdateFormat(timer: Date) {
    const endUpdate = this.nowDate.setMilliseconds( Number(this.nowDate.getMilliseconds()) + Number(timer));
    return this.formatedTime(endUpdate)
  };

  vievDate(value:number) {
    const dateUpdate = this.timeTransferMs(value)
   return this.formatedTime(dateUpdate)
  }

  public get nowDate(): Date {
    return new Date();
  }

  public timeTransferMs(value: number) {
    return new Date(0,0,0,0,0,0,value);
  }

  public nowDateMiliSeconds() {
    return Date.now();
  }

  public formatedTime(value: Date | number) {
      const ruDateFormat = ruDateGame.format(value)
      return ruDateFormat;
  }
}

const dateGame = new DateGame();

export { dateGame };
