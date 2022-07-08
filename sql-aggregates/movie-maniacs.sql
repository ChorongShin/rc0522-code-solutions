select
  concat("c"."firstName",' ', "c"."lastName") as "customerName",
  sum("p"."amount") as "totalAmount"
  from "customers" as "c"
  join "payments"as "p" using ("customerId")
  group by "c"."firstName", "c"."lastName"
  order by sum("p"."amount") desc;
