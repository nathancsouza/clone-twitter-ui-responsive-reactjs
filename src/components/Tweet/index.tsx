import React from 'react';

import { Container, 
  Retweeted, 
  RocketseatIcon, 
  Body, 
  Avatar, 
  Content, 
  Header,
  Dot, 
  Description, 
  ImageContent, 
  Icons, 
  Status, 
  CommentIcon, 
  RetweetIcon, 
  LikeIcon  
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon/> 
        You retweeted
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time>jun 27</time>
          </Header>

          <Description>Rocket has no reverse gear</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;