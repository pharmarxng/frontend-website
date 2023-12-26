interface LabelProps {
  label: string;
  classDef?: string;
}

const Label = ({ label, classDef }: LabelProps) => {
  return (
    <div className={`${classDef}`}>
      {label}
    </div>
  );
};

export default Label;
