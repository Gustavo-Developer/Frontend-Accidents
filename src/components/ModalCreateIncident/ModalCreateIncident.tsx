import * as React from "react";

import { Box, Button, FormControlLabel, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import FormInput from "../../components/FormInput";
import Modal from "@mui/material/Modal";
import { createTheme } from "@mui/material/styles";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface FormData {
  plate: string;
  incident: string;
  involved: string;
}

const ModalCreateIncident = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const formMethods = useForm<FormData>();

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="contained"
        endIcon={<AddIcon />}
        color="success"
      >
        Cadastrar Incidente
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container component="main" sx={{ height: "80vh" }}>
              <Grid
                container
                item
                alignItems="center"
                direction="column"
                justifyContent="space-evenly"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormProvider {...formMethods}>
                      <FormInput<FormData>
                        InputProps={{
                          sx: {
                            borderRadius: "24px",
                          },
                        }}
                        autoComplete="name"
                        autoFocus
                        name="plate"
                        label="Placa do carro"
                        required
                        rules={
                          {
                            //  ...loginValidators(t).email,
                          }
                        }
                      />
                    </FormProvider>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormProvider {...formMethods}>
                      <FormInput<FormData>
                        InputProps={{
                          sx: {
                            borderRadius: "24px",
                          },
                        }}
                        autoComplete="name"
                        autoFocus
                        name="involved"
                        label="Envolvidos"
                        required
                        rules={
                          {
                            //  ...loginValidators(t).email,
                          }
                        }
                      />
                    </FormProvider>
                  </Grid>
                  <Grid item xs={12}>
                    <FormProvider {...formMethods}>
                      <FormInput<FormData>
                        InputProps={{
                          sx: {
                            borderRadius: "24px",
                            marginBottom: "10px",
                          },
                        }}
                        autoComplete="email"
                        autoFocus
                        name="incident"
                        label="Como aconteceu o acidente"
                        required
                        rules={
                          {
                            //  ...loginValidators(t).email,
                          }
                        }
                      />
                    </FormProvider>
                  </Grid>
                </Grid>
                <Button
                  color="primary"
                  //disabled={isLoading}
                  disableElevation
                  fullWidth
                  sx={{ borderRadius: "24px", marginBottom: "30px" }}
                  //onClick={formMethods.handleSubmit(onSubmit)}
                  size="large"
                  variant="contained"
                >
                  Cadastrar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCreateIncident;
