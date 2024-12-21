import { render, screen } from "@testing-library/react"; // Import screen!
import Table from "./index";

describe("Table", () => {
  it("renders correctly with basic props (no data)", () => {
    const header = [
      { header: "Column 1", key: "col1" },
      { header: "Column 2", key: "col2" },
    ];

    render(<Table header={header} />);
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
    expect(screen.getByText("No data available")).toBeInTheDocument();
  });

  it("renders correctly with data", () => {
    const header = [
      { header: "Column 1", key: "col1" },
      { header: "Column 2", key: "col2" },
    ];
    const data = [
      { col1: "Value 1", col2: "Value 2" },
      { col1: "Value 3", col2: "Value 4" },
    ];

    render(<Table header={header} data={data} />);
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
  });

  it('renders "Loading..." while loading', () => {
    const header = [
      { header: "Column 1", key: "col1" },
      { header: "Column 2", key: "col2" },
    ];

    render(<Table header={header} loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
  });

  it('renders "No data available" for empty data', () => {
    const header = [
      { header: "Column 1", key: "col1" },
      { header: "Column 2", key: "col2" },
    ];

    render(<Table header={header} data={[]} />);
    expect(screen.getByText("No data available")).toBeInTheDocument();
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
  });

  it("renders cell content correctly", () => {
    const header = [
      { header: "Column 1", key: "col1" },
      { header: "Column 2", key: "col2" },
    ];
    const data = [{ col1: "Test Value 1", col2: 123 }];

    render(<Table header={header} data={data} />);
    expect(screen.getByText("Test Value 1")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
  });

  it("renders custom cell content using render prop", () => {
    const header = [
      {
        header: "Column 1",
        key: "col1",
        render: (value) => (
          <span data-testid="custom-render">{`Formatted: ${value * 2}`}</span>
        ),
      },
      { header: "Column 2", key: "col2" },
    ];
    const data = [{ col1: 10, col2: "test" }];

    render(<Table header={header} data={data} />);
    expect(screen.getByTestId("custom-render")).toHaveTextContent(
      "Formatted: 20"
    );
    expect(
      screen.getByRole("table", {
        "aria-label": "Data table to show amount pledged and percentage funded",
      })
    ).toMatchSnapshot();
  });
});
