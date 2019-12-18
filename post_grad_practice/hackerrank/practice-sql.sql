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


/**
https://www.hackerrank.com/challenges/what-type-of-triangle/problem

Write a query identifying the type of each record in the TRIANGLES table using its three side lengths. Output one of the following statements for each record in the table:

    Equilateral: It's a triangle with 

sides of equal length.
Isosceles: It's a triangle with
sides of equal length.
Scalene: It's a triangle with
sides of differing lengths.
Not A Triangle: The given values of A, B, and C don't form a triangle.

Sample Output

Isosceles
Equilateral
Scalene
Not A Triangle

Explanation

Values in the tuple
form an Isosceles triangle, because .
Values in the tuple form an Equilateral triangle, because . Values in the tuple form a Scalene triangle, because .
Values in the tuple cannot form a triangle because the combined value of sides and is not larger than that of side .

*/


select (CASE 
        WHEN ( a = b &&  b = c )  THEN 'Equilateral' 
        WHEN ( ( a = b && a + b > c ) || 
               ( b = c && b + c > a ) || 
               ( a = c && a + c > b ) ) THEN 'Isosceles' 
        WHEN ( (a != b && b != c)  && ( a + b > c )  ) THEN 'Scalene' 
        ELSE 'Not A Triangle' END) as triangle_type 
from TRIANGLES


/* 
https://www.hackerrank.com/challenges/the-pads/problem

Generate the following two result sets:

    Query an alphabetically ordered list of all names in OCCUPATIONS, immediately followed by the first letter of each profession as a parenthetical (i.e.: enclosed in parentheses). For example: AnActorName(A), ADoctorName(D), AProfessorName(P), and ASingerName(S).

    Query the number of ocurrences of each occupation in OCCUPATIONS. Sort the occurrences in ascending order, and output them in the following format:

    There are a total of [occupation_count] [occupation]s.

    where [occupation_count] is the number of occurrences of an occupation in OCCUPATIONS and [occupation] is the lowercase occupation name. If more than one Occupation has the same [occupation_count], they should be ordered alphabetically.

Note: There will be at least two entries in the table for each type of occupation.
*/

-- mysql:
SELECT CONCAT(Name, '(', SUBSTRING(Occupation,1,1),')')
FROM Occupations
ORDER BY Name;

SELECT CONCAT('There are a total of ', COUNT(*), ' ', LOWER(Occupation),'s.')
FROM Occupations
GROUP BY Occupation
ORDER BY COUNT(*), occupation;