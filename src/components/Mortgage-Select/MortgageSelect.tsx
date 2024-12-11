type Props = {
  check: boolean;
  text: string;
  id: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function MortgageSelect({ check, text, id, onChange, value }: Props) {
  return (
    <div className="form__select">
      <label htmlFor={id} className="form__select--label">
        {text}
      </label>
      <input
        id={id}
        className="form__select--input"
        type="radio"
        checked={check}
        onChange={onChange}
        value={value}
        name="type"
      />
    </div>
  );
}

export default MortgageSelect;
