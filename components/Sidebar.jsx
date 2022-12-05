import { Image, FormControl, Nav } from "react-bootstrap";
import Icon from "./Icon";

export default function Sidebar() {
    return (
        <Nav className='flex-column gap-3 my-auto'>
            <Nav.Link>
                {/* <Image fluid className='w-100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'></Image> */}
            </Nav.Link>
            <Nav.Link>
                <Icon name='house-door' className='text-dark' /> Página Inicial
            </Nav.Link>
            <Nav.Link>
                <Icon name='house-door' className='text-dark' /> Pesquisa
            </Nav.Link>
            <Nav.Link>
                <Icon name='compass' className='text-dark' />Explorar
            </Nav.Link>
            <Nav.Link>
                <Icon name='messenger' className='text-dark' />Mensagens
            </Nav.Link>
            <Nav.Link>
                <Icon name='heart' className='text-dark' /> Notificações
            </Nav.Link>
            <Nav.Link>
                <Icon name='plus-square' className='text-dark' /> Criar
            </Nav.Link>
            <Nav.Link>
                <Icon name='person-circle' className='text-dark' /> Perfil
            </Nav.Link>
            <Nav.Link className='mt-auto'>
                <Icon name='person-circle' className='text-dark' /> Mais
            </Nav.Link>
        </Nav>
    )
}