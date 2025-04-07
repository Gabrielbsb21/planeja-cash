"use client";

import { Card, H1, Button } from "./style";
import { CardContent, Box, Stack } from "@mui/material";

export const LoginForm = () => {
  return (
    <Card as="article">
      <CardContent>
        {/*
        <Image src="/images/logo.png" alt="Logo do planeja cash" width={260} height={200} />
        */}
        <Box component="header">
          <H1 variant="h1">Acesse agora o Planeja Cash</H1>
        </Box>
        <Stack component="form" direction="column" spacing={2}>
          <Box component="input" type="email" placeholder="Email" />
          <Box component="input" type="password" placeholder="Senha" />
          <Button fullWidth variant="contained" type="submit">
            Acessar plataforma
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
