interface resurceType {
  count: number;
  total: number;
  incom: number;
}

interface resurceBarType {
  wood: resurceType;
  clay: resurceType;
  iron: resurceType;
  wheat: resurceType;
}

const resurceBar: resurceBarType = {
  wood: {
    count: 350,
    total: 800,
    incom: 80,
  },
  clay: {
    count: 500,
    total: 800,
    incom: 70,
  },
  iron: {
    count: 200,
    total: 800,
    incom: 40,
  },
  wheat: {
    count: 240,
    total: 800,
    incom: 50,
  },
};

const resurceBarCount = {
  wood: resurceBar.wood.count,
  clay: resurceBar.clay.count,
  iron: resurceBar.iron.count,
  wheat: resurceBar.wheat.count,
}

export { resurceBar , resurceBarCount};
