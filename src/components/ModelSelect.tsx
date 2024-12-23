import { Model } from "./ModelSelectList";

type ModelSelectProps = {
  model: Model;
};

const ModelSelect = ({ model }: ModelSelectProps) => {
  //   const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const image = `../assets/bikes/${model.image}`;

  return (
    <div
      key={model.id}
      className="flex flex-col items-center gap-4 border-solid border-zinc-400 rounded border w-[200px] pt-2 pb-2 hover:bg-zinc-400 hover:text-white hover:cursor-pointer transition-colors duration-300"
    >
      <div className="font-bold text-3xl">{model.name}</div>
      <img src={image} alt="" />
    </div>
  );
};

export default ModelSelect;
