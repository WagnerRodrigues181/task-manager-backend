import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import Header from "../components/Header";

export default function LoginPage() {
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
            <TextField label="Email" fullWidth margin="normal" />
            <TextField
              label="Senha"
              type="password"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Entrar
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
