import { useEffect, useState } from "react";
import ModelSelect from "./ModelSelect";

export type Model = {
  id: number;
  name: string;
  image: string;
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
