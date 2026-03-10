(
    SELECT
        users.name AS results
    FROM movierating
    LEFT JOIN users ON users.user_id = movierating.user_id
    GROUP BY
        users.name
    ORDER BY
        COUNT(movierating.user_id) DESC, users.name 
    LIMIT 1
)

UNION ALL

(
    SELECT
        movies.title AS results
    FROM movierating
    LEFT JOIN movies ON movies.movie_id = movierating.movie_id
    WHERE created_at >= '2020-02-01'
      AND created_at <  '2020-03-01'
    GROUP BY
        movies.title
    ORDER BY
        AVG(movierating.rating) DESC, movies.title
    LIMIT 1
);