select "line1", as "address",
       "district",
       "city"."name" as "city",
       "country"."name" as "country"
  from "addresses"
  join "cities" as "city" using ("cityId")
  join "countries" as "country" using ("countryId");
