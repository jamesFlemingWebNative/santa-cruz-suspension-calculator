import { Model } from "./ModelSelectList";

type ModelSelectProps = {
  model: Model;
};

const ModelSelect = ({ model }: ModelSelectProps) => {
  //   const [selectedModel, setSelectedModel] = useState<Model | null>(null);

  return <div key={model.id}>{model.name}</div>;
};

export default ModelSelect;
