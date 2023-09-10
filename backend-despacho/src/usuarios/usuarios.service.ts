import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  private readonly logger = new Logger('UsuarioService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async checkPassword(password: string, passwordDB: string): Promise<boolean> {
    return await bcrypt.compare(password, passwordDB);
  }

  async findByUsername(username: string) {
    return await this.usuarioRepository.findOneBy( {username:username});
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const hash = await this.hashPassword(createUsuarioDto.password);
      const usuario = this.usuarioRepository.create({ ...createUsuarioDto, password: hash });
      await this.usuarioRepository.save(usuario);
      return usuario;
    } catch (error) {
      //console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const usuarios = await this.usuarioRepository.findBy({status:true});
    return usuarios
  }

  async findOne(id: string) {
    const usuario = await this.usuarioRepository.findOneBy({ id });
    if (!usuario) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    const hash = await this.hashPassword(updateUsuarioDto.password);
    const user = { ...updateUsuarioDto, password: hash };
    return await this.usuarioRepository.update(id, user);
  }

  async remove(id: string) {
    const usuario= await  this.findOne(id);
    await this.update(id,{status:false });
    return {...usuario, id};
  }
}
