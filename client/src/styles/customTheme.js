import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = (darkMode) =>
  createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#8FD5F6' : '#18ABF1',
      },
      secondary: {
        main: darkMode ? '#71C9F2' : '#1184BB',
      },
    },
    overrides: {
      MuiMenuItem: {
        root: {
          '&$selected': {
            borderRight: '4px solid #71C9F2',
            fontWeight: '700',
          },
        },
      },
      MuiPopover: {
        paper: {
          borderRadius: 2,
        },
      },
      MuiButton: {
        root: {
          borderRadius: 4,
          textTransform: 'none',
        },
      },
      MuiChip: {
        root: {
          borderRadius: 3,
          padding: '0px',
        },
        outlined: {
          backgroundColor: darkMode ? '#c197db15' : '#964ec215',
        },
      },
    },
    props: {
      MuiButton: {
        disableElevation: true,
      },
    },
  });

export default customTheme;
