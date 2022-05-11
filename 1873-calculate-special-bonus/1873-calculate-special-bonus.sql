

SELECT employee_id,
    CASE 
        WHEN employee_id = 2 THEN 0
        WHEN (MOD(employee_id,2) = 1) and (substring(name,1,1) <> 'M') THEN salary
        ELSE 0
    END as bonus
FROM Employees