#Subject 3 (2.5 pts)
#TOPIC: REST

# Given the application `app` fill in the `POST` method to the address `/employees` to implement record creation with a series of validations.

# Detailed points:
- If the request body is missing any of the keys the server will reply with `{"message": "employee should have all keys"}`. The response code will be `400`; (0.5 pts)
- If the value for department is not one of Dacă valoarea pentru departament `ACCOUNTING, SALES, HR` the server will reply with `{"message": "invalid department"}`. The response code will be `400`; (0.5 pts)
- If the value for salary is not a number the server will reply with `{"message": "salary must be a number"}`. The response code will be `400`; (0.5 pts)
- If the value for salary is a number < 1000 the server will reply with `{"message": "salary cannot be below minimum"}`. The response code will be `400`; (0.5 pts)
- If correct values have been supplied, the employee will be added. The server will reply with the added record and a response code of `201`. (0.5 pts)