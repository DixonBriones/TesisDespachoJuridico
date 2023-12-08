import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile,Query } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { DocumentosService } from './documentos.service';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { diskStorage } from 'multer';
import { FileNameDocument, destinationDocument ,destinationEditDocument} from './documentos.helper';

@Controller('documento')
export class DocumentosController {
  constructor(private readonly documentosService: DocumentosService) {}

  @Post("upload/:id")
  @UseInterceptors(
    FileInterceptor(
      'file',
      {
        storage:diskStorage({
          destination:destinationDocument,
          filename: FileNameDocument
        })
      }
    )
  )
  subirArchivo(@UploadedFile() file: Express.Multer.File,@Body() createDocumentoDto: CreateDocumentoDto) {
    return this.documentosService.subirArchivo(file,createDocumentoDto);
  }

  @Get()
  findAll() {
    return this.documentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentosService.findOne(id);
  }

  @Patch(':idCase/:id')
  @UseInterceptors(
    FileInterceptor(
      'file',
      {
        storage:diskStorage({
          destination:destinationEditDocument,
          filename: FileNameDocument
        })
      }
    )
  )
  update(@UploadedFile() file: Express.Multer.File,@Param('idCase') idCase: string,@Param('id') id: string, @Body() updateDocumentoDto: UpdateDocumentoDto) {
    return this.documentosService.update(id, updateDocumentoDto,file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentosService.remove(id);
  }

  @Get('abogado/:id')
  findAbogadoEvent(@Param('id') id: string, @Query('q') q?: string) {
    return this.documentosService.findDocumentoAbogado(id,q);
  }
  
}
