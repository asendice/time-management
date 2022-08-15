import styled from 'styled-components/native';

export const TimerControlButton = styled.TouchableOpacity
`
  height: 75px;
  width: ${props => props.width};
  alignItems: center;
  justifyContent: center;
  borderStyle: solid;
  borderWidth: 3px;
  borderColor: ${props => props.color};
  borderRadius: 8px;
  color: ${props => props.color};
  paddingHorizontal: 10px;
  paddingVeritcal: 30px;
`;

export const ButtonText = styled.Text
`
  color: ${props => props.color};
  fontSize: ${props => props.fontSize ? props.fontSize : 20};
  fontWeight: 600;
`;