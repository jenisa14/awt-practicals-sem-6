export default function User({ params }: any) {
  console.log(params);

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {params?.id}</p>
    </div>
  );
}
