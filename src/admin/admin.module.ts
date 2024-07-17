import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { Module } from '@nestjs/common'

@Module({
	imports: [
		UserModule,
			ProductModule,
],
})
export class AdminModule { }
