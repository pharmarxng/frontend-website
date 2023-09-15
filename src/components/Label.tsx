interface LabelProps {
  label: string;
  classDef?: string;
}

const Label = ({ label, classDef }: LabelProps) => {
  return (
    <div className={`text-base/5 sm:text-xl/6 text-grey-100 ${classDef}`}>
      {label}
    </div>
  );
};

export default Label;
