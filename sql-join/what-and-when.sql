select
       "films"."releaseYear",
       "genres"."name"
    from "filmGenre"
    join "films" using ("filmId")
    join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
