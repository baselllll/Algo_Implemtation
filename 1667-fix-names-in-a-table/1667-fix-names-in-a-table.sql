# Write your MySQL query statement below


Select user_id, CONCAT(UPPER(LEFT(name, 1)),LOWER(SUBSTRING(name, 2, LENGTH(name)))) as name
from Users
Order By user_id
                   