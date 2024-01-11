import Card from "./Card";

export default function GameWrapper() {
  return (
    <main className="main-content">
      <div className="background">
        <div className="sun"></div>
        <div className="ground"></div>
      </div>
      <Card
        image="https://unsplash.com/photos/OB6cORrtyjo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjV8fGUzNnxlbnwwfHx8fDE3MDQ4MjAyNjd8MA&force=true"
        // image="https://unsplash.com/photos/8mAPS9YCE6U/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8ZTM2fGVufDB8fHx8MTcwNDgxNzYyM3ww&force=true"
        name="E36 M3 BMW"
      />

      <Card
        image="https://unsplash.com/photos/vMRXGZXll6Y/download?force=true"
        name="Prosche 911 GT3RS"
      />
    </main>
  );
}