import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fork, Model, Shock } from "../components/ModelSelectList";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Container,
  Typography,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";

type FormValues = {
  fork: string;
  shock: string;
};

const ModelSetup = () => {
  const { id } = useParams();
  const [modelSetup, setModelSetup] = useState<Model | null>(null);
  const { register, handleSubmit } = useForm<FormValues>();

  useEffect(() => {
    fetch(`http://localhost:3001/models/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModelSetup(data);
      });
  }, [id]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  const forkName = (fork: Fork) => `${fork.brand} ${fork.model}`;

  const shockName = (shock: Shock) => `${shock.brand} ${shock.model}`;

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        {modelSetup?.name}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            select
            label="Fork"
            {...register("fork")}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">
              <em>Select a fork</em>
            </MenuItem>
            {modelSetup?.forks.map((fork) => (
              <MenuItem key={forkName(fork)} value={forkName(fork)}>
                {forkName(fork)}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <TextField
            select
            label="Shock"
            {...register("shock")}
            fullWidth
            margin="normal"
          >
            <MenuItem value="">
              <em>Select a shock</em>
            </MenuItem>
            {modelSetup?.shocks.map((shock) => (
              <MenuItem key={shockName(shock)} value={shockName(shock)}>
                {shockName(shock)}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default ModelSetup;
