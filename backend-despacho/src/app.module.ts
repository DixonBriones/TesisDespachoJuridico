import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { AbogadosModule } from './abogados/abogados.module';
import { CasosLegalesModule } from './casos-legales/casos-legales.module';
import { DocumentosModule } from './documentos/documentos.module';
import { EventosModule } from './eventos/eventos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type:'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        database: config.get('DB_NAME'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        autoLoadEntities: true,
        synchronize: true,
       })
    }),
    UsuariosModule, 
    ClientesModule, 
    AbogadosModule, 
    CasosLegalesModule, 
    DocumentosModule,
    EventosModule,
    RolesModule,
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
