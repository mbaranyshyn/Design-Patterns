class User {
  constructor(lastVisitDate, globalDiscount, nightDiscount, weekendDiscount, ordersCount, ordersTotalPrice, bonus) {
      this.lastVisitDate = lastVisitDate;
      this.globalDiscount = globalDiscount;
      this.nightDiscount = nightDiscount;
      this.weekendDiscount = weekendDiscount;
      this.ordersCount = ordersCount;
      this.ordersTotalPrice = ordersTotalPrice;
      this.bonus = bonus;
  }
};

let date = new Date();
let night = 23;
let morning = 5;
let workDay = 5;


const getDiscount = user => {
  //weekendDiscount
  if (workDay >= date.getDay())
  user.bonus += user.weekendDiscount;
  
  //Night  discount
  if (night >= date.getHours() && morning <= date.getHours())
      user.bonus += user.nightDiscount;

      user.bonus += user.globalDiscount;      
};

const getBonus = user => {
  let lastDay = moment(user.lastVisitDate);
  let getDay = lastDay.fromNow();
  if (getDay.substr(0,2) <= 10)
      user.bonus += user.ordersCount + user.ordersTotalPrice;    
};

const user = new User('2018-05-26', 5, 5, 3, 5,140, 0);
getDiscount(user);
getBonus(user);



