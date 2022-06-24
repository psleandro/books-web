import { AppBar, Avatar, Box, Button, Container, IconButton, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: ['none', 'flex'],
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', gap: '4px', justifyContent: 'center' }}>
            <Button
              key="Home"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              key="Recomendações"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Recomendações
            </Button>
            <Button
              key="Sobre"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Sobre
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="View Profile">
              <IconButton onClick={() => { }} sx={{ p: 0 }}>
                <Avatar alt="Profile" src="/" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}