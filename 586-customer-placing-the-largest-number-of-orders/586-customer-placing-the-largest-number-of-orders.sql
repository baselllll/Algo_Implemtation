SELECT customer_number FROM Orders
GROUP BY customer_number Order By count(customer_number) DESC limit 1