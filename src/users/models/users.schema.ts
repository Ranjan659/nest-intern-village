import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type usersDocument = Users & Document;

@Schema()
export class Users{
    @Prop()
    userId: string;

    @Prop()
    username: string;

    @Prop()
    email: string;

    @Prop()
    password: string;
}

export const UsersSchema  =  SchemaFactory.createForClass(Users);