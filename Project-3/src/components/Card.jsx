export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow rounded p-6 dark:bg-gray-800 dark:text-white">
      {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}