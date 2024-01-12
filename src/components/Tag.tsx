interface TagProps {
  text: string
}

export default function Tag({ text }: TagProps) {
  return (
    <span
      className="mb-4 text-sm rounded text-primary-100 font-medium py-4 px-4"
      style={{
        background: "linear-gradient(247.53deg, #F8FCFA -17.2%, rgba(206, 236, 222, 0) 114.3%)"
        // background: "#F8FCFA"
      }}
    >
      {text}
    </span>
  );
}