import React from "react";
import Input from "../Input";
const CartBilling = ({
  onSubmit,
  onChange,
  onChange2,
  name,
  phone,
  address,
  payOption,
  creditOption,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-row">
        <Input
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          placeholder="Nume"
          size="6"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="phone"
          value={phone}
          placeholder="Număr de telefon"
          size="6"
          required
        />
        <Input
          onChange={onChange}
          type="text"
          name="address"
          value={address}
          placeholder="Adresă"
          size="6"
          required
        />

        <label className="control">
          Metodă de plată<span className="text-primary">*</span>:
        </label>
        <div>
          <input
            onChange={onChange}
            className="form-check-input"
            type="radio"
            name="payOption"
            id="1"
            value="cash"
            required
          />
          <label className="form-check-label" htmlFor="1">
            Numerar
          </label>
        </div>
        <div>
          <input
            onChange={onChange}
            className="form-check-input"
            type="radio"
            name="payOption"
            id="2"
            value="credit"
          />
          <label className="form-check-label" htmlFor="2">
            Card de credit/debit
          </label>
        </div>
        {payOption === "credit" ? (
          <div className="form-row">
            <Input
              onChange={onChange2}
              type="text"
              name="number"
              value={creditOption.number}
              placeholder="Număr card"
              size="6"
              required
            />
            <Input
              onChange={onChange2}
              type="text"
              name="owner"
              value={creditOption.owner}
              placeholder="Nume deținător card"
              size="6"
              required
            />
            <Input
              onChange={onChange2}
              type="text"
              name="ccv"
              value={creditOption.ccv}
              placeholder="CCV"
              size="6"
              required
            />
          </div>
        ) : null}
        <div className="pt-2">
          <input
            type="submit"
            className="btn btn-outline-primary text-uppercase mb-3 px-5"
            value="Trimite comandă"
          />
        </div>
      </div>
    </form>
  );
};

export default CartBilling;
