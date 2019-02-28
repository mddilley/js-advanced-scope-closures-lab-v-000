function produceDrivingRange(blockRange) {
  return function(firstBlock, secondBlock) {
    const distance = secondBlock.slice(0,2) - firstBlock.slice(0,2)
    if(blockRange < distance) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  };
}

function produceTipCalculator(tipPercent) {
  return function(fare) {
    return fare * tipPercent;
  };
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  };
}
