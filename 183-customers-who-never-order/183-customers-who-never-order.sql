# Write your MySQL query statement below
select name As Customers from Customers LEFT JOIN Orders ON Orders.customerId = Customers.id
where customerId  is null;
