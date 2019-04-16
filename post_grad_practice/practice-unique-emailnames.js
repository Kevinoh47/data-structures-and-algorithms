/**
 * Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name.  For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered, for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails? 

 

Example 1:

Input: ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails
 

Note:

1 <= emails[i].length <= 100
1 <= emails.length <= 100
Each emails[i] contains exactly one '@' character.
All local and domain names are non-empty.
Local names do not start with a '+' character.
 */

'use strict';

function uniqueEmailCount(str) {
  const inputArr = str.split(',');
  let outputArr = [];

  inputArr.forEach((e)=> {
    let AtSignIndex = e.indexOf('@');
    let PlusSignIndex = e.indexOf('+');
    let localName = e.substr(0, AtSignIndex);
    let domainName = e.substr(AtSignIndex, e.length);

    if(PlusSignIndex !== -1) {
      localName = localName.substring(0, PlusSignIndex);
    }

    localName = localName.replace(/\./g, '');

    let finalVersion = `${localName}${domainName}`;

    if (!outputArr.includes(finalVersion)) {
      outputArr.push(finalVersion);
    }
    
  });

  console.log({outputArr});
  return outputArr.length;
}

const myInput1 = 'ab@domain.com,a.b@domain.com,a.b+c@domain.com,ab@doma.in.com';

let results = uniqueEmailCount(myInput1);

console.log({results});

console.log('\n .... \n');

// version with input array instead of string
/**
 * 
 * @param {*} emails 
 * 
 * https://leetcode.com/problems/unique-email-addresses/submissions/
 * Runtime: 76 ms, faster than 98.68% of JavaScript online submissions for Unique Email Addresses.
Memory Usage: 39 MB, less than 92.48% of JavaScript online submissions for Unique Email Addresses.
 */
function uniqueEmailCount2(emails) {

  let outputArr = [], AtSignIndex, PlusSignIndex, localName, domainName;

  emails.forEach((e)=> {
    AtSignIndex = e.indexOf('@');
    PlusSignIndex = e.indexOf('+');
    localName = e.substr(0, AtSignIndex);
    domainName = e.substr(AtSignIndex, e.length);

    if(PlusSignIndex !== -1) {
      localName = localName.substring(0, PlusSignIndex);
    }
    
    localName = localName.replace(/\./g, '');

    let finalVersion = `${localName}${domainName}`;
    if (!outputArr.includes(finalVersion)) {
      outputArr.push(finalVersion);
    }
    
  });

  console.log({outputArr});
  return outputArr.length;
}

const myInput2 = ['test.email+alex@leetcode.com','test.e.mail+bob.cathy@leetcode.com','testemail+david@lee.tcode.com'];

results = uniqueEmailCount2(myInput2);
console.log({results});

