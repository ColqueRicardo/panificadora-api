import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { Module } from '@nestjs/common'

@Module({
	imports: [
		UserModule,
			ProductModule,
		SupplierModule,
		WarehouseModule,
],
})
export class AdminModule { }
