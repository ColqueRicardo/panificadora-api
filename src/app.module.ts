import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainModule } from './admin/admin.module';

@Module({
  imports: [MainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
