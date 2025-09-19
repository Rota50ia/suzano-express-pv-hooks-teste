export const TestimonialsSection = () => {
  const videoIds = ["8lXgS2xZxv8", "lJCwvkgSUVY", "a5Fkulj2SIY", "ZnkHaKyEJ4A"];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary">O Que Nossos Alunos Dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoIds.map((videoId, index) => (
              <div key={index} className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Depoimento ${index + 1}`}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};