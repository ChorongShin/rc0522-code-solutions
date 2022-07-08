select
      count(*) as "totalDVD"
  from "inventory"
  join "stores" using ("storeId");
