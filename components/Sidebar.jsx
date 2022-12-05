import { Image, FormControl, Nav } from "react-bootstrap";
import Icon from "./Icon";

export default function Sidebar() {

    const MenuItem = class {
        constructor(nome, icone) {
            this.nome = nome;
            this.icone = icone;
        }
    }

    const menu = [
        new MenuItem('Página Inicial', 'house-door'),
        new MenuItem('Pesquisa', 'search'),
        new MenuItem('Explorar', 'compass'),
        new MenuItem('Mensagens', 'messenger'),
        new MenuItem('Notificações', 'heart'),
        new MenuItem('Criar', 'plus-square'),
        new MenuItem('Perfil', 'person-circle'),
    ]

    return (
        <Nav className='flex-column gap-3 my-auto'>
            <Nav.Link >
                {/* <Image fluid className='w-100' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'></Image> */}
            </Nav.Link>
            {
                menu.map((item, index) =>
                    <Nav.Link id={index} className='d-flex gap-2 align-items-center text-dark'>
                        <Icon name={item.icone} className='text-dark' size={4} />
                        {item.nome}
                    </Nav.Link>
                )
            }
            <Nav.Link className='mt-auto'>
                <Icon name='person-circle' className='text-dark' /> Mais
            </Nav.Link>
        </Nav>
    )
}