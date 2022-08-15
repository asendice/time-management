import Constants from 'expo-constants';
import styled from 'styled-components';
const headerHeight = 48;

export const StatusBarContainer = styled.View`
  background: salmon;
  padding-top: ${Platform.OS === 'ios' ? Constants.statusBarHeight : 0}px;
  height: ${Platform.OS === 'ios'
    ? Constants.statusBarHeight + headerHeight
    : headerHeight}px;
`;
