const hitter = {
  name: "Joe Random",
  pwr: 74,
  con: 61,
  eye: 55,
  bnt: 82,
  ovr: 68,

  overall() {
    return this.ovr;
  },

  hit(onBase) {
    this.ovr -= onBase;
  },
};

const pitcher = {
  name: "John Smith",
  vel: 91,
  ctr: 72,
  loc: 56,
  mov: 73,
  ovr: 73,

  overall() {
    return this.ovr;
  },

  hit(onBase) {
    this.ovr -= onBase;
  },
};
