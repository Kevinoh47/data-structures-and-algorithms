/*
Let be the number of CITY entries in STATION, and let be the number of distinct CITY names in STATION; query the value of from STATION. In other words, find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table.
*/

SET @allCnt = (SELECT COUNT(*) FROM station);
SET @DistCityCount = (SELECT COUNT(Distinct city) FROM station);
SELECT @allCnt - @DistCityCount;

/*
Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.

Sample Input

Let's say that CITY only has four entries: DEF, ABC, PQRS and WXY

Sample Output

ABC 3
PQRS 4

Explanation

When ordered alphabetically, the CITY names are listed as ABC, DEF, PQRS, and WXY, with the respective lengths
and . The longest-named city is obviously PQRS, but there are

options for shortest-named city; we choose ABC, because it comes first alphabetically.

Note
You can write two separate queries to get the desired output. It need not be a single query.
*/

(SELECT city, CHAR_LENGTH(city)
FROM station
order by CHAR_LENGTH(city) ASC, city
limit 1)  

UNION

(SELECT city,  CHAR_LENGTH(city) 
FROM station
order by CHAR_LENGTH(city) DESC, city
limit 1) 

/*
https://www.hackerrank.com/challenges/weather-observation-station-6/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

see: http://www.mysqltutorial.org/mysql-regular-expression-regexp.aspx
Use either REGEXP (with P) or RLIKE
*/

select DISTINCT CITY 
from station
where CITY RLIKE '^(a|e|i|o|u)'

/*cities ending in vowels*/
select distinct city 
from station 
where CITY REGEXP '(a|e|i|o|u)$'

/*city begins and ends with vowel*/
select distinct city 
from station 
where city RLIKE '^(a|e|i|o|u)' AND city RLIKE '(a|e|i|o|u)$'

/* city does NOT begin with vowel*/
select distinct city from station where city NOT REGEXP '^(a|e|i|o|u)'
/*city does NOTE end in a vowel*/
select distinct city from station where city NOT REGEXP '(a|e|i|o|u)$'
/*city either does NOT begin OR end with vowel*/
select distinct city from station where city not regexp '^(a|e|i|o|u)' OR city not regexp '(a|e|i|o|u)$'
/*city does NOT begin AND does not end with vowel*/
select distinct city from station where city not regexp '^(a|e|i|o|u)' AND city not regexp '(a|e|i|o|u)$'

/**
https://www.hackerrank.com/challenges/more-than-75-marks/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

Query the Name of any student in STUDENTS who scored higher than Marks. Order your output by the last three characters of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
*/
select name from students where marks > 75 
order by RIGHT(name,3), 

/*round average city population to int*/
select ROUND(AVG(population)) from CITY

/*https://www.hackerrank.com/challenges/revising-aggregations-the-count-function/problem
Query a count of the number of cities in CITY having a Population larger than . 
*/
select count(*) as Count from city where population > 


/**
Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, but did not realize her keyboard's

key was broken until after completing the calculation. She wants your help finding the difference between her miscalculation (using salaries with any zeroes removed), and the actual average salary.

Write a query calculating the amount of error (i.e.: actual - miscalculated
average monthly salaries), and round it up to the next integer.
**/

/*for some reason, CEILING is accepted here, but ROUND is not -- in this case round rounds down, ceiling goes up*/
select CEILING(avg(salary) - avg(replace(salary,0,'')))from employees
