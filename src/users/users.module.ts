import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Users, UsersSchema } from './models/users.schema';

@Module({
  imports: [MongooseModule.forFeature({name: Users.name, schema: UsersSchema})],
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
