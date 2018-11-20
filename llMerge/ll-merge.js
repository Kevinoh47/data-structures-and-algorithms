const LinkedList = require('../linked-list.js');

function mergeLists(lla, llb) {

  let newll = new LinkedList();

  let newLength = lla.length + llb.length;
  let aCurrent = lla.head;
  let bCurrent = llb.head;
  
  for (let i=0; i < newLength; i++) {
    if (aCurrent && bCurrent) {

      newll.append(aCurrent.value);
      newll.append(bCurrent.value);

      aCurrent = aCurrent.next;
      bCurrent = bCurrent.next;
    }
    else if (aCurrent && !bCurrent) {
      newll.append(aCurrent.value);
      aCurrent = aCurrent.next;
    }
    else if (!aCurrent && bCurrent) {
      newll.append(bCurrent.value);
      bCurrent = bCurrent.next;
    }
  }

  return newll;
}

module.exports = mergeLists;