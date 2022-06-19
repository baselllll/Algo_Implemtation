select id,'Root' as type
from Tree
where p_id is null

union 


SELECT DISTINCT id, "Leaf" as type FROM Tree
WHERE p_id IS NOT NULL AND id not in(select p_id from tree where p_id is not null)



union

SELECT DISTINCT id, "Inner" as type FROM Tree
WHERE p_id IS NOT NULL AND id in(select p_id from tree where p_id is not null)
ORDER BY id