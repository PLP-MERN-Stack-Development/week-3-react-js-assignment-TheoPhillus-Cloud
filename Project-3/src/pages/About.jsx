import Layout from "../layout/Layout";
import DataViewer from "../components/DataViewer";

export default function About() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Post Explorer</h1>
      <DataViewer />
    </Layout>
  );
}