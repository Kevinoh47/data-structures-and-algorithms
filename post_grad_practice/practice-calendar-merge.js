/**
 * https://www.interviewcake.com/question/javascript/merging-ranges?course=fc1&section=array-and-string-manipulation
 * On this one, several of my approaches were close, but I never got it just right. Finally had to look at the solution.
 */
'use strict';

function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  // const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  const meetingsCopy = [...meetings];

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a,b) => {
    return a.startTime - b.startTime;
  });
  
  // Initialize mergedMeetings with the earliest meeting
  let mergedMeetings = [sortedMeetings[0]];

  // start with 1 rather than 0 since you seeded the output array with the first one.
  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length-1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    }
    else {
      // non-overlapping ones get added
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}


let desc, actual, expected;

function assertArrayEquals(a, b, desc) {
  const arrayA = JSON.stringify(a);
  const arrayB = JSON.stringify(b);
  if (arrayA !== arrayB) {
    console.log(`${desc} ... FAIL: ${arrayA} != ${arrayB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}

desc = 'meetings overlap';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
expected = [{ startTime: 1, endTime: 4 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'meetings touch';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([{ startTime: 5, endTime: 6 }, { startTime: 6, endTime: 8 }]);
expected = [{ startTime: 5, endTime: 8 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'meeting contains other meeting';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([{ startTime: 1, endTime: 8 }, { startTime: 2, endTime: 5 }]);
expected = [{ startTime: 1, endTime: 8 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'meetings stay separate';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'multiple merged meetings';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([
  { startTime: 1, endTime: 4 },
  { startTime: 2, endTime: 5 },
  { startTime: 5, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 8 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'meetings not sorted';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([
  { startTime: 5, endTime: 8 },
  { startTime: 1, endTime: 4 },
  { startTime: 6, endTime: 8 },
]);
expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);

desc = 'oneLongMeetingContainsSmallerMeetings';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 5 },
  { startTime: 6, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 },
]);
expected = [
  { startTime: 1, endTime: 12 },
];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);


desc = 'sample input';
console.log(`\n ... ${desc} ...\n`);
actual = mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
expected = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
];
console.log({actual});
console.log({expected});
assertArrayEquals(actual, expected, desc);



