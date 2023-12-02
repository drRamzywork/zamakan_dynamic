import { OutlinedInput } from '@mui/material';
import styled from 'styled-components';
// import { styled } from '@mui/material/styles';
// import  from '@mui/material/OutlinedInput';
const StyledSelect = styled(OutlinedInput)(({ theme }) => ({
  m: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  padding: '10px 16px',
  width: '199px',
  height: '47px',
  borderRadius: '30px',
  marginRight: '0 !important',
  '@media (max-width: 600px)': {
    width: '140px',
    marginTop: '0',
    padding: '10px',
    paddingRight: '26px',
  },
  '@media (max-width: 450px)': {
    width: '100%',
  },

  '.css-b1884d': {
    '@media (max-width: 600px)': {
      width: '140px',
      marginTop: '0',
      padding: '10px',
      paddingRight: '26px',
    },
    '@media (max-width: 450px)': {
      width: '100%',
    },
  },


  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E5E6F2',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E5E6F2', // or any other color you want
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#E5E6F2', // or any other color you want
  },


  '.MuiSelect-select': {
    display: 'flex',
    flexDirection: 'row-reverse',
    outline: 'none !important',
    justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0px',
    width: '167px',
    height: '27px',
    paddingRight: '0px !important',


  },
  '#demo-select-small': {
    color: 'var(--main-blue-color)',
    fontFamily: 'var(--effra-font)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
  },
  'input': {
    padding: 0,
    paddingBottom: '3px'
  }

}));

export default StyledSelect;
