import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Fork, Model, Shock } from "../components/ModelSelectList";
import { SubmitHandler, useForm } from "react-hook-form";

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
    <div>
      <h1>{modelSetup?.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fork">Fork</label>
          <select id="fork" {...register("fork")}>
            <option value="">Select a fork</option>
            {modelSetup?.forks.map((fork) => (
              <option key={forkName(fork)} value={forkName(fork)}>
                {forkName(fork)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="shock">Shock</label>
          <select id="shock" {...register("shock")}>
            <option value="">Select a shock</option>
            {modelSetup?.shocks.map((shock) => (
              <option key={shockName(shock)} value={shockName(shock)}>
                {shockName(shock)}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ModelSetup;
