import { Stack, Box } from "@mui/material";
import { LoginCard } from "./components/LoginCard";

export const LoginPage = () => {
  return (
    <Stack component="main" sx={{ height: "100vh", width: "100vw" }}>
      <Box
        component="section"
        sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <LoginCard />
      </Box>
    </Stack>
  );
};
