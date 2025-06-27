import Layout from "../layout/Layout";
import TaskManager from "../components/TaskManager";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskManager />
    </Layout>
  );
}