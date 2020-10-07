import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 40px;
  z-index: 1;
`;

export const SignOutButton = styled.TouchableOpacity`
  position: absolute;
  right: 34px;
  top: 40px;
  z-index: 1;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: relative;
  margin-top: 180px;
`;

export const UserAvatar = styled.Image`
  width: 146px;
  height: 146px;
  border-radius: 73px;
  align-self: center;
`;
