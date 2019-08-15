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

