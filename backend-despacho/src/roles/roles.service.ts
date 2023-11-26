import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository,Like,Relation } from 'typeorm';

@Injectable()
export class RolesService {
  private readonly logger = new Logger('RolesService');

  constructor(
    @InjectRepository(Role)
    private readonly rolesRepository: Repository<Role>,
  ) {}

  async create(createRoleDto: CreateRoleDto) {
    const rolExistente=this.findName(createRoleDto.name);
    if(rolExistente && (await rolExistente).status==false){
      await this.update((await rolExistente).id,{status:true });
      return rolExistente
    }
    try {
      const role = this.rolesRepository.create(createRoleDto);
      await this.rolesRepository.save(role);
      return role;
    } catch (error) {
      console.log(error);
      if (error.code === '23505') throw new BadRequestException(error.detail);
      this.logger.error(error);
      throw new InternalServerErrorException('Error no esperado');
    }
  }

  async findAll() {
    const roles = await this.rolesRepository.find({where:{status:true}});
    return roles
  }

  async findName(name: string) {
    const cliente = await this.rolesRepository.findOneBy({ name });
    return cliente;
  }

  async findOne(id: string) {
    const role = await this.rolesRepository.findOneBy({ id });
    if (!role) throw new NotFoundException(`Rol ${id} no encontrado`);
    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto) {
    const role = await this.rolesRepository.preload({
      id: id,
      ...updateRoleDto,
    });
    if (!role) throw new NotFoundException(`Rol ${id} no encontrado`);

    try {

      await this.rolesRepository.save(role);
      return role;

    } catch (error) {
      console.log(error);
      throw new BadRequestException(error.detail);
    }
  }

  async remove(id: string) {
    const role= await  this.findOne(id);
    await this.update(id,{status:false });
    return {...role, id};
  }
}
