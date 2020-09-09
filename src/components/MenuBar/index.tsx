import React from 'react';

import Button from '../Button';

import { 
  Container, 
  Topside, 
  Logo, 
  MenuButton, 
  HomeIcon, 
  BellIcon, 
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside, 
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Home Page</span>          
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notifications</span>          
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Messages</span>          
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favorites</span>          
        </MenuButton>

        <MenuButton>
          <ProfileIcon className="active" />
          <span>Profile</span>          
        </MenuButton>

        <Button>
          <span>Tweet</span>
        </Button>
      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Nathan Souza</strong>
          <span>@nathan_c_souza</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  )
}

export default MenuBar;