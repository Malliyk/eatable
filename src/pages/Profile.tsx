import AppLayout from "../layouts/AppLayout";

export default function Profile() {
  return (
    <AppLayout title="Profile">
      <div style={{ padding: "20px" }}>
        <h2>Your Profile</h2>

        <p>Name: -</p>

        <p>Mobile: -</p>

        <p>Attempts today: -</p>

        <p>Last quiz result: -</p>
      </div>
    </AppLayout>
  );
}