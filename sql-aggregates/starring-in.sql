select
    "genres"."name" as "genreType",
    count("genres".*) as "numberOfGenres"
    from "genres"
    join "filmGenre" using ("genreId")
    join "castMembers" using ("filmId")
    join "actors" using ("actorId")
    where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
    group by "genres"."name";

-- Alternative Answer using the actor's id number
-- select
--     "genres"."name" as "genreType",
--     count("genres".*) as "numberOfGenres"
--     from "genres"
--     join "filmGenre" using ("genreId")
--     join "castMembers" using ("filmId")
--     join "actors" using ("actorId")
--     where "actors"."actorId" = 178
--     group by "genres"."name";
