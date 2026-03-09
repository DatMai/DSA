-- nếu recordDate là timestamp hoặc date
SELECT w2.id
FROM Weather w1
JOIN Weather w2
  ON w2.recordDate::date = w1.recordDate::date + 1
WHERE w2.temperature > w1.temperature;