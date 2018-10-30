function mergeLists(lla, llb) {

  let newLength = lla.length + llb.length;
  let i = 0;
  let aCurrent = lla.head;
  let bCurrent = llb.head;
  
  let aTempNext;
  let bTempNext;

  llb.head = null; // remove head from second ll

  for (i; i < newLength; i++) {
    if (aCurrent && bCurrent) {

      aOldNext = aCurrent.next;
      bOldNext = bCurrent.next;

      aCurrent.next = bCurrent;
      bCurrent.next = aOldNext;

      aCurrent = aOldNext;
      bCurrent = bOldNext;
      }
    }
   ///else if (aCurrent && !bCurrent)
   ///else if (!aCurrent && bCurrent)
  }

}