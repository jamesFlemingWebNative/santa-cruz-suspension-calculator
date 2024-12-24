import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type ModelSetup = {
  id: number;
  name: string;
  image: string;
};

const ModelSetup = () => {
  const { id } = useParams();
  const [modelSetup, setModelSetup] = useState<ModelSetup | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3001/models/${id}`)
      .then((res) => res.json())
      .then((data) => setModelSetup(data));
  }, [id]);

  return <div>{modelSetup?.name}</div>;
};

export default ModelSetup;
