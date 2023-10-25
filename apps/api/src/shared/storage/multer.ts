import { DynamicModule, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express'

@Module({})
export class StorageModule {
  static register(): DynamicModule {
    return {
      module: StorageModule,
      imports: [
        MulterModule.register({
          
        })
      ],
      providers: []
    }
  }
}