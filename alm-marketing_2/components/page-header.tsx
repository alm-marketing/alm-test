export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="pt-32 pb-16 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      {description && <p className="text-lg text-gray-400 max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}

