## generator
ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" user

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" type-user

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" product

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" supplier

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" Warehouse

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" Warehouse-product


ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" customer

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" movement

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" movement-type

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" store

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" purchase

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" sale

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" sale-detail

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" purchase-detail

ts-node "C:/Users/rc/Desktop/project test/scripter/generator/generator-nest-entities" "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\admin" supplier-product


<!-- docker-compose-up -->

 ## docker

docker run -e POSTGRES_USER=root -e POSTGRES_PASSWORD=asd456 -e POSTGRES_DB=panificadora -p 3306:5433 -d postgres

## docker backup

docker exec -t panificadora-api_postgres_1 pg_dump -U root -s panificadora > "C:\Users\rc\Desktop\project test\implements\panificadora\panificadora-api\src\backup\panificadora-schema.sql"
