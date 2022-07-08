select
       "releaseYear",
       "genres"."name" as "genre"
    from "filmGenre"
    join "films" using ("filmId")
    join "genres" using ("genreId")
  where "title" = 'Boogie Amelie';


-- select
--        "releaseYear",
--        "genres"."name" as "genre"
--     from "films"
--     join "filmGenre" using ("filmId")
--     join "genres" using ("genreId")
--   where "title" = 'Boogie Amelie';
