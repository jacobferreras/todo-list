import MyTaskContainer from "@/components/MyTaskContainer";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <MyTaskContainer />
      </div>
    </div>
  );
}
