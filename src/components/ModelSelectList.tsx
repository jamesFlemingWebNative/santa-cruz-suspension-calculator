import { useEffect, useState } from "react";
import ModelSelect from "./ModelSelect";

export type Model = {
  id: number;
  name: string;
};

const ModelSelectList = () => {
  //   const [selectedModel, setSelectedModel] = useState<Model | null>(null);
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
    <>
      {models.map((model) => (
        <ModelSelect key={model.id} model={model} />
      ))}
    </>
  );
};

export default ModelSelectList;
