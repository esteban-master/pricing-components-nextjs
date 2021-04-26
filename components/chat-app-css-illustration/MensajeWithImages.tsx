export const MensajeWithImages = ({ images }: { images: any[] }) => {
  return (
    <div className="flex self-end space-x-2">
      {images.map((image) => (
        <img
          key={image.name}
          src={image.path}
          className="w-10 h-10 rounded-xl"
          alt={`Imagen de ${image.name}`}
        />
      ))}
    </div>
  );
};
