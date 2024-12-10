function MortgageSelect() {
  return (
    <div className="form__select">
      <label className="form__select--label" htmlFor="repayment">
        Repayment
      </label>
      <input
        className="form__select--input"
        name="repayment"
        type="checkbox"
        required
      />
      <label className="form__select--label" htmlFor="interest">
        Interest Only
      </label>
      <input
        className="form__select--input"
        name="interest"
        type="checkbox"
        required
      />
    </div>
  );
}

export default MortgageSelect;
