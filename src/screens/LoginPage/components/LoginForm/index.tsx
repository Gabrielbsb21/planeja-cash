"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "@/schemas";
import { Card, H1, Button } from "./style";
import {
  CardContent,
  Box,
  Stack,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormControl,
  TextField,
  FormHelperText,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const router = useRouter();

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (data: LoginFormData) => {
    router.push("/dashboard/home");
  };

  return (
    <Card as="article">
      <CardContent>
        {/*
        <Image src="/images/logo.png" alt="Logo do planeja cash" width={260} height={200} />
        */}
        <Box component="header">
          <H1 variant="h1">Acesse agora o Planeja Cash</H1>
        </Box>
        <Stack component="form" direction="column" spacing={2} onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="E-mail"
            variant="outlined"
            fullWidth
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <FormControl variant="outlined" fullWidth error={!!errors.passowrd}>
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              label="Senha"
              {...register("passowrd")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText>{errors.passowrd?.message}</FormHelperText>
          </FormControl>
          <Button fullWidth variant="contained" type="submit">
            Acessar plataforma
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
