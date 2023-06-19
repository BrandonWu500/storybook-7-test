import Light from "@/components/Light/Light";

const Home = () => {
  return (
    <div className="flex flex-col gap-5 h-screen items-center justify-center">
      <Light intent="danger" outline />
      <Light intent="secondary" />
      <Light />
    </div>
  );
};
export default Home;
