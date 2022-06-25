import { Box, IconButton, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        marginTop: '12px',
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid #efefef'
      }}

    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          component="a"
          href="https://linkedin.com/in/psleandro"
          target="_blank"
          aria-label="linkedin link"
          size="small"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://github.com/psleandro"
          target="_blank"
          aria-label="github link"
          size="small"
        >
          <GitHubIcon />
        </IconButton>
      </Stack>
      <Typography color="text.secondary">
        Delevoped by Leandro Santos
      </Typography>
    </Box>
  )
}