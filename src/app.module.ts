import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import {  } from './tasks.service/tasks/shared';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks.service/tasks.service';
import { TasksService } from './shared/tasks.service/tasks.service';
import { TasksService } from './tasks.service/tasks.service';
import {  } from './tasks.service/tasks/shared';
import {  } from './tasks.service/tasks/shared';
import { TasksController } from './tasks/tasks.controller';
import {  } from './tasks.service/tasks/shared';

@Module({
  imports: [TasksModule],
  controllers: [AppController, TasksController],
  providers: [AppService,, TasksService , ],
})
export class AppModule {}
