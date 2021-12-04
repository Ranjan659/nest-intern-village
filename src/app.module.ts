import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(
    'mongodb+srv://ranjan219:ranjan219@nest-first.ymc4v.mongodb.net/internVillage?retryWrites=true&w=majority'
    ),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
