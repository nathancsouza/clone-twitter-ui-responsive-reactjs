import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData,
  EditButton, 
  LocationIcon, 
  CakeIcon, 
  Followage  
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Edit Profile</EditButton>

        <h1>Nathan Souza</h1>
        <h2>@nathan_c_souza</h2>

        <p>
          Developer at <a href="https://github.com/nathancsouza">@MyGithub</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Vancouver, Canada
          </li>
          <li>
            <CakeIcon />
            Born at January 4, 1992 
          </li>
        </ul>

        <Followage>
          <span>
            following <strong>94</strong>
          </span>
          <span>
            <strong>698</strong> followers
          </span>
        </Followage>
      </ProfileData>
      
      <Feed/>
    </Container>
  )
}

export default ProfilePage;