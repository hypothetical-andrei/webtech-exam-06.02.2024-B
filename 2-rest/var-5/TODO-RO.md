#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metoda `POST` la adresa `/employees` pentru a implementa adăugarea cu o serie de validări.

# Punctaj detaliat:
- Dacă s-a trimis un request cu un corp din care lipsește oricare dintre chei serverul va răspunde cu `{"message": "employee should have all keys"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă valoarea pentru departament nu este una dintre `ACCOUNTING, SALES, HR`  serverul va răspunde cu `{"message": "invalid department"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă valoarea pentru salariu nu este un număr, serverul va răspunde cu `{"message": "salary must be a number"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă valoarea pentru salariu este un număr < 1000, serverul va răspunde cu `{"message": "salary cannot be below minimum"}`. Codul de răspuns va fi: `400`; (0.5 pts)
- Dacă s-au dat valori corecte, angajatul va fi adăugat. Corpul răspunsului va conține angajatul adăugat iar codul de răspuns va fi `201`. (0.5 pts)