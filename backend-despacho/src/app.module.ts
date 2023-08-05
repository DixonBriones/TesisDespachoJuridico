import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ClientesModule } from './clientes/clientes.module';
import { AbogadosModule } from './abogados/abogados.module';
import { CasosLegalesModule } from './casos-legales/casos-legales.module';
import { DocumentosModule } from './documentos/documentos.module';
import { EventosModule } from './eventos/eventos.module';


@Module({
  imports: [UsuariosModule, ClientesModule, AbogadosModule, CasosLegalesModule, DocumentosModule, EventosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
