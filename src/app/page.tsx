import AddTodo from "@/components/AddTodo";
import Navbar from "@/components/Navbar";
import Todos from "@/components/Todos";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">TODO NEXT + TYPESCRIPT</h2>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  );
}
