import ModelSelectList from "../components/ModelSelectList";

const Home = () => {
  return (
    <>
      <div className="flex justify-center gap-6 flex-col items-center mt-10 font-sans text-eerie-black">
        <img src="../assets/santa-cruz-logo.png" alt="Santa Cruz Logo" />
        <div className="flex justify-center gap-2 flex-col items-center"></div>
        <ModelSelectList />
      </div>
    </>
  );
};

export default Home;
