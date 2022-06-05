import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://mernApp:cq0QKbZKVLhWWOD7@cluster0.joocg.mongodb.net/jware?retryWrites=true&w=majority ',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
