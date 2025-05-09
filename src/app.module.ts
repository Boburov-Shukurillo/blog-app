import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://boburovshukurullo:edwjKVYmMrxlzxzd@blog-app-cluster.t2nammr.mongodb.net/?retryWrites=true&w=majority&appName=blog-app-cluster`), BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
