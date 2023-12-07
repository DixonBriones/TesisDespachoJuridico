import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { Repository,Like,Relation } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { Documento } from './entities/documento.entity';

@Injectable()
export class DocumentosService {
  private readonly logger = new Logger('Documento_Service');

  constructor(
    @InjectRepository(Documento)
    private readonly documentoRepository: Repository<Documento>,
  ) {}

  async subirArchivo(file:Express.Multer.File,createDocumentoDto: CreateDocumentoDto){
    try {
      createDocumentoDto.name_document= file.filename;
      createDocumentoDto.path=file.path;
      const documento = this.documentoRepository.create(createDocumentoDto);
      await this.documentoRepository.save(documento);
      return documento;
    } catch (error) {
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const documentos = await this.documentoRepository.find();
    return documentos
  }

  async findOne(id: string) {
    const documento = await this.documentoRepository.findOne({ where:{id:id}});
    if (!documento) throw new NotFoundException(`Documento ${id} no encontrado`);
    return documento;
  }

  async update(id: string, updateDocumentoDto: UpdateDocumentoDto) {
    const documento = await this.documentoRepository.preload({
      id: id,
      ...updateDocumentoDto,
    });
    if (!documento) throw new NotFoundException(`Documento ${id} no encontrado`);

    try {
      await this.documentoRepository.save(documento);
      return documento;
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const documento= await  this.findOne(id);
    await this.documentoRepository.remove(documento)
    return {...documento, id};
  }


  async findDocumentoAbogado(id: string) {
    const evento = await this.documentoRepository.createQueryBuilder('documento')
    .leftJoinAndSelect('documento.legal_case', 'legal_case')
    .leftJoinAndSelect('legal_case.lawyer', 'lawyer')
    .where('legal_case.lawyer.id = :id', { id })
    .getMany();
    if (!evento) throw new NotFoundException(`Evento ${id} no encontrado`);
    return evento;
  }

  

}
