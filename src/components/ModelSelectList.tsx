import { useEffect, useState } from "react";
import ModelSelect from "./ModelSelect";

export type Model = {
  id: number;
  name: string;
  image: string;
  forks: Fork[];
  shocks: Shock[];
};

export type Fork = {
  brand: string;
  model: string;
  travel: string;
  details?: string;
  remote?: boolean;
};

export type Shock = {
  brand: string;
  model: string;
  size?: string;
  details?: string;
};

const ModelSelectList = () => {
  const [models, setModels] = useState<Model[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/models")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setModels(data);
      });
  }, []);

  return (
    <div className="flex flex-row items-center gap-y-8 flex-wrap max-w-[500px]">
      {models.map((model) => (
        <div className="w-1/2 flex justify-center" key={model.id}>
          <ModelSelect model={model} />
        </div>
      ))}
    </div>
  );
};

export default ModelSelectList;
