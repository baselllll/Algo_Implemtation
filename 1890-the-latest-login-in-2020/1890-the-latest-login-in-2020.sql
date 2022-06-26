# Write your MySQL query statement below
SELECT user_id,max(time_stamp) as last_stamp FROM Logins
WHERE time_stamp LIKE '%2020%'
group by user_id