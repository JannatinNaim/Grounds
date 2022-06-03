const JOURNAL = [
  { events: ["carrot", "exercise", "weekend"], squirrel: false },
  { events: ["bread", "pudding", "brushed teeth", "weekend", "touched tree"], squirrel: false },
  { events: ["carrot", "nachos", "brushed teeth", "cycling", "weekend"], squirrel: false },
  { events: ["brussel sprouts", "ice cream", "brushed teeth", "computer", "weekend"], squirrel: false },
  { events: ["potatoes", "candy", "brushed teeth", "exercise", "weekend", "dentist"], squirrel: false },
  { events: ["brussel sprouts", "pudding", "brushed teeth", "running", "weekend"], squirrel: false },
  { events: ["pizza", "brushed teeth", "computer", "work", "touched tree"], squirrel: false },
  { events: ["bread", "beer", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "weekend", "touched tree"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "television", "weekend"], squirrel: false },
  { events: ["spaghetti", "brushed teeth", "work"], squirrel: false },
  { events: ["brushed teeth", "computer", "work"], squirrel: false },
  { events: ["lettuce", "nachos", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["cauliflower", "reading", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "exercise", "work"], squirrel: false },
  { events: ["spaghetti", "brushed teeth", "reading", "work"], squirrel: false },
  { events: ["carrot", "ice cream", "brushed teeth", "television", "work"], squirrel: false },
  { events: ["spaghetti", "nachos", "work"], squirrel: false },
  { events: ["cauliflower", "ice cream", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "computer", "weekend"], squirrel: true },
  { events: ["potatoes", "ice cream", "brushed teeth", "computer", "weekend"], squirrel: false },
  { events: ["potatoes", "ice cream", "brushed teeth", "work"], squirrel: false },
  { events: ["peanuts", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["pizza", "ice cream", "computer", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work"], squirrel: false },
  { events: ["cauliflower", "candy", "reading", "weekend"], squirrel: false },
  { events: ["lasagna", "nachos", "brushed teeth", "running", "weekend"], squirrel: false },
  { events: ["potatoes", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "work"], squirrel: false },
  { events: ["pizza", "beer", "work", "dentist"], squirrel: false },
  { events: ["lasagna", "pudding", "cycling", "work"], squirrel: false },
  { events: ["spaghetti", "brushed teeth", "reading", "work"], squirrel: false },
  { events: ["spaghetti", "pudding", "television", "weekend"], squirrel: false },
  { events: ["bread", "brushed teeth", "exercise", "weekend"], squirrel: false },
  { events: ["lasagna", "peanuts", "work"], squirrel: true },
  { events: ["pizza", "work"], squirrel: false },
  { events: ["potatoes", "exercise", "work"], squirrel: false },
  { events: ["brushed teeth", "exercise", "work"], squirrel: false },
  { events: ["spaghetti", "brushed teeth", "television", "work"], squirrel: false },
  { events: ["pizza", "cycling", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "beer", "brushed teeth", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "candy", "work"], squirrel: true },
  { events: ["carrot", "peanuts", "brushed teeth", "reading", "work"], squirrel: false },
  { events: ["potatoes", "peanuts", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "nachos", "brushed teeth", "exercise", "work"], squirrel: false },
  { events: ["pizza", "peanuts", "brushed teeth", "television", "weekend"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "cycling", "weekend"], squirrel: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "computer", "work", "touched tree"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "television", "work"], squirrel: false },
  { events: ["potatoes", "brushed teeth", "computer", "work"], squirrel: false },
  { events: ["bread", "candy", "work"], squirrel: false },
  { events: ["potatoes", "nachos", "work"], squirrel: false },
  { events: ["carrot", "pudding", "brushed teeth", "weekend"], squirrel: false },
  { events: ["carrot", "brushed teeth", "exercise", "weekend", "touched tree"], squirrel: false },
  { events: ["brussel sprouts", "running", "work"], squirrel: false },
  { events: ["brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["candy", "brushed teeth", "work"], squirrel: false },
  { events: ["brussel sprouts", "brushed teeth", "computer", "work"], squirrel: false },
  { events: ["bread", "brushed teeth", "weekend"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "weekend"], squirrel: false },
  { events: ["spaghetti", "candy", "television", "work", "touched tree"], squirrel: false },
  { events: ["carrot", "pudding", "brushed teeth", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  { events: ["carrot", "ice cream", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "work"], squirrel: false },
  { events: ["spaghetti", "peanuts", "exercise", "weekend"], squirrel: true },
  { events: ["bread", "beer", "computer", "weekend", "touched tree"], squirrel: false },
  { events: ["brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "peanuts", "brushed teeth", "work", "touched tree"], squirrel: false },
  { events: ["lasagna", "brushed teeth", "television", "work"], squirrel: false },
  { events: ["cauliflower", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["carrot", "reading", "weekend"], squirrel: false },
  { events: ["carrot", "peanuts", "reading", "weekend"], squirrel: true },
  { events: ["potatoes", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lasagna", "ice cream", "work", "touched tree"], squirrel: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "cycling", "work"], squirrel: false },
  { events: ["pizza", "brushed teeth", "running", "work"], squirrel: false },
  { events: ["lettuce", "brushed teeth", "work"], squirrel: false },
  { events: ["bread", "brushed teeth", "television", "weekend"], squirrel: false },
  { events: ["cauliflower", "peanuts", "brushed teeth", "weekend"], squirrel: false },
];

const generatePhiTable = (journal, event) => {
  const phiTable = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    const element = journal[i];

    if (element.squirrel && element.events.includes(event)) phiTable[3] += 1;
    else if (element.squirrel && !element.events.includes(event)) phiTable[2] += 1;
    else if (!element.squirrel && element.events.includes(event)) phiTable[1] += 1;
    else phiTable[0] += 1;
  }
  return phiTable;
};

const generateAllEvents = (journal) => {
  const allEvents = [];
  for (let i = 0; i < journal.length; i++) {
    const events = journal[i].events;
    for (let j = 0; j < events.length; j++) {
      const event = events[j];
      if (!allEvents.includes(event)) allEvents.push(event);
    }
  }
  return allEvents;
};

const calculatePhi = (phiTable) => {
  return (
    (phiTable[3] * phiTable[0] - phiTable[2] * phiTable[1]) /
    Math.sqrt(
      (phiTable[2] + phiTable[3]) *
        (phiTable[0] + phiTable[1]) *
        (phiTable[1] + phiTable[3]) *
        (phiTable[0] + phiTable[2])
    )
  );
};

const calculatePhiValues = (journal, formatted = false) => {
  const allEvents = generateAllEvents(journal);
  const _allPhiValues = [];
  for (let event of allEvents) {
    const phiTable = generatePhiTable(journal, event);
    const phi = calculatePhi(phiTable);
    formatted ? _allPhiValues.push(`${event}: ${phi}`) : _allPhiValues.push(phi);
  }
  return _allPhiValues;
};

const allPhiValues = calculatePhiValues(JOURNAL, false);
const allPhiValuesFormatted = calculatePhiValues(JOURNAL, true);

const viewHighCorrelationValues = (events, _allPhiValues, formatted = false) => {
  const _highCorrelationValues = [];
  for (let i = 0; i < events.length; i++) {
    const event = events[i],
      phi = _allPhiValues[i];
    if (phi < 0.1) continue;
    formatted ? _highCorrelationValues.push(`${event}: ${phi}`) : _highCorrelationValues.push(phi);
  }
  return _highCorrelationValues;
};

const highCorrelationValues = viewHighCorrelationValues(generateAllEvents(JOURNAL), calculatePhiValues(JOURNAL), true);

for (let entry of JOURNAL) {
  if (entry.events.includes("peanuts") && !entry.events.includes("brushed teeth")) {
    entry.events.push("peanut teeth");
  }
}

const peanutTeeth = calculatePhi(generatePhiTable(JOURNAL, "peanut teeth"));
console.log(peanutTeeth);
