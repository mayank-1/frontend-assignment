import { getCurrencyFormat } from "./index"; // Adjust path as needed

describe("getCurrencyFormat", () => {
  it("formats INR currency with default settings", () => {
    expect(getCurrencyFormat(1234.56)).toBe("₹1,235"); // Expected INR format
    expect(getCurrencyFormat(0)).toBe("₹0");
    expect(getCurrencyFormat(-1234.56)).toBe("-₹1,235");
  });

  it("formats USD currency with default decimals", () => {
    expect(getCurrencyFormat(1234.56, "USD")).toBe("$1,235"); // Expected USD format
    expect(getCurrencyFormat(0, "USD")).toBe("$0");
    expect(getCurrencyFormat(-1234.56, "USD")).toBe("-$1,235");
  });

  it("formats with specified decimals", () => {
    expect(getCurrencyFormat(1234.567, "INR", 2)).toBe("₹1,234.57");
    expect(getCurrencyFormat(1234, "INR", 2)).toBe("₹1,234.00");
    expect(getCurrencyFormat(1234.567, "USD", 2)).toBe("$1,234.57");
    expect(getCurrencyFormat(1234, "USD", 2)).toBe("$1,234.00");
  });

  it("handles invalid amount input", () => {
    expect(getCurrencyFormat("abc")).toBe("Invalid amount");
    expect(getCurrencyFormat(null)).toBe("Invalid amount");
    expect(getCurrencyFormat(undefined)).toBe("Invalid amount");
    expect(getCurrencyFormat(NaN)).toBe("Invalid amount");
  });

  it("handles large numbers", () => {
    expect(getCurrencyFormat(1234567890.12, "INR")).toBe("₹1,23,45,67,890");
    expect(getCurrencyFormat(1234567890.12, "USD", 0, "en-US")).toBe(
      "$1,234,567,890"
    );
  });

  it("handles zero amount correctly", () => {
    expect(getCurrencyFormat(0, "INR")).toBe("₹0");
    expect(getCurrencyFormat(0, "USD")).toBe("$0");
  });
});
