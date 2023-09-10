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
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
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
