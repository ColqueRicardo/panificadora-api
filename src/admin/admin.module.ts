import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { WarehouseProductModule } from './warehouse-product/warehouse-product.module';
import { CustomerModule } from './customer/customer.module';
import { MovementModule } from './movement/movement.module';
import { StoreModule } from './store/store.module';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { SaleDetailModule } from './sale-detail/sale-detail.module';
import { PurchaseDetailModule } from './purchase-detail/purchase-detail.module';
import { SupplierProductModule } from './supplier-product/supplier-product.module';
import { MovementTypeModule } from './movement-type/movement-type.module';
import { Module } from '@nestjs/common'

@Module({
	imports: [
		UserModule,
		ProductModule,
		SupplierModule,
		WarehouseModule,
		WarehouseProductModule,
		CustomerModule,
		MovementModule,
		StoreModule,
		PurchaseModule,
		SaleModule,
		SaleDetailModule,
		PurchaseDetailModule,
		SupplierProductModule,
		MovementTypeModule,
	],
})
export class AdminModule { }
