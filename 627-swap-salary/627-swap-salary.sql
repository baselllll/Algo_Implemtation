# Write your MySQL query statement below
UPDATE Salary set sex=
CASE
  WHEN sex='m' then 'f'
  WHEN sex='f' then 'm'
END 

