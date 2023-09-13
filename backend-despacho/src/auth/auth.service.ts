import { Injectable ,BadRequestException} from '@nestjs/common';
import { AuthDTO } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsuariosService } from 'src/usuarios/usuarios.service';

@Injectable()
export class AuthService {

  constructor(private readonly usuariosService: UsuariosService,  private jwtService:JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usuariosService.findByUsername(username);
    if (!user) throw new BadRequestException("No existe el usuario o contraseña incorrecta");

    const isValidPassword = await this.usuariosService.checkPassword(
      password,
      user.password,
    );
    if (!isValidPassword) throw new BadRequestException("No existe el usuario o contraseña incorrecta");

    if (user && isValidPassword) return user;
    
    return null;
  }

  async signIn(user: any) {
    const payload = {
      username: user.username,
      sub: user._id,
    };

    return { access_token: this.jwtService.sign(payload) };
  }


  
}
